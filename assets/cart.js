class CartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (event) => {
      event.preventDefault();
      this.closest('cart-items').updateQuantity(this.dataset.index, 0);
    });
  }
}

customElements.define('cart-remove-button', CartRemoveButton);

class CartItems extends HTMLElement {
  constructor() {
    super();

    this.lineItemStatusElement = document.getElementById('shopping-cart-line-item-status');

    this.currentItemCount = Array.from(this.querySelectorAll('[name="updates[]"]'))
      .reduce((total, quantityInput) => total + parseInt(quantityInput.value), 0);

    this.debouncedOnChange = debounce((event) => {
      this.onChange(event);
    }, 300);

    this.addEventListener('change', this.debouncedOnChange.bind(this));
  }

  onChange(event) {
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
  }

  getSectionsToRender() {
    const sections = [
      {
        id: 'main-cart',
        section: document.getElementById('main-cart').dataset.id,
        selector: '.js-contents',
      },
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('main-cart').dataset.id,
        selector: '.js-contents-footer',
      }
    ];
    if (document.querySelector(".js-contents-footer-free-shipping-bar")) {
      sections.push({
        id: 'main-cart-footer',
        section: document.getElementById('main-cart').dataset.id,
        selector: '.js-contents-footer-free-shipping-bar',
      });
    }
    return sections;
  }

  updateQuantity(line, quantity, name) {
    this.enableLoading(line);

    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map((section) => section.section),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_change_url}`, {...fetchConfig(), ...{ body }})
      .then((response) => {
        return response.text();
      })
      .then((state) => {
        const parsedState = JSON.parse(state);
        this.parentElement.classList.toggle('is-empty', parsedState.item_count === 0);
        this.parentElement.classList.toggle('is-empty', parsedState.item_count === 0);
        const cartFooter = document.getElementById('main-cart-footer');

        if (cartFooter) cartFooter.classList.toggle('is-empty', parsedState.item_count === 0);

        this.getSectionsToRender().forEach((section => {
          const elementToReplace =
            document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);

          elementToReplace.innerHTML =
            this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
        }));

        this.updateLiveRegions(line, parsedState.item_count);
        const lineItem =  document.getElementById(`CartItem-${line}`);
        if (lineItem && lineItem.querySelector(`[name="${name}"]`)) lineItem.querySelector(`[name="${name}"]`).focus();
        this.disableLoading();
      }).catch(() => {
        this.querySelectorAll('.loading-overlay').forEach((overlay) => overlay.classList.add('hidden'));
        document.getElementById('cart-errors').textContent = window.cartStrings.error;
        this.disableLoading();
      });
  }

  updateLiveRegions(line, itemCount) {
    if (this.currentItemCount === itemCount) {
      document.getElementById(`Line-item-error-${line}`)
        .querySelector('.cart-item__error-text')
        .innerHTML = window.cartStrings.quantityError.replace(
          '[quantity]',
          document.getElementById(`Quantity-${line}`).value
        );
    }

    this.currentItemCount = itemCount;
    this.lineItemStatusElement.setAttribute('aria-hidden', true);

    const cartStatus = document.getElementById('cart-live-region-text');
    cartStatus.setAttribute('aria-hidden', false);

    setTimeout(() => {
      cartStatus.setAttribute('aria-hidden', true);
    }, 1000);
  }

  getSectionInnerHTML(html, selector) {
    return new DOMParser()
      .parseFromString(html, 'text/html')
      .querySelector(selector).innerHTML;
  }

  enableLoading(line) {
    document.getElementById('main-cart').classList.add('cart__items--disabled');
    this.querySelectorAll(`#CartItem-${line} .loading-overlay`).forEach((overlay) => overlay.classList.remove('hidden'));
    document.activeElement.blur();
    this.lineItemStatusElement.setAttribute('aria-hidden', false);
  }

  disableLoading() {
    document.getElementById('main-cart').classList.remove('cart__items--disabled');
  }
}

customElements.define('cart-items', CartItems);

class FreeShippingThreshold extends HTMLElement {
  constructor() {
    super();

    let template = this.getElementsByTagName("template")[0];
    let templateContent = template.content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }

  connectedCallback() {
    const shadowRoot = this.shadowRoot;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: Shopify.currency.active,
      currencyDisplay: 'narrowSymbol'
    });
    let threshold = this.getAttribute("data-threshold");
    threshold *= Shopify.currency.rate;
    const cartTotal = this.getAttribute("data-cart-total");
    const difference = threshold - cartTotal;
    const line = shadowRoot.querySelector("hr")

    if (difference > 0) {
      const freeShippingBar = shadowRoot.querySelector(".free-shipping-bar__bar-inner");
      const thresholdText = shadowRoot.querySelector("[slot='threshold-text']");
      thresholdText.innerHTML = formatter.format(difference / 100);
      freeShippingBar.style.width = `${cartTotal / threshold * 100}%`;
      line.style.display = "none";
    } else {
      const text = shadowRoot.querySelector("[slot='text']");
      const freeShippingBarOuter = shadowRoot.querySelector(".free-shipping-bar__bar");
      text.innerHTML = this.getAttribute("data-free-shipping-reached");
      freeShippingBarOuter.style.display = "none";
      line.style.display = "block";
    }
    
  }
  
}

customElements.define('free-shipping-threshold', FreeShippingThreshold);
class DetailsDisclosure extends HTMLElement {
  constructor() {
    super();
    this.mainDetailsToggle = this.querySelector('details');
    this.content = this.mainDetailsToggle.querySelector('summary').nextElementSibling;
    this.mainDetailsToggle.onFocusOut = this.onFocusOut.bind(this);
    this.mainDetailsToggle.onToggle = this.onToggle.bind(this);
  }

  onFocusOut() {
    setTimeout(() => {
      if (!this.contains(document.activeElement)) this.close();
    })
  }

  onToggle() {
    if (!this.animations) this.animations = this.content.getAnimations();

    if (this.mainDetailsToggle.hasAttribute('open')) {
      this.animations.forEach(animation => animation.play());
    } else {
      this.animations.forEach(animation => animation.cancel());
    }
  }

  close() {
    this.mainDetailsToggle.removeAttribute('open');
    this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
  }
}

customElements.define('details-disclosure', DetailsDisclosure);

class HeaderMenu extends DetailsDisclosure {
  constructor() {
    super();
    this.header = document.querySelector('header');
    this.headerItem = this.querySelector('details');
    
    // this.content = this.querySelector('summary').nextElementSibling;
    
    this.headerItem.addEventListener("mouseenter", this.onMouseenter);
    this.headerItem.addEventListener("mouseleave", this.onMouseleave);
    this.onFocusOut = null;
    this.onToggle = null;
  }

  onMouseenter() {
    this.setAttribute("open", "");
    if (!this.animations) this.animations = this.querySelector('summary').nextElementSibling.getAnimations();
    this.animations.forEach(animation => animation.play());
  }

  onMouseleave() {
    this.removeAttribute("open");
    if (!this.animations) this.animations = this.querySelector('summary').nextElementSibling.getAnimations();
    this.animations.forEach(animation => animation.cancel());
  }
}

customElements.define('header-menu', HeaderMenu);

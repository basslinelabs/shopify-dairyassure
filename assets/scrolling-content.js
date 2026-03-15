class ScrollingContent extends HTMLElement {
  constructor() {
    super();

    this.direction = this.dataset.direction;
    this.speed = parseInt(this.dataset.speed) || 100;
    this.isInView = false;

    this.horizontallyScrollingContent = document.querySelectorAll(".horizontally-scrolling-content");

    this.observer = new IntersectionObserver(this.onIntersection.bind(this), { threshold: 0.1 });
    this.observer.observe(this);

    this.handleScroll = this.handleScroll.bind(this);

    this.animating = false;
  }

  updateScrollProgress() {
    if (!this.isInView) return;

    const rect = this.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate progress (0 to 1)
    const distanceFromViewportBottom = viewportHeight - rect.top;
    const totalScrollDistance = viewportHeight + rect.height;
    const scrollProgress = Math.min(1, Math.max(0, (distanceFromViewportBottom / totalScrollDistance)));

    // Update the display
    const translateValue = this.direction === "reverse" ? `translateX(${scrollProgress * this.speed}%)` : `translateX(-${scrollProgress * this.speed}%)`
    this.horizontallyScrollingContent.forEach(el => {
      el.style.transform = translateValue;
    })
  }

  handleScroll() {
    if (!this.animating) {
      this.animating = true;
      window.requestAnimationFrame(() => {
        this.updateScrollProgress();
        this.animating = false;
      });
    }
  }

  onIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isInView = true;
        this.updateScrollProgress(); // Initial calculation
        window.addEventListener('scroll', this.handleScroll);
      } else {
        this.isInView = false;
        window.removeEventListener('scroll', this.handleScroll);
      }
    });
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.handleScroll);
    this.observer.disconnect();
  }
}

customElements.define('scrolling-content', ScrollingContent);

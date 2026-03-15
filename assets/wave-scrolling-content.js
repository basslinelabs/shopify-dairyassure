class WaveScrollingContent extends HTMLElement {
  constructor() {
    super();

    this.svg = this.querySelector("svg");

    this.animationStyle = this.dataset.animationStyle;
    this.direction = this.dataset.direction;
    this.speed = parseInt(this.dataset.speed) || 100;
    this.isInView = false;

    if (this.animationStyle === "play_on_scroll") {
      this.observer = new IntersectionObserver(this.onIntersection.bind(this), { threshold: 0.1 });
      this.observer.observe(this);

      this.handleScroll = this.handleScroll.bind(this);

      this.animating = false;
    } else if (this.animationStyle === "pause_on_hover") {
      this.addEventListener("mouseenter", () => this.svg.pauseAnimations());
      this.addEventListener("mouseleave", () => this.svg.unpauseAnimations());
    }
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
    this.svg.querySelectorAll("textPath").forEach((textPath, index) => {
      let startOffset;
      if (index === 0) {
        startOffset = this.direction === "reverse" ? parseFloat(0) : parseFloat(-100);
      } else {
        startOffset = this.direction === "reverse" ? parseFloat(100) : parseFloat(0);
      }

      const startOffsetValue = this.direction === "reverse" ? `${startOffset - scrollProgress * this.speed * 10}%` : `${startOffset + scrollProgress * this.speed * 10}%`
      textPath.setAttribute("startOffset", startOffsetValue)
    });
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

customElements.define('wave-scrolling-content', WaveScrollingContent);

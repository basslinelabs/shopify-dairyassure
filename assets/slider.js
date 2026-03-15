if (!customElements.get("column-slider")) {
  customElements.define("column-slider", class ColumnSlider extends HTMLElement {
    constructor() {
      super();

      this.mobileLayout = this.dataset.mobileLayout || 'slider';
      this.desktopLayout = this.dataset.desktopLayout || 'slider';

      this.mobileSlidesPerView = this.dataset.mobileSlidesPerView || 'auto';
      this.desktopSlidesPerView = this.dataset.desktopSlidesPerView || 'auto';

      this.mobileMediaQuery = window.matchMedia("(max-width: 749px)");
    }

    connectedCallback() {
      this.mobileMediaQuery.addEventListener('change', this.checkBreakpoint.bind(this));

      this.checkBreakpoint();
    }

    checkBreakpoint = function () {
      const allSliders = this.querySelectorAll(".swiper-column-slider");

      allSliders.forEach((slider) => {
        if ((this.mobileMediaQuery.matches && this.mobileLayout === "slider")) {
          if (!slider.swiper) {
            this.enableSlider(slider);
          }
        } else if (!this.mobileMediaQuery.matches && this.desktopLayout === "slider") {
          if (!slider.swiper) {
            this.enableSlider(slider);
          }
        } else {
          if (slider.swiper) {
            this.disableSlider(slider.swiper);
          }
        }
      });
    };

    enableSlider = function (slider) {
      const sliderId = slider.id;
      let slideCount = slider.querySelectorAll(
        ".swiper-slide:not(.swiper-slide-duplicate)"
      ).length;

      if (slideCount > 1) {
        new Swiper(`#${sliderId}`, {
          breakpoints: {
            0: {
              slidesPerView: this.mobileSlidesPerView,
              spaceBetween: 20,
            },
            750: {
              slidesPerView: this.desktopSlidesPerView,
              spaceBetween: 40,
            }
          },
          pagination: {
            el: `#${this.id} .swiper-pagination`,
            clickable: true,
          },
          navigation: {
            prevEl: `#${this.id} .swiper-button-prev`,
            nextEl: `#${this.id} .swiper-button-next`,
          },
        });
      }
    };

    disableSlider = function (slider) {
      if (slider !== undefined) {
        slider.destroy(true, true);
      }
    };
  });
}

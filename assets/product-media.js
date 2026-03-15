class ProductMedia extends HTMLElement {
    // connect component
    connectedCallback() {
        const breakpoint = window.matchMedia("(max-width: 990px)");
        let productMediaSlider;
        let onClick;
        const checkBreakpoint = function () {
            const allSliders = document.querySelectorAll('.swiper-product-media');
            allSliders.forEach(slider => {
                if (slider.dataset.desktopLayout === "slider") {
                    enableSlider(slider);
                } else {
                    // display in stacked format on desktop
                    if (breakpoint.matches === false) {
                        disableSlider(slider);
                    // display in slider format on mobile
                    } else if (breakpoint.matches === true) {
                        if (!slider.classList.contains("swiper-initialized")) {
                            enableSlider(slider);
                        }
                    }
                }
                if (breakpoint.matches === false) {
                    return enableZoom();
                // don't enable zoom on mobile.
                } else if (breakpoint.matches === true) {
                    return disableZoom();
                }
            });
        }
        const enableSlider = function (slider) {
            const sliderId = slider.id;
            slider.classList.remove("product-grid");
            let slideCount = slider.querySelectorAll(".swiper-slide:not(.swiper-slide-duplicate)").length;
            const thumbsId = `${sliderId}--thumbs`;
            let thumbsSwiper;
            if (document.getElementById(thumbsId)) {
                thumbsSwiper = new Swiper(`#${thumbsId}`, {
                    loop: false,
                    slidesPerView: 5,
                    spaceBetween: 5
                });
            }
            if (slideCount > 1) {
                productMediaSlider = new Swiper(`#${sliderId}`, {
                    loop: true,
                    zoom: {
                        maxRatio: 5,
                        containerClass: `swiper-zoom-container`
                    },
                    pagination: {
                        el: `#${sliderId} .swiper-pagination`,
                        clickable: true
                    },
                    navigation: {
                        nextEl: `#${sliderId} .swiper-button-next`,
                        prevEl: `#${sliderId} .swiper-button-prev`
                    },
                    thumbs: {
                        swiper: thumbsSwiper,
                    },
                });
            }
        }

        const disableSlider = function () {
            if (productMediaSlider !== undefined) {
                productMediaSlider.destroy(true, true);
            }
        }

        const enableZoom = function () {
            document.getElementById("MainProduct").classList.add("product-grid");
            let slides = document.getElementsByClassName("swiper-zoom-container");
            Array.from(slides).forEach((slide) => {
                const onMouseMove = function (event) {
                    const x = event.offsetX / slide.offsetWidth * 100
                    const y = event.offsetY / slide.offsetHeight * 100
                    slide.style.backgroundPosition = x + '% ' + y + '%';
                }
                // remove zoom
                const onMouseOut = function () {
                    slide.removeEventListener("mousemove", onMouseMove);
                    slide.removeEventListener("mouseout", onMouseOut);
                    slide.classList.remove("js-zoom-container");
                    slide.style.backgroundImage = "";
                }
                const onClick = function () {
                    let imageUrl = slide.children[0].src;
                    slide.style.backgroundImage = `url(${imageUrl})`;
                    slide.classList.add("js-zoom-container");
                    slide.addEventListener("mousemove", onMouseMove);
                    slide.addEventListener("mouseout", onMouseOut);
                }
                slide.addEventListener("click", onClick);
            });
        }

        const disableZoom = function () {
            let slides = document.getElementsByClassName("swiper-zoom-container");
            Array.from(slides).forEach((slide) => {
                slide.removeEventListener("click", onClick);
            });
        }

        breakpoint.addListener(checkBreakpoint);
        checkBreakpoint(); // first check
    }
}


customElements.define('product-media', ProductMedia);
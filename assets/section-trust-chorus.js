/**
 * DA Trust Chorus — Swiper initialization for mobile quote carousel
 */
document.addEventListener('DOMContentLoaded', function () {
  var el = document.querySelector('.da-trust-section__swiper');
  if (el && typeof Swiper !== 'undefined') {
    new Swiper(el, {
      slidesPerView: 1.2,
      spaceBetween: 16,
      pagination: {
        el: '.da-trust-section__swiper-pagination',
        clickable: true,
      },
      a11y: {
        containerRoleDescriptionMessage: 'Customer testimonials carousel',
        slideRole: 'group',
        slideLabelMessage: 'Testimonial {{index}} of {{slidesLength}}',
      },
    });
  }
});

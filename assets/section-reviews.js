/**
 * DA Reviews — Filter tabs and "See more" toggle
 */
document.addEventListener('DOMContentLoaded', function () {
  // Filter tabs
  var tabs = document.querySelectorAll('.da-reviews__tab');
  var cards = document.querySelectorAll('.da-reviews__card');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var variant = this.getAttribute('data-variant');

      // Update active tab
      tabs.forEach(function (t) {
        t.classList.remove('da-reviews__tab--active');
      });
      this.classList.add('da-reviews__tab--active');

      // Filter cards
      cards.forEach(function (card) {
        if (variant === 'all' || card.getAttribute('data-variant') === variant) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Show more toggle
  var showMoreBtn = document.querySelector('.da-reviews__show-more-btn');
  var reviewList = document.querySelector('.da-reviews__list');

  if (showMoreBtn && reviewList) {
    showMoreBtn.addEventListener('click', function () {
      reviewList.classList.add('da-reviews__list--expanded');
      this.parentElement.style.display = 'none';
    });
  }
});

$(document).ready(function () {
  var classList = ['all', 'all', 'all', 'all', 'all', 'all', 'all'];
  var Slider = new Swiper('.container .swiper-container', {
    loop: false,
    autoplay: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    on: {
      init: function () {
        var index = this.activeIndex;
        $('.container')
          .removeClass(classList)
          .addClass(classList[index]);

        $('.container .img-wrapper')
          .removeClass('active')
          .eq(index)
          .addClass('active');
      }
    }
  }).on('slideChange', function () {
    var index = this.activeIndex;
    $('.container')
      .removeClass(classList)
      .addClass(classList[index]);
    $('.container .img-wrapper')
      .removeClass('active')
      .eq(index)
      .addClass('active');
  });
  $(window).on('resize', function () {
    Slider.update();
  });
});
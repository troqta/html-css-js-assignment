$(document).ready(function () {
  var totalH = $('#stickyNav').offset().top;
  $(window).bind('scroll', function () {
      var vPos = $(window).scrollTop();

      if (totalH < vPos) {
          $('#stickyNav').css({
              'position': 'fixed',
                  'top': 0
          })
      } else {
          $('#stickyNav').css({
              'position': 'absolute',
              'top': ''
          })
      }
  });
});
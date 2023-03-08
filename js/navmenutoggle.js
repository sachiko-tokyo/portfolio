$(function() {
  $(function() {
    $('.btn-trigger').on('click', function() {
      $(this).toggleClass('active');

      // remove "fadeInDown" class before jumping to another section
      if ($(this).hasClass('active')) {
        $('.nav-toggle, .nav-second-nav').toggleClass('show');
        $(".nav-menu-li a").on("click", function() {
          $(".nav-second-nav").removeClass("show");
          $(".btn-trigger").removeClass("active")
        });
      }
    });
  });
})
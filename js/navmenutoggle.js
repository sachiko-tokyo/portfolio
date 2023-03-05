$(function() {

    $(function(){
        $('.btn-trigger').on('click', function() {
          // $(this).toggleClass('active');

          // remove "fadeInDown" class before jumping to another section
          if ($(this).hasClass('active')) {
              let nodeList = document.querySelectorAll('.fadeInDown');
              let items = Array.from(nodeList);
              items.map(i => {
                  i.classList.remove('fadeInDown')
              })
              $(this).toggleClass('active');
              $('body').css('overflow', 'hidden');
          }

          $('.nav-toggle, .nav-second-nav').toggleClass('show');
          document.body.classList.toggle('popup-stop-scroll')
          return false;
        });
      });

})


/*---Header---*/ 
$(document).ready(function () {
   
  $(window).on('resize', () => {
      $('#toggle-menu').removeClass('menu-is-active');
    });
    
    let toggle = document.getElementById('toggle-menu');
    let sider = document.getElementById('sider')
    
    document.onclick = function(e){
      if(e.target.id !== 'sider' && e.target.id !== 'toggle-menu'){
          toggle.classList.remove('menu-is-active')
          sider.classList.remove('active')
      }
    }
    
    toggle.onclick = function(){
      toggle.classList.toggle('menu-is-active');
      sider.classList.toggle('active')
    }

    $(window).scroll(function () {
      
      var lastScrollTop = 0;
      var scrollTop = $(this).scrollTop();

      if (scrollTop > lastScrollTop) {
        toggle.classList.remove('menu-is-active');
        sider.classList.remove('active')
      }
    });

    
});

/*---Timeline---*/ 

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };

    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
      "background-image",
      "url(" +
        selectors.item
          .first()
          .find(selectors.img)
          .attr("src") +
        ")"
    );

    var itemLength = selectors.item.length;
    
    $(".timeline-container").scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).position().top;
        max = $(this).height() + $(this).position().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
            ".timeline-1",
            "url(" +
              selectors.item
                .last()
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
            ".timeline-1",
            "url(" +
              $(this)
                .find(selectors.img)
                .attr("src") +
              ")"
          );
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$(".timeline").timeline();

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



    const submitBtn = document.getElementById("submit-btn");
    const cancelBtn = document.getElementById("cancel-btn");

     // 清除所有輸入框的內容
     // 清除所有輸入框的內容

     document.querySelectorAll("input, textarea").forEach(input => input.value = "");
    });

    cancelBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        // 清除所有輸入框的內容
        
        document.querySelectorAll("input, textarea").forEach(input => input.value = "");

    
});
/*---Header---*/ 
$(document).ready(function () {
   
    $(window).on('resize', () => {
        $('#toggle-menu').removeClass('menu-is-active');
      });
      
      let toggle = document.getElementById('toggle-menu');
      let sider = document.getElementById('sider')
      
      //  toggle burger menu ---->
      toggle.onclick = function(){
        toggle.classList.toggle('menu-is-active');
        sider.classList.toggle('active')
      }
      
      document.onclick = function(e){
        if(e.target.id !== 'sider' && e.target.id !== 'toggle-menu'){
            toggle.classList.remove('menu-is-active')
            sider.classList.remove('active')
        }
      }
      
      
      $(window).scroll(function () {
        
        var lastScrollTop = 0;
        var scrollTop = $(this).scrollTop();
        
        if (scrollTop > lastScrollTop) {
          toggle.classList.remove('menu-is-active');
          sider.classList.remove('active')
        }
      });
      
      //  toggle burger menu <----
      
      
  });

// Slide Image

var images = [
  "IMG/homeImg2.png",
  "IMG/homeImg1.png",
  "IMG/homeImg3.png",
  "IMG/homeImg4.png",
  "IMG/homeImg6.png"
];
var currentImage = 0;

var slide = document.getElementById("slide");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

function showImage() {
  slide.src = images[currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage();
}

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  showImage();
}

prev.addEventListener("click", prevImage);
next.addEventListener("click", nextImage);

showImage();


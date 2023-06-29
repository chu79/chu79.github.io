// jQuery($ => {

//     $('#toggle-menu').on('click', e => {
//         $(e.currentTarget).toggleClass('menu-is-active')
//     });
// });

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


// window.addEventListener('mouseup',function(event){
//     let toggle = document.getElementById('toggle-menu')
//     if(event.target != toggle && )
// });

// let toggle = document.getElementById('toggle-menu')

// if (toggle.classList.length = 0) {
//     $(window).click(function () { 
//         toggle.classList.add('menu-is-activer')     
//     });
    
// }



// document.onclick = function (e) {
//     if (e.target.id !== 'toggle-menu') {
//         toggle-menubar.classList.toggle('menu-is-active')
//     }   
// }
// if (e.target.id !== 'toggle-menu'){
//     toggle-menubar.classList.removeClass('menu-is-active')
// }
// window.addEventListener



/*navigation icon animation*/
// let trigger = 'X';

// jQuery(document).ready(function () {

//     $('#toggle-menu').click(function () {
//         trigger = 'X';
//         $(this).toggleClass('menu-is-active')
//     });

//     /* click outside of nav to trigger navigation icon animation*/
// $(document).click(function () {
//     if (trigger == 'X') {
//         $("#toggle-menu").toggleClass();
//         trigger = 'ham';
//     }
// });

// $("nav").click(function (e) {
//     e.stopPropagation();
//     return false;
// });

// });


/*toggle Nav menu Background up & down*/

// if ($(window).width() <= 768) {
//  $('#toggle-menu').on('click', function () {
//     if ($('.nav').is(':visible')) {
//         $('.nav').animate({
//             height: '0'
//         }, function () {
//             $(this).hide();
//         });
//     } else {
//         $('.nav').show();
//         $('.nav').animate({
//             height: '180'
//         });
//     }
//  });
// }

/* Click outside of nav to close Toggle*/

// if ($(window).width() <= 768) {
//     $(document).click(function () {
//         $(".nav").hide();
//     });
//     $("#toggle-menu").click(function (e) {
//         e.stopPropagation();
//         return false;
//     });

// }





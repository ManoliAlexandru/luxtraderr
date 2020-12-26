// WEBP img===============
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
// </WEBP img===============

// BURGER SCRIPT (доделать)===================
let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});

let icon_menu = document.querySelector('.icon-menu');
icon_menu.addEventListener("click", function(e) {
    icon_menu.classList.toggle('_active')
})

let icon_menu_body = document.querySelector('.menu__body');
icon_menu.addEventListener("click", function(e) {
    icon_menu_body.classList.toggle('_active')
})

document.documentElement.addEventListener("click", function (e) {
    if(!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header__menu'); 
        user_menu.classList.remove('_active');
    }
});;
// </BURGER SCRIPT (доделать)=================

function ibg(){

    let ibg=document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();;


// BildSlider


let sliders = document.querySelectorAll('.swiper');
if(sliders) {
    for(let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if(slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper_bild');
        }
        if(slider.classList.contains('_gallery')) {
            // slider.data('LightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params){ }


const lots_slider = new Swiper('.slider-lots__body',{

    // effect: 'fade',
    // autoplay: {
    //     delay: 3000,

    // },

    observer: true,
    observerParents: true,
    slidesPreView: 0,
    spaceBetween: 0,
    // autoHeight: auto,
    speed: 800,
    loop: true,
    centeredSlides: true,
    
    navigation:{
        nextEl: '.control-slider-lots__arrow_next',
        prevEl:'.control-slider-lots__arrow_prev',
    },
    on: {
        lazyImageReady: function(){
            ibg()
        },
    },

});

const quotes_slider = new Swiper('.slider-quotes__body',{

    effect: 'fade',
    // autoplay: {
    //     delay: 3000,

    // },

    observer: true,
    observerParents: true,
    slidesPreView: 1,
    spaceBetween: 0,
    // autoHeight: auto,
    speed: 800,
    loop: true,
    centeredSlides: true,
    
    navigation:{
        nextEl: '.control-slider-quotes__circle',
        // prevEl:'.control-slider-lots__arrow_prev',
    },

    breakpoints:{
        320: {
            autoHeight:true,
        },
        570: {
            autoHeight:false,
        },
    },

    on: {
        lazyImageReady: function(){
            ibg()
        },
    },

});
;


window.onload = function(e){
    if(document.querySelector('.swiper-container')){
      let mySwiper = new Swiper('.swiper-container', {
          // Optional parameters
          direction: 'horizontal',
          observeParents: true,
          slidesPerView: 1,
          spaceBetween: 0,
          autoheight: 0,
          speed: 800,
          loop: true,
        
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
            cliclable: true,
            type: 'bullets'
          },
          lazy: {
              loadPrevNext: true,
          },
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        })
      
      }

      let mainSliderImages = document.querySelectorAll('.mainSlider__image'),
      mainSliderDotts = document.querySelectorAll(' .swiper-pagination-bullet');
    
    

      for(let i = 0; i < mainSliderImages.length; i++){
          
          const mainSliderImage = mainSliderImages[i].querySelector('img').getAttribute('src');
          mainSliderDotts[i].style.backgroundImage = "url('" + mainSliderImage + "')";


        }

     

}


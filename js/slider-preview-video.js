const sliderVideo=document.querySelector(".preview__video-slider-container"),sliderPreviewVideo=new Swiper(sliderVideo,{loop:!0,slideClass:"preview__video-slide",wrapperClass:"preview__video-slider-wrapper",spaceBetween:10,centeredSlides:!0,slidesPerView:1.5,speed:5e3});export default sliderPreviewVideo;
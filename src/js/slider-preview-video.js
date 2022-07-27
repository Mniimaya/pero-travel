const sliderVideo = document.querySelector('.preview__video-slider-container');


const sliderPreviewVideo = new Swiper(sliderVideo, {
  loop: true,
  slideClass: "preview__video-slide",
  wrapperClass: "preview__video-slider-wrapper",
  spaceBetween: 10,
  centeredSlides: true,
  slidesPerView: 1.5,
  speed: 5000,
});

export default sliderPreviewVideo;

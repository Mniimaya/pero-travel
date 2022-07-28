const sliderVideo = document.querySelector('.preview__video-slider-container');


const sliderPreviewVideo = new Swiper(sliderVideo, {
  slideClass: "preview__video-slide",
  wrapperClass: "preview__video-slider-wrapper",
  spaceBetween: 10,
  slidesPerView: 1.5,
});

export default sliderPreviewVideo;

const sliderCatalog = document.querySelector('.preview__catalog-slider-container');


const sliderPreviewVideo = new Swiper(sliderCatalog, {
  slideClass: "preview__catalog-slider-slide",
  wrapperClass: "preview__catalog-slider-wrapper",
  spaceBetween: 10,
  slidesPerView: 1.2,
  navigation: {
    nextEl: '.preview__catalog-slide-prev',
    prevEl: '.preview__catalog-slide-next',
  },
  scrollbar: {
    el: '.preview__catalog-scrollbar',
    draggable: true,
  },
});

export default sliderCatalog;

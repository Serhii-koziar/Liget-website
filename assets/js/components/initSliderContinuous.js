import Swiper from 'swiper/swiper-bundle.esm.browser.min'

export function initSliderContinuous() {
  const slider = document.querySelector('.continuous-slider')
  if (slider) {
    const sliderItems = document.querySelectorAll('.continuous-slider-item')
    const sliderContinuous = new Swiper('.continuous-slider', {
      slidesPerView: 'auto',
      spaceBetween: 100,
      loop: true,
      speed: 10000,
      autoplay: {
        delay: 0,
        autoplayDisableOnInteraction: false,
      },


    });
  }
}


import Swiper from 'swiper/swiper-bundle.esm.browser.min'

export function initSliderContinuous() {
  const slider = document.querySelector('.continuous-slider')
  if (slider) {
    const sliderItems = document.querySelectorAll('.continuous-slider-item')
    const sliderContinuous = new Swiper('.continuous-slider', {
      slidesPerView: 'auto',
      spaceBetween: 100,
      loop: true,
      speed: 4000,
      autoplay: {
        delay: 0,
        autoplayDisableOnInteraction: true,
        pauseOnMouseEnter: true,
      },
      on: {
        init() {
          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },
    });
  }
}


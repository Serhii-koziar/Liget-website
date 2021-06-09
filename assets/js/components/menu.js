export function initMenu() {
  const $header = document.getElementById('header')
  // if there is no header on the page, we don't need init menu event listeners
  if (!$header) return

  const toggleElements = [
    '.header__burger',
    '.header__fader',
    '.header__cross'
  ]

  toggleElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      if (!el) return
      el.addEventListener('click', () => {
        $header.classList.toggle('header--open-menu')
      })
    })
  })

  document.addEventListener('scroll', function () {
    if (window.pageYOffset > $header.offsetHeight * 0.15) {
      $header.classList.add('header--min')
    } else {
      $header.classList.remove('header--min')
    }
  })
}


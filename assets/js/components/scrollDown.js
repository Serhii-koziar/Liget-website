export function initScrollDown() {
  const arrow = document.querySelector('.scrollDown')
  const header = document.querySelector('.header')
const headerHeight = header.scrollHeight
  if (arrow) {
    arrow.addEventListener('click', (e) => {
      scrollBy({
        top: (e.target.closest('section').nextElementSibling.getBoundingClientRect().top - headerHeight),
        left: 0,
        behaviour: "smooth"
      })
    })
  }
}

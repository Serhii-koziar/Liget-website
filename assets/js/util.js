export function isElementInViewport(element, bottomOffset = 0) {
  const viewportTop = window.scrollY
  const viewportBottom = viewportTop + window.innerHeight + bottomOffset
  const elOffsetTop = element.getBoundingClientRect().top + viewportTop
  const elOffsetBottom = element.getBoundingClientRect().bottom + viewportTop
  return elOffsetTop >= viewportTop && elOffsetTop <= viewportBottom ||
      elOffsetBottom >= viewportTop && elOffsetBottom <= viewportBottom;
}

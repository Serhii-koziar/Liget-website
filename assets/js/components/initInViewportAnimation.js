import {isElementInViewport} from '../util';

export function initInViewportAnimation() {
  let elementsToAnimate = getElementsToAnimate()

  prepareChildrenForAnimation()
  elementsToAnimate = scrollTick(elementsToAnimate)
  window.addEventListener('scroll', () => {
    elementsToAnimate = scrollTick(elementsToAnimate)
  })
}

function getElementsToAnimate() {
  let elementsToAnimate = []
  document.querySelectorAll('.js-in-viewport-animate-block').forEach(el => {
    elementsToAnimate.push(el)
  })
  document.querySelectorAll('.js-in-viewport-animate-children').forEach(el => {
    [...el.children].forEach(child => {
      elementsToAnimate.push(child)
    })
  })
  return elementsToAnimate
}

function scrollTick(elementsToAnimate) {
  const animatedElements = []
  let delay = 0
  elementsToAnimate.forEach(el => {
    if (!el.classList.contains('animation-active')) {
      if (isElementInViewport(el, -50)) {
        delay += 100
        animatedElements.push(el)
        setTimeout(() => {
          el.classList.add('animation-active')
        }, delay)
      }
    }
  })
  return filterArrayFromOtherArrayElems(elementsToAnimate, animatedElements)
}

function filterArrayFromOtherArrayElems(filterTarget, filterFrom) {
  return  filterTarget.filter(el => {
    return filterFrom.findIndex(animatedEl => animatedEl === el) === -1
  })
}

function prepareChildrenForAnimation() {
  document.querySelectorAll('[class*=js-prepare-children]').forEach(el => {
    const elClasses = [...el.classList]
    const elAnimNames = elClasses
        .filter(className => className.match(/^js-prepare-children-/))
        .map(className => /^js-prepare-children-(.+)/.exec(className)[1]);
    [...el.children].forEach(child => {
      if (!child.classList.contains('js-ignore-parent-animation')) {
        elAnimNames.forEach(animName => {
          child.classList.add(animName)
        })
      }
    })
  })
}

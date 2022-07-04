'use strict'

import { throttle } from 'throttle-debounce'

const pagetopFunc = (el): void => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop

  if (scrollTop > 100) {
    el.setAttribute('data-pagetop-is-active', true)
  } else {
    el.setAttribute('data-pagetop-is-active', false)
  }
}

/**
 * @description pagetop
 */
export const pagetop = (el): void => {
  window.addEventListener(
    'scroll',
    throttle(200, () => {
      pagetopFunc(el)
    })
  )
}

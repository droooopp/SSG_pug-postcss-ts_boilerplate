'use strict'

import { toBoolean } from '../utilities'

const headerFunc = (el): void => {
  const hero = document.querySelector('.js-hero')
  const heroH = hero.clientHeight
  const scroll = window.pageYOffset
  const status = toBoolean(el.dataset.isActive)

  if (scroll > heroH) {
    !status ? el.setAttribute('data-is-active', 'true') : false
  } else {
    status ? el.setAttribute('data-is-active', 'false') : false
  }
}

/**
 * @description header
 */
export const header = (el): void => {
  window.addEventListener('scroll', (): void => {
    headerFunc(el)
  })
}

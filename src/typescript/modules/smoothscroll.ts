'use strict'

import { addEvent } from '../utilities/event'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

const smoothScrollFunc = (e): void => {
  e.preventDefault()

  const el = e.currentTarget
  const targetId = el.dataset.link
  const targetEl = document.querySelector(targetId)

  if (!targetEl) {
    return
  }

  targetEl.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

/**
 * @description smoothScroll
 */
export const smoothScroll = (items): void => {
  addEvent({
    el: items,
    ev: 'click',
    func: (e) => {
      smoothScrollFunc(e)
    }
  })
}

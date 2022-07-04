'use strict'

import { addEvent } from '../utilities/event'
import { Power1, gsap } from 'gsap'

const readMoreFunc = (el): void => {
  const current = el.dataset.appendId
  const aliases: NodeListOf<HTMLElement> =
    document.querySelectorAll('.js-appendAlias')

  for (let i = 0; aliases.length > i; i++) {
    if (current === aliases[i].dataset.appendId) {
      // const contentsHeight =
      //   aliases[i].querySelector('.alias-view').clientHeight
      gsap.to(aliases[i], {
        duration: 0.6,
        height: 'auto',
        ease: Power1.easeOut
      })

      el.parentNode.parentNode.removeChild(el.parentNode)
      aliases[i].classList.add('-complete')
    }
  }
}

/**
 * @description readMore
 */
export const readMore = (items): void => {
  addEvent({
    el: items,
    ev: 'click',
    func: (e) => {
      readMoreFunc(e.currentTarget)
    }
  })
}

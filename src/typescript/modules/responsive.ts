'use strict'

import { breakpointDecision } from '../utilities/event'

const responsiveFunc = (): void => {
  const deviceWidth = window.innerWidth
  const deviceHeight = window.innerHeight
  const spCommonCss = '/jp/ja/feature/assets/sp/css/common.css'
  const pcCommonCss = '/jp/ja/feature/assets/pc/css/common.css'
  const headItem = document.head.children

  if (breakpointDecision()) {
    for (let i = 0; i < headItem.length; i++) {
      if (headItem[i].getAttribute('href') === pcCommonCss) {
        headItem[i].setAttribute('href', spCommonCss)
      }
    }
  } else {
    for (let i = 0; i < headItem.length; i++) {
      if (headItem[i].getAttribute('href') === spCommonCss) {
        headItem[i].setAttribute('href', pcCommonCss)
      }
    }
    if (deviceWidth < deviceHeight) {
      document.body.classList.add('-vertical')
    } else {
      document.body.classList.remove('-vertical')
    }
  }
}

/**
 * @description responsive
 */
export const responsive = (): void => {
  responsiveFunc()
  window.addEventListener('resize', () => {
    responsiveFunc()
  })
}

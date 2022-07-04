'use strict'

import { addEvent } from '../utilities/event'
import { toBoolean } from '../utilities'

const tabsFunc = (el): void => {
  const target = el.dataset.tabsType
  const isCurrent = toBoolean(el.dataset.tabsCurrent)

  if (!isCurrent) {
    const tabs: HTMLElement = document.querySelector('.js-tabs')
    const tabItems: NodeListOf<HTMLElement> =
      document.querySelectorAll('.js-tabsButton')
    const tabBodies: NodeListOf<HTMLElement> =
      document.querySelectorAll('.js-tabsItem')

    for (let i = 0; tabItems.length > i; i++) {
      if (tabItems[i].dataset.tabsType === target) {
        tabItems[i].setAttribute('data-tabs-current', 'true')
        tabs.setAttribute('data-current-type', target)

        for (let i = 0; tabBodies.length > i; i++) {
          if (tabBodies[i].dataset.tabsType === target) {
            tabBodies[i].setAttribute('data-tabs-current', 'true')
          } else {
            tabBodies[i].setAttribute('data-tabs-current', 'false')
          }
        }
      } else {
        tabItems[i].setAttribute('data-tabs-current', 'false')
      }
    }
  }
}

/**
 * @description tabs
 */
export const tabs = (items): void => {
  addEvent({
    el: items,
    ev: 'click',
    func: (e) => {
      tabsFunc(e.currentTarget)
    }
  })
}

'use strict'

import { addEvent } from '../utilities/event'

const drawerFunc = (): void => {
  const target = document.body
  const isActive =
    target.getAttribute('data-drawer-is-active') === 'true' ? true : false

  const open = (): void => {
    const scrollY = document.documentElement.scrollTop || target.scrollTop

    target.style.position = 'fixed'
    target.style.top = `-${scrollY}px`
    target.setAttribute('data-drawer-is-active', 'true')
  }

  const close = (): void => {
    const scrollY = parseInt(target.style.top) * -1

    target.style.removeProperty('position')
    target.style.removeProperty('top')
    window.scrollTo(0, scrollY)
    target.setAttribute('data-drawer-is-active', 'false')
  }

  if (isActive) {
    close()
  } else {
    open()
  }
}

/**
 * @description drawer
 */
export const drawer = (item): void => {
  addEvent({
    el: item,
    ev: 'click',
    func: () => {
      drawerFunc()
    }
  })
}

'use strict'

import 'lazysizes'
import 'picturefill'
import 'picturefill/dist/plugins/intrinsic-dimension/pf.intrinsic.min.js'

import { mounted } from './utilities'
import { smoothScroll } from './modules/smoothScroll'
import { pagetop } from './modules/pagetop'
import { drawer } from './modules/drawer'
import { responsive } from './modules/responsive'
import { header } from './modules/header'
import { gender } from './modules/gender'
import { readMore } from './modules/readMore'
import { heroAnimation } from './modules/heroAnimation'
import { tabs } from './modules/tabs'
import { stylingSwitch } from './modules/stylingSwitch'
import { animateIn } from './modules/animateIn'

const smoothScrollInit = (): void => {
  const items = document.querySelectorAll('.js-smoothScroll')

  if (!items.length) {
    return
  }

  smoothScroll(items)
}

const pagetopInit = (): void => {
  const el = document.querySelector('.js-pagetop')

  if (!el) {
    return
  }

  pagetop(el)
}

const drawerInit = (): void => {
  const item = document.querySelectorAll('.js-drawerTrigger')

  if (!item.length) {
    return
  }

  drawer(item)
}

const responsiveInit = (): void => {
  responsive()
}

const headerInit = (): void => {
  const el = document.querySelector('.js-header')

  if (!el) {
    return
  }

  header(el)
}

const readMoreInit = (): void => {
  const item = document.querySelectorAll('.js-appendAliasButton')

  if (!item.length) {
    return
  }

  readMore(item)
}

const heroAnimationInit = (): void => {
  const el = document.querySelector('.js-hero_listAnimate')

  if (!el) {
    return
  }

  heroAnimation(el)
}

const tabsInit = (): void => {
  const items = document.querySelectorAll('.js-tabsButton')

  if (!items.length) {
    return
  }

  tabs(items)
}

const genderInit = (): void => {
  const el = document.querySelector('.js-header')

  if (!el) {
    return
  }

  gender()
}

const stylingSwitchInit = (): void => {
  const items = document.querySelectorAll('.js-styling_switch')

  if (!items.length) {
    return
  }

  stylingSwitch(items)
}

const animateInInit = (): void => {
  try {
    const item = document.querySelectorAll('.js-animateIn')

    if (!item.length) {
      return
    }

    animateIn(item)
  } catch (error) {
    /* eslint no-console: 0 */
    console.log(error)
  }
}

mounted(() => {
  smoothScrollInit()
  pagetopInit()
  drawerInit()
  responsiveInit()
  headerInit()
  readMoreInit()
  heroAnimationInit()
  tabsInit()
  genderInit()
  stylingSwitchInit()
  animateInInit()
})

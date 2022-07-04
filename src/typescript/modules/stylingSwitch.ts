'use strict'

const stylingSwitchFunc = (items, number): void => {
  setTimeout((): void => {
    for (let i = 0; items.length > i; i++) {
      items[i].style.opacity = number - 1 === i ? '1' : '0'
    }
  }, number * 600)
}

const stylingSwitchSet = (el): void => {
  const items = el.querySelectorAll('.js-styling_switchItem')
  const num = Number(el.dataset.switchNumber)

  setInterval((): void => {
    for (let i = 1; num >= i; i++) {
      stylingSwitchFunc(items, i)
    }
  }, 3000)
}

/**
 * @description stylingSwitch
 */
export const stylingSwitch = (items): void => {
  for (let i = 0; items.length > i; i++) {
    stylingSwitchSet(items[i])
  }
}

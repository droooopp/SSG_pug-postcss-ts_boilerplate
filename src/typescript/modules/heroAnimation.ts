'use strict'

import { loaded } from '../utilities/event'
import { toBoolean } from '../utilities/index'

const setStyle = (): void => {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.js-hero_itemAinmate'
  )
  const itemWidth = Math.floor(items[0].getBoundingClientRect().width)
  const spriteWidth = itemWidth * 15
  const styleTag = document.createElement('style')
  styleTag.className = 'js-heroStyle'
  styleTag.textContent = `
    .p-hero_itemImage {
      width: ${itemWidth}px!important;
      height: ${(itemWidth / 2) * 3}px!important;
    }
    .p-hero_itemImage img {
      width: ${itemWidth}px!important;
      height: ${(itemWidth / 2) * 3}px!important;
    }
    @keyframes sprite-animation {
      0% {
        mask-position: 0 0;
        -webkit-mask-position: 0 0;
      }
      100% {
        mask-position: -${spriteWidth}px 0;
        -webkit-mask-position: -${spriteWidth}px 0;
      }
    }
  `

  document
    .getElementsByTagName('head')[0]
    .insertAdjacentElement('beforeend', styleTag)
}

const heroAnimationFunc = (): void => {
  setStyle()
  const items: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.js-hero_itemAinmate'
  )

  const changeFlip = (min: number, max: number): void => {
    const flipNumber = Math.floor(
      Math.random() * (Number(max) - Number(min) + 1) + Number(min)
    )
    const target = items[flipNumber - 1]
    const isAnimated = target.dataset.isAnimated

    target.setAttribute(
      'data-is-animated',
      isAnimated === 'true' ? 'false' : 'true'
    )
  }

  setTimeout((): void => {
    changeFlip(4, 6)
  }, 600)
  setInterval((): void => {
    changeFlip(1, 3)
  }, 3600)
  setInterval((): void => {
    changeFlip(4, 6)
  }, 4400)
  setInterval((): void => {
    changeFlip(7, 10)
  }, 4000)
}

const removeLoader = (): void => {
  const loader: HTMLElement = document.querySelector('.js-loader')
  const loaderContainer: HTMLElement = document.querySelector(
    '.js-loader_container'
  )
  const preloadImage: HTMLElement = document.querySelector('.js-preload')
  document.body.setAttribute('data-loader-is-active', 'false')
  loaderContainer.style.opacity = '0'

  heroAnimationFunc()

  setTimeout((): void => {
    loader.parentNode.removeChild(loader)
    preloadImage.parentNode.removeChild(preloadImage)
  }, 400)
}

const resetStyle = (el): void => {
  const heroStyle = document.querySelector('.js-heroStyle')
  heroStyle.parentNode.removeChild(heroStyle)
  const items = el.querySelectorAll('.js-hero_itemAinmate')

  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('data-is-animated', 'default')
  }
  setStyle()
}

/**
 * @description heroAnimation
 */
export const heroAnimation = (el): void => {
  loaded(removeLoader)

  setTimeout((): void => {
    const isActive = toBoolean(
      document.body.getAttribute('data-loader-is-active')
    )
    if (isActive) removeLoader()
  }, 8000)

  let lastInnerWidth = window.innerWidth
  window.addEventListener('resize', () => {
    if (lastInnerWidth !== window.innerWidth) {
      lastInnerWidth = window.innerWidth
      resetStyle(el)
    }
  })
}

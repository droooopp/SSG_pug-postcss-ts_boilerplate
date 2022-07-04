'use strict'

import { addObserverEvent } from '../utilities/event'
import { gsap } from 'gsap'

/**
 * @description animateIn
 * @param {Object} el [要素]
 */
const animateMask = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    el.setAttribute('data-animate-status', 'start')

    setTimeout((): void => {
      el.setAttribute('data-animate-status', 'end')
    }, 400)
  }
}

const animateFadeUp = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 60
      },
      {
        duration: 0.8,
        opacity: 1,
        y: 0
      }
    )
    el.setAttribute('data-animate-status', 'end')
  }
}

const animateHeading = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    el.setAttribute('data-animate-status', 'start')

    setTimeout((): void => {
      el.setAttribute('data-animate-status', 'end')
    }, 400)
  }
}

const animateHero = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    el.setAttribute('data-animate-status', 'start')

    setTimeout((): void => {
      el.setAttribute('data-animate-status', 'end')
    }, 400)
  }
}

const animateKerning = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    el.setAttribute('data-animate-status', 'start')

    setTimeout((): void => {
      el.setAttribute('data-animate-status', 'end')
    }, 400)
  }
}

const animateFall = (el): void => {
  if (el.getAttribute('data-animate-status') === 'false') {
    el.setAttribute('data-animate-status', 'end')
    const itemArray = el.textContent.split('')
    let itemHtml = ''

    for (let i = 0; itemArray.length > i; i++) {
      if (itemArray[i] !== '\n') {
        itemHtml += `<span${
          itemArray[i] === ' ' ? ' style="display:inline;"' : ''
        }>${itemArray[i]}</span>`
      }
    }

    el.textContent = ''
    el.insertAdjacentHTML('afterbegin', itemHtml)

    const colors = JSON.parse(el.dataset.animateColor)

    for (let i = 0; el.childNodes.length > i; i++) {
      el.childNodes[i].style.color = `${
        colors[
          Math.floor(
            Math.random() * (Number(colors.length - 1) - Number(0) + 1) +
              Number(0)
          )
        ]
      }`
    }

    let time = 0
    setInterval((): void => {
      for (let i = 0; el.childNodes.length > i; i++) {
        time = time + 200
        setTimeout((): void => {
          el.childNodes[i].style.color = `${
            colors[
              Math.floor(
                Math.random() * (Number(colors.length - 1) - Number(0) + 1) +
                  Number(0)
              )
            ]
          }`
        }, time)
      }
    }, 200)

    // gsap.to(
    //   el.childNodes,
    //   {
    //     // color: "#1f1f1f",
    //     repeatDelay: (el.childNodes.length * 100) / 1000,
    //     duration: 1.2,
    //     // scale: 0.8,
    //     y: -10,
    //     yoyo: true,
    //     repeat: -1,
    //     ease: "power1.inOut",
    //     opacity: 1,
    //     stagger: {
    //       each: 0.05,
    //       axis: 'x',
    //       from: "random"
    //     }
    //   }
    // )
  }
}

export const animateIn = (items): void => {
  for (let i = 0; items.length > i; i++) {
    const type = items[i].dataset.animateType

    addObserverEvent({
      el: items[i],
      func: (el): void => {
        if (type === 'mask') {
          animateMask(el)
        } else if (type === 'fade-up') {
          animateFadeUp(el)
        } else if (type === 'styling-heading' || type === 'intro-heading') {
          animateHeading(el)
        } else if (type === 'hero') {
          animateHero(el)
        } else if (type === 'kerning') {
          animateKerning(el)
        } else if (type === 'fall') {
          animateFall(el)
        }
      }
    })
  }
}

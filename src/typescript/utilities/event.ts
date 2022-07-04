'use strict'

import 'intersection-observer'

/**
 * @description BreakpointDecision
 * @returns boolean SP => true / PC => false
 */
export const breakpointDecision = (): boolean => {
  const deviceSize = window.innerWidth
  const breakpoint = 812

  return deviceSize <= breakpoint
}

/**
 * @description DOMツリー読み込み完了後指定の関数を実行する
 * @param {Function} func [実行関数]
 */
export const mounted = (func): void => {
  if (document.readyState !== 'loading') {
    func()
  } else {
    document.addEventListener('DOMContentLoaded', func)
  }
}

/**
 * @description 全ての読み込み完了後指定の関数を実行する
 * @param {Function} func [実行関数]
 */
export const loaded = (func): void => {
  window.addEventListener('load', func)
}

/**
 * @description 指定要素に対してイベントを設定する
 * @param {Object} el [要素]
 * @param {String} ev [イベント名]
 * @param {Function} func [実行関数]
 */
export const addEvent = ({ el, ev, func }): void => {
  if (el && el.length && el !== window) {
    for (const item of el) {
      item.addEventListener(ev, func, false)
    }
  } else {
    el.addEventListener(ev, func, false)
  }
}

/**
 * @description 指定要素に対してIntersectionObserverイベントを設定する
 * @param {Object} el [要素]
 * @param {Function} func [実行関数]
 */
export const addObserverEvent = ({ el, func }): void => {
  const base = ({ observerEl, observerFunc }): void => {
    const observer = new IntersectionObserver(
      (e) => {
        if (e[0].intersectionRatio) {
          const el = e[0].target

          observerFunc(el)
        }
      },
      {
        threshold: 0.2
      }
    )

    observer.observe(observerEl)
  }

  if (el && el.length) {
    for (const item of el) {
      base({
        observerEl: item,
        observerFunc: func
      })
    }
  } else {
    base({
      observerEl: el,
      observerFunc: func
    })
  }
}

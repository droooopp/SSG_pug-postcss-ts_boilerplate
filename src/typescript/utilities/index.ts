'use strict'

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
 * @description Domの参照を取得する
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const elem = (className): HTMLElement | NodeListOf<HTMLElement> => {
  const all = document.querySelectorAll<HTMLElement>(`.${className}`)

  return all.length > 1 ? all : all[0]
}

/**
 * @description 開始要素から最も近い親要素を取得する
 * @param {Object} el [要素]
 * @param {String} className [class名]
 * @returns {Object} 指定class名のDom参照
 */
export const closest = ({ el, className }): HTMLElement => {
  for (let item = el; item; item = item.parentElement) {
    if (item.classList.contains(className)) {
      return item
    }
  }
}

/**
 * @description モバイル端末なら true 、それ以外なら false を返す
 * @returns {Boolean}
 */
export const isMobile = (): boolean => {
  const userAgent = window.navigator.userAgent.toLowerCase()

  if (
    userAgent.indexOf('iphone') != -1 ||
    userAgent.indexOf('ipod') != -1 ||
    (userAgent.indexOf('android') != -1 && userAgent.indexOf('mobile') != -1)
  ) {
    return true
  } else {
    return false
  }
}

/**
 * @description IsIOS9
 * @returns boolean iOS9 => true / false
 */
export const isIOS9 = (): boolean => {
  const el = document.body

  return el.classList.contains('iOS_9')
}

/**
 * @description toBoolean
 * @returns boolean true / false
 */
export const toBoolean = (data): boolean => {
  return data.toLowerCase() === 'true'
}

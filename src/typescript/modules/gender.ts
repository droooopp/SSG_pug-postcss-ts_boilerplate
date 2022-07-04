'use strict'

import { mounted } from '../utilities'

/**
 * @description gender
 */

const genderFunc = (): void => {
  let queryString = window.location.search
  const queryObject = new Object()

  if (queryString) {
    queryString = queryString.substring(1)
    const parameters = queryString.split('&')

    for (let i = 0; i < parameters.length; i++) {
      const element = parameters[i].split('=')
      const paramName = decodeURIComponent(element[0])
      const paramValue = decodeURIComponent(element[1])

      queryObject[paramName] = paramValue
    }

    if (Object.keys(queryObject).indexOf('gender') !== -1) {
      const gender = queryObject['gender']
      const tabEl: NodeListOf<HTMLElement> =
        document.querySelectorAll('.js-tabsButton')

      for (let i = 0; i < tabEl.length; i++) {
        if (tabEl[i].dataset.tabsType == gender) {
          tabEl[i].click()
        }
      }
    }
  }
}

export const gender = (): void => {
  mounted(genderFunc)
}

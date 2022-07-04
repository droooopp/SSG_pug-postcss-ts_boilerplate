'use strict'

export interface DataLayer {
  event: string
  brand: string
  pageType?: string
  subID?: string
  pageUrlPath?: string
  pageTitle?: string
  previousPageExists?: boolean
  eventCategory?: string
  eventAction?: string
  eventLabel?: string
}

export interface SmoothScroll {
  el: HTMLElement
  type: string
}

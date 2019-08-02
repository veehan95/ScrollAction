import { ScrollIntoViewElement, Setting, EventFire, ElementCaller, Event } from './type';

export type ScrollLocationOption = {
//   jQueryElement?: JQuery<Element> | JQuery<HTMLElement>,
//   element?: Element | HTMLElement,
//   elementID?: string,
//   child?: number,
}

export interface ScrollLocationInterface {
  // isScrolledIntoView(el: ScrollLocationOption, callback: () => void): void
  // isScrolledIntoViewListener(el: ScrollLocationOption, callback: () => void): any
  createWatcher(element: string): any // { scrollIntoView: () => Event }
}

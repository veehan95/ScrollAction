import { Setting } from './type';

// export type ScrollIntoViewElement = {
//   callback?: () => void,
// };
//
//
// type EventSetting = {
//   eventEmitter: EventFire,
//   eventListener: EventFire,
//   eventName: string,
//   enable: true,
//   beforeEach?: boolean,
// }
//
// export type EventFire = (eventName: string, detail: any) => void;
//
// export type Setting = {
//   event?: EventSetting,
//   scrollIntoViewElements?: {[s: string]: ScrollIntoViewElement}
// };

export const DEFAULTS: Setting = {
  event: {
    eventEmitter: (eventName: string, detail: any) => {
      window.dispatchEvent(new CustomEvent(eventName, { detail }))
    },
    eventListener: (eventName: string, callback: (details: any) => void) => {
      window.addEventListener(eventName, callback)
    },
    eventName: "Scroll_Events",
    enable: true,
    beforeEach: false,
  }
};

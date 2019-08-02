export type ScrollIntoViewElement = {
  callback?: () => void,
};


type EventSetting = {
  eventEmitter: EventFire,
  eventListener: EventFire,
  eventName: string,
  enable: true,
  beforeEach?: boolean,
} | {
  eventEmitter: EventFire,
  eventListener: EventFire,
  eventName?: string,
  enable: false,
  beforeEach?: boolean
}

export type EventFire = (eventName: string, detail: any) => void;

export type Setting = {
  event?: EventSetting
};

export type ElementCaller = { id: string } | { class: string }

export type EventEmitter = (eventName: string, details: any) => any;
export type EventListener = (eventName: string, callback: (details: any) => void) => any;

export type Event = any
// {
//   emitter: EventEmitter,
//   listener: EventListener
// }

import $ from 'jquery';
import { ScrollLocationInterface } from './interface';
import { ScrollIntoViewElement, Setting, EventFire, ElementCaller, Event, EventEmitter, EventListener } from './type';
import { DEFAULTS } from './defaults'

class GenericEvent {
  private _involvedEvents: string[] = [];
  get involvedEvents(): string[] { return this._involvedEvents; }

  constructor(private _eventEmitter: EventEmitter, private _eventListener: EventListener, private _setting: { preEventName?: string } = {}) {}

  private getEventName(eventName: string) {
    return this._setting.preEventName
      ? `${this._setting.preEventName}-${eventName}`
      : eventName;
  }

  emitter(eventName: string, details: any) {
    this._involvedEvents.push(eventName);
    this._eventEmitter!(this.getEventName(eventName), details);
    return this;
  }

  listener(eventName: string, callback: (details: any) => void) {
    this._eventListener!(this.getEventName(eventName), callback);
    return this;
  }

  listenAll(callback: (details: any, eventName?: string) => void) {
    this._involvedEvents.forEach((eventName: string) => {
      this.listener(eventName, (details: any) => { callback(details, eventName) })
    });
  }
}

export class ScrollLocation implements ScrollLocationInterface {
  private element: JQuery<Element> | JQuery<HTMLElement> | null = null;
  private _elementObject: GenericEvent[] = [];
  get elementObject(): GenericEvent[] { return this._elementObject; }

  constructor(el: string, private _setting: Setting = {}) {
    if (!$(el).length) throw new Error('Element not found');
    this.element = $(el);
    this._setting = DEFAULTS;
  }

  createWatcher(element: string) {
    if (!$(element).length) {
      throw new Error(`Element ${element} not found!`)
    } else {
      const elementObject = new GenericEvent(
        this._setting!.event!.eventEmitter,
        this._setting!.event!.eventListener,
        { preEventName : this._setting!.event!.eventName },
      )
      this._elementObject.push(elementObject);

      return {
        scrollIntoView: (callback: (detail: any) => void) => this.scrollIntoView(elementObject, callback),
      };
    }
  }

  private scrollIntoView(elementObject: GenericEvent, callback: (detail: any) => void, enableListener: boolean = true): GenericEvent {
    if (enableListener) elementObject.listener('hi', callback)
    elementObject.emitter('hi', 'ok')

    return elementObject;
  }
}
  // scrollIntoViewTrigger(el: string, callback?: () => void) {
  //   this.runSettingEvents(el)
  //   return {
  //     listener: () => { console.log('ok sub function executed.') }
  //   };
  // }
  //
  // isScrolledIntoViewListener(el: string, callback?: () => void) {
  //   this.runSettingEvents(el)
  //   return {
  //     listener: () => { console.log('ok sub function executed.') }
  //   };
  //   const localElement = this.getElement(el);
  //   if (this.element && localElement && localElement.length > 0) {
  //     this.element.scroll(() => {
  //       const offset = localElement.offset() || { top: 0 };
  //       const parentOffset = localElement.parent().offset() || { top: 0 };
  //       const elementHeight = this.element ? this.element.height() || 0 : 0;
  //       if (offset.top - parentOffset.top <= elementHeight) { callback(); }
  //     });
  //   }
  // }
  //
  // async isScrolledIntoView(el: ElementCaller, callback: () => void) {
  //   const localElement = this.getElement(el);
  //   if (this.element && localElement && localElement.length > 0) {
  //     const offset = localElement.offset() || { top: 0 };
  //     const parentOffset = localElement.parent().offset() || { top: 0 };
  //     const elementHeight = this.element ? this.element.height() || 0 : 0;
  //     if (offset.top - parentOffset.top <= elementHeight) { await callback(); }
  //   }
//   }
//
//   private runSettingEvents(event: string) {
//     if ( this._setting!.event!.enable === true ) {
//       // this._eventFire(this._setting!.event!.eventName || 'ScrollLocationEvent', 'jasmine');
//     }
//     if (this._setting!.scrollIntoViewElements![event].callback !== undefined) {
//       this._setting!.scrollIntoViewElements![event].callback!();
//     }
//   }
// }

// export { ElementCaller, ScrollLocationInterface };

import $ from 'jquery';
import { ScrollLocationInterface, GenericActionInterface, GenericEventInterface } from './interface';
import { ScrollIntoViewElement, Setting, EventFire, ElementCaller, Event, EventEmitter, EventListener } from './type';
import { DEFAULTS } from './defaults'
import { GenericAction, Actions } from './actions'

export class ScrollLocation implements ScrollLocationInterface {
  private _parentElement: JQuery<Element> | JQuery<HTMLElement>;
  get parentElement(): JQuery<Element> | JQuery<HTMLElement> { return this._parentElement};

  private _targets: JQuery<Element>[] | JQuery<HTMLElement>[];
  get targets(): JQuery<Element>[] | JQuery<HTMLElement>[] { return this._targets};

  constructor(el: string, private _setting: Setting = {}) {
    if (!$(el).length) throw new Error('Element not found');
    this._parentElement = $(el);
    this._setting = DEFAULTS;
    this._targets = [];
  }

  addTarget(el: string): GenericActionInterface {
    if (!$(el).length) {
      throw new Error('Element not found');
    } else {
      this._targets.push($(el));
      console.log(Actions);
      return new GenericAction(() => {
        console.log('addTarget');
        return true;
      });
    }
  }

  getTarget(element: string): GenericActionInterface {
    return new GenericAction(() => {
      console.log('getTarget');
      return true;
    });
  }

  removeTarget(element: string): GenericActionInterface {
    return new GenericAction(() => {
      console.log('removeTarget');
      return true;
    });
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

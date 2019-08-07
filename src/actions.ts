import { GenericActionInterface, GenericEventInterface } from './interface';
import { EventEmitter, EventListener } from './type';

export class GenericEvent implements GenericEventInterface {
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

export class GenericAction implements GenericActionInterface {
  events: GenericEventInterface[] = []

  constructor(public triggerCheck: () => boolean) {}

  addEvent(eventEmitter: EventEmitter, eventListener: EventListener): GenericEventInterface {
    return new GenericEvent(eventEmitter, eventListener);
  }

  removeEvent(): void {}

  check(): boolean {
    return true;
  }
}

export const Actions: any = {
  intoView: () => {

  },
  exitView: () => {

  }
}

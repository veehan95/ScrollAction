import { ScrollIntoViewElement, Setting, EventFire, ElementCaller, Event } from './type';

export interface GenericEventInterface {
  involvedEvents: string[];
  emitter(eventName: string, details: any): void;
  listener(eventName: string, callback: (details: any) => void): void;
  listenAll(callback: (details: any, eventName?: string) => void): void;
}

export interface GenericActionInterface {
  events: GenericEventInterface[];
  addEvent(): GenericEventInterface;
  removeEvent(): void;
  check(): boolean;
  triggerCheck(): boolean;
}

export interface ScrollLocationInterface {
  targets: GenericActionInterface[];
  addTarget(element: string): GenericActionInterface;
  getTarget(element: string): GenericActionInterface;
  removeTarget(element: string): GenericActionInterface;
}

/// <reference types="jquery" />
import { EventEmitter, EventListener } from './type';
export interface GenericEventInterface {
    involvedEvents: string[];
    emitter(eventName: string, details: any): void;
    listener(eventName: string, callback: (details: any) => void): void;
    listenAll(callback: (details: any, eventName?: string) => void): void;
}
export interface GenericActionInterface {
    events: GenericEventInterface[];
    addEvent(eventEmitter: EventEmitter, eventListener: EventListener): GenericEventInterface;
    removeEvent(): void;
    check(): boolean;
    triggerCheck(): boolean;
}
export interface ScrollLocationInterface {
    targets: JQuery<Element>[] | JQuery<HTMLElement>[];
    addTarget(element: string): GenericActionInterface;
    getTarget(element: string): GenericActionInterface;
    removeTarget(element: string): GenericActionInterface;
}

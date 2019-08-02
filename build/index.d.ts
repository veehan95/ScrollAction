import { ScrollLocationInterface } from './interface';
import { Setting, EventEmitter, EventListener } from './type';
declare class GenericEvent {
    private _eventEmitter;
    private _eventListener;
    private _setting;
    private _involvedEvents;
    readonly involvedEvents: string[];
    constructor(_eventEmitter: EventEmitter, _eventListener: EventListener, _setting?: {
        preEventName?: string;
    });
    private getEventName;
    emitter(eventName: string, details: any): this;
    listener(eventName: string, callback: (details: any) => void): this;
}
export declare class ScrollLocation implements ScrollLocationInterface {
    private _setting;
    private element;
    private _elementObject;
    readonly elementObject: GenericEvent[];
    constructor(el: string, _setting?: Setting);
    createWatcher(element: string): {
        scrollIntoView: (callback: (detail: any) => void) => GenericEvent;
    };
    private scrollIntoView;
}
export {};

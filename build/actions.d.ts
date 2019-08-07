import { GenericActionInterface, GenericEventInterface } from './interface';
import { EventEmitter, EventListener } from './type';
export declare class GenericEvent implements GenericEventInterface {
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
    listenAll(callback: (details: any, eventName?: string) => void): void;
}
export declare class GenericAction implements GenericActionInterface {
    triggerCheck: () => boolean;
    events: GenericEventInterface[];
    constructor(triggerCheck: () => boolean);
    addEvent(eventEmitter: EventEmitter, eventListener: EventListener): GenericEventInterface;
    removeEvent(): void;
    check(): boolean;
}
export declare const Actions: any;

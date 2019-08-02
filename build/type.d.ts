export declare type ScrollIntoViewElement = {
    callback?: () => void;
};
declare type EventSetting = {
    eventEmitter: EventFire;
    eventListener: EventFire;
    eventName: string;
    enable: true;
    beforeEach?: boolean;
} | {
    eventEmitter: EventFire;
    eventListener: EventFire;
    eventName?: string;
    enable: false;
    beforeEach?: boolean;
};
export declare type EventFire = (eventName: string, detail: any) => void;
export declare type Setting = {
    event?: EventSetting;
};
export declare type ElementCaller = {
    id: string;
} | {
    class: string;
};
export declare type EventEmitter = (eventName: string, details: any) => any;
export declare type EventListener = (eventName: string, callback: (details: any) => void) => any;
export declare type Event = any;
export {};

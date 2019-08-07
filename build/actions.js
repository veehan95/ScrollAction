export class GenericEvent {
    constructor(_eventEmitter, _eventListener, _setting = {}) {
        this._eventEmitter = _eventEmitter;
        this._eventListener = _eventListener;
        this._setting = _setting;
        this._involvedEvents = [];
    }
    get involvedEvents() { return this._involvedEvents; }
    getEventName(eventName) {
        return this._setting.preEventName
            ? `${this._setting.preEventName}-${eventName}`
            : eventName;
    }
    emitter(eventName, details) {
        this._involvedEvents.push(eventName);
        this._eventEmitter(this.getEventName(eventName), details);
        return this;
    }
    listener(eventName, callback) {
        this._eventListener(this.getEventName(eventName), callback);
        return this;
    }
    listenAll(callback) {
        this._involvedEvents.forEach((eventName) => {
            this.listener(eventName, (details) => { callback(details, eventName); });
        });
    }
}
export class GenericAction {
    constructor(triggerCheck) {
        this.triggerCheck = triggerCheck;
        this.events = [];
    }
    addEvent(eventEmitter, eventListener) {
        return new GenericEvent(eventEmitter, eventListener);
    }
    removeEvent() { }
    check() {
        return true;
    }
}
export const Actions = {
    intoView: () => {
    },
    exitView: () => {
    }
};

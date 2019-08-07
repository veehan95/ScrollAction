
const DEFAULTS = {
    event: {
        eventEmitter: (eventName, detail) => {
            window.dispatchEvent(new CustomEvent(eventName, { detail }));
        },
        eventListener: (eventName, callback) => {
            window.addEventListener(eventName, callback);
        },
        eventName: "Scroll_Events",
        enable: true,
        beforeEach: false,
    }
};

class GenericEvent {
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
class GenericAction {
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
const Actions = {
    intoView: () => {
    },
    exitView: () => {
    }
};

class ScrollLocation {
    constructor(el, _setting = {}) {
        this._setting = _setting;
        if (!$(el).length)
            throw new Error('Element not found');
        this._parentElement = $(el);
        this._setting = DEFAULTS;
        this._targets = [];
    }
    get parentElement() { return this._parentElement; }
    ;
    get targets() { return this._targets; }
    ;
    addTarget(el) {
        if (!$(el).length) {
            throw new Error('Element not found');
        }
        else {
            this._targets.push($(el));
            console.log(Actions);
            return new GenericAction(() => {
                console.log('addTarget');
                return true;
            });
        }
    }
    getTarget(element) {
        return new GenericAction(() => {
            console.log('getTarget');
            return true;
        });
    }
    removeTarget(element) {
        return new GenericAction(() => {
            console.log('removeTarget');
            return true;
        });
    }
}

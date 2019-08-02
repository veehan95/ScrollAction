
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
}
class ScrollLocation {
    constructor(el, _setting = {}) {
        this._setting = _setting;
        this.element = null;
        this._elementObject = [];
        if (!$(el).length)
            throw new Error('Element not found');
        this.element = $(el);
        this._setting = DEFAULTS;
    }
    get elementObject() { return this._elementObject; }
    createWatcher(element) {
        if (!$(element).length) {
            throw new Error(`Element ${element} not found!`);
        }
        else {
            const elementObject = new GenericEvent(this._setting.event.eventEmitter, this._setting.event.eventListener, { preEventName: this._setting.event.eventName });
            this._elementObject.push(elementObject);
            return {
                scrollIntoView: (callback) => this.scrollIntoView(elementObject, callback),
            };
        }
    }
    scrollIntoView(elementObject, callback) {
        elementObject.listener('hi', callback);
        elementObject.emitter('hi', 'ok');
        return elementObject;
    }
}

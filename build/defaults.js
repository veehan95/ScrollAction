export const DEFAULTS = {
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

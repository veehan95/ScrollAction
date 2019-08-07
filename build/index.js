import $ from 'jquery';
import { DEFAULTS } from './defaults';
import { GenericAction, Actions } from './actions';
export class ScrollLocation {
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

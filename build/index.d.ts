/// <reference types="jquery" />
import { ScrollLocationInterface, GenericActionInterface } from './interface';
import { Setting } from './type';
export declare class ScrollLocation implements ScrollLocationInterface {
    private _setting;
    private _parentElement;
    readonly parentElement: JQuery<Element> | JQuery<HTMLElement>;
    private _targets;
    readonly targets: JQuery<Element>[] | JQuery<HTMLElement>[];
    constructor(el: string, _setting?: Setting);
    addTarget(el: string): GenericActionInterface;
    getTarget(element: string): GenericActionInterface;
    removeTarget(element: string): GenericActionInterface;
}

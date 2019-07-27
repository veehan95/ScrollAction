import { ScrollLocationOption, ScrollLocationInterface } from './interface';
export declare class ScrollLocation implements ScrollLocationInterface {
    private element;
    constructor(parentID: string);
    isScrolledIntoViewListener(el: ScrollLocationOption, callback: () => void): void;
    isScrolledIntoView(el: ScrollLocationOption, callback: () => void): Promise<void>;
}

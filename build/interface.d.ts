export declare type ScrollLocationOption = {};
export interface ScrollLocationInterface {
    isScrolledIntoView(el: ScrollLocationOption, callback: () => void): void;
    isScrolledIntoViewListener(el: ScrollLocationOption, callback: () => void): void;
}

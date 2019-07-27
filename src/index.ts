import { ScrollLocationOption, ScrollLocationInterface } from './interface';
import $ from 'jquery';

export class ScrollLocation implements ScrollLocationInterface {
  private element: JQuery<Element> | JQuery<HTMLElement> | null = null;

  constructor(parentID: string) {
    if (!$(`#${parentID}`).length) throw new Error('Element not found');
    this.element = $(`#${parentID}`);
  }

  isScrolledIntoViewListener(el: ScrollLocationOption, callback: () => void) {
  //   const localElement = this.getElement(el);
  //   if (this.element && localElement && localElement.length > 0) {
  //     this.element.scroll(() => {
  //       const offset = localElement.offset() || { top: 0 };
  //       const parentOffset = localElement.parent().offset() || { top: 0 };
  //       const elementHeight = this.element ? this.element.height() || 0 : 0;
  //       if (offset.top - parentOffset.top <= elementHeight) { callback(); }
  //     });
  //   }
  }

  async isScrolledIntoView(el: ScrollLocationOption, callback: () => void) {
  //   const localElement = this.getElement(el);
  //   if (this.element && localElement && localElement.length > 0) {
  //     const offset = localElement.offset() || { top: 0 };
  //     const parentOffset = localElement.parent().offset() || { top: 0 };
  //     const elementHeight = this.element ? this.element.height() || 0 : 0;
  //     if (offset.top - parentOffset.top <= elementHeight) { await callback(); }
  //   }
  }
}

// export { ScrollLocationOption, ScrollLocationInterface };

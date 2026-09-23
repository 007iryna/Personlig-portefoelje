/* UIComponent — basisklasse */

export class UIComponent {
  constructor(element) {
    if (!element) {
      throw new Error('UIComponent kræver et DOM-element');
    }
    this.element = element;
  }

  /* Overskrives af subclasses */
  init() {

  }
}

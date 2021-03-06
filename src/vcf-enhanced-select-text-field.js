/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
 * See the file LICENSE.md distributed with this software for more information about licensing.
 * See [the website]{@link https://vaadin.com/license/cval-3} for the complete license.
 */
import { TextFieldElement } from '@vaadin/vaadin-text-field/src/vaadin-text-field.js';

let memoizedTemplate;
/**
  * The text-field element.
  *
  * ### Styling
  *
  * See [`<vaadin-text-field>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-field.html)
  * for `<vcf-enhanced-select-text-field>` parts and available slots (prefix, suffix etc.)
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @extends PolymerElement
  */
class VcfEnhancedSelectTextFieldElement extends TextFieldElement {
  static get is() {
    return 'vcf-enhanced-select-text-field';
  }

  static get template() {
    // Check if text-field is using slotted input
    if (super.template.content.querySelector('slot[name="input"]')) {
      return super.template;
    }

    if (!memoizedTemplate) {
      // Clone the superclass template
      memoizedTemplate = super.template.cloneNode(true);

      // Create a slot for the value element
      const slot = document.createElement('slot');
      slot.setAttribute('name', 'value');

      // Insert the slot before the text-field
      const input = memoizedTemplate.content.querySelector('input');

      input.parentElement.replaceChild(slot, input);
      slot.appendChild(input);
    }
    return memoizedTemplate;
  }

  get focusElement() {
    return this.shadowRoot.querySelector('[part=input-field]');
  }

  get inputElement() {
    return this.shadowRoot.querySelector('input');
  }
}

customElements.define(VcfEnhancedSelectTextFieldElement.is, VcfEnhancedSelectTextFieldElement);

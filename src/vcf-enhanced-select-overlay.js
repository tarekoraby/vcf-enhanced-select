/**
 * @license
 * Copyright (C) 2015 Vaadin Ltd.
 * This program is available under Commercial Vaadin Add-On License 3.0 (CVALv3).
 * See the file LICENSE.md distributed with this software for more information about licensing.
 * See [the website]{@link https://vaadin.com/license/cval-3} for the complete license.
 */
import '@polymer/polymer/lib/elements/dom-module.js';

import { OverlayElement } from '@vaadin/vaadin-overlay/src/vaadin-overlay.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="vcf-enhanced-select-overlay-styles" theme-for="vcf-enhanced-select-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
/**
  * The overlay element.
  *
  * ### Styling
  *
  * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
  * for `<vcf-enhanced-select-overlay>` parts.
  *
  * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
  *
  * @extends PolymerElement
  */
class VcfEnhancedSelectOverlayElement extends OverlayElement {
  static get is() {
    return 'vcf-enhanced-select-overlay';
  }
}
customElements.define(VcfEnhancedSelectOverlayElement.is, VcfEnhancedSelectOverlayElement);

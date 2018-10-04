import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-app`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'my-app',
      },
    };
  }
}

window.customElements.define('my-app', MyApp);

// import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { LitElement, html } from '@polymer/lit-element';

// class MyApp extends PolymerElement {
class MyApp extends LitElement {

  // static get template() {
  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <!-- <h2>Hello [[prop1]]!</h2> -->
      <h2>Hello ${this.prop1}</h2>
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

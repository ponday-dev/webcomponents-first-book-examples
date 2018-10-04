import { html, render } from 'lit-html';

export class MyLabel extends HTMLElement {

    static get observedAttributes() {
        return ['name'];
    }

    get name() {
        return this.getAttribute('name');
    }
    set name(value) {
        this.setAttribute('name', value);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    update() {
        render(html`Hello, ${this.name} !!`, this.shadowRoot);
    }

    attributeChangedCallback(_name, _oldValue, _newValue) {
        this.update();
    }

}

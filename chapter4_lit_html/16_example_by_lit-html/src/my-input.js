import { html, render } from 'lit-html';

export class MyInput extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        render(html`<input type="text" @keyup="${this.handleKeyup.bind(this)}">`, this.shadowRoot);
    }

    handleKeyup(event) {
        const customEvent = new CustomEvent('update', {
            detail: {
                value: event.target.value
            },
            composed: true
        });
        this.dispatchEvent(customEvent);
    }

}

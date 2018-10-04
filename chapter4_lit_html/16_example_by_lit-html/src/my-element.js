import { html, render } from 'lit-html';
import { guard } from 'lit-html/directives/guard';

export class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.update('');
    }

    update(name) {
        const template = html`
            <my-input @update="${this.handleUpdate.bind(this)}"></my-input>
            ${guard(name, () => html`<my-label name="${name}"></my-label>`)}
        `;
        render(template, this.shadowRoot);
    }

    handleUpdate(event) {
        this.update(event.detail.value);
    }

}

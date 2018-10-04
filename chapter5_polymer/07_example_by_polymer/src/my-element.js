import { LitElement, html } from '@polymer/lit-element';
import { guard } from 'lit-html/directives/guard';

export class MyElement extends LitElement {

    static get properties() {
        return {
            name: {
                type: String,
                reflect: false
            }
        };
    }

    connectedCallback() {
        this.name = '';
    }

    render() {
        return html`
            <my-input @update="${this.handleUpdate.bind(this)}"></my-input>
            ${guard(this.name, () => html`<my-label name="${this.name}"></my-label>`)}
        `;
    }

    handleUpdate(event) {
        this.name = event.detail.value;
    }

}

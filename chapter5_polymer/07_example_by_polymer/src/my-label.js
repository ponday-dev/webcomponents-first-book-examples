import { LitElement, html } from '@polymer/lit-element';

export class MyLabel extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html`Hello, ${this.name} !!`;
    }
}

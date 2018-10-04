import { LitElement, html } from '@polymer/lit-element';

export class MyElement extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        }
    }

    render() {
        return html`<h1>Hello, ${this.name} !!</h1>`;
    }

}

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

    connectedCallback() {
        console.log('connectedCallback');
    }

    firstUpdated(changedProperties) {
        console.log('firstUpdated');
    }

    updated(changedProperties) {
        console.log('updated');
    }

    disconnectedCallback() {
        console.log('disconnectedCallback');
    }

}

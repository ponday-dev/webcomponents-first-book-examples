import { LitElement, html } from '@polymer/lit-element';

export class MyInput extends LitElement {
    
    render() {
        return html`<input type="text" @keyup="${this.handleKeyup.bind(this)}">`;
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

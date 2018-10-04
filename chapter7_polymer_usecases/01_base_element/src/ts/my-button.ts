import { LitElement, html, property } from '@polymer/lit-element';

export class MyButton extends LitElement {

    @property({ reflect: false })
    value = '';

    render() {
        return html`
        <style>
            button {
                color: white;
                background-color: #1989cb;
                border-radius: 3px;
                padding: 0.8rem 2rem;
                cursor: pointer;
            }
            button:hover {
                background-color: #5aa8d6;
            }
        </style>
        <button>
            <slot></slot>
        </button>
        `;
    }

}

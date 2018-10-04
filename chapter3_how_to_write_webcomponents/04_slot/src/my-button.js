export class MyButton extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const slot = document.createElement('slot');
        const button = document.createElement('button');

        button.appendChild(slot);
        this.shadowRoot.appendChild(button);
    }

}

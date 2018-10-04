export class MyInput extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const input = document.createElement('input');
        input.type = 'text';
        input.addEventListener('keyup', this.handleKeyup.bind(this));
        this.shadowRoot.appendChild(input);
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

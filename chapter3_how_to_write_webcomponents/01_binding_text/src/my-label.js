export class MyLabel extends HTMLElement {

    get name() {
        return this.getAttribute('name');
    }
    set name(value) {
        this.setAttribute('name', value);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const h1 = document.createElement('h1');
        h1.textContent = `Hello, ${this.name} !!`;
        this.shadowRoot.appendChild(h1);
    }

}

export class MyLabel extends HTMLElement {

    static get observedAttributes() {
        return ['name'];
    }

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
        this.shadowRoot.appendChild(h1);
    }

    render() {
        this.shadowRoot.querySelector('h1').textContent = `Hello, ${this.name} !!`;
    }

    attributeChangedCallback(_name, _oldValue, _newValue) {
        this.render();
    }

}

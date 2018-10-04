export class MyElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const df = document.createDocumentFragment();

        const myInput = document.createElement('my-input');
        myInput.addEventListener('update', this.handleUpdate.bind(this));

        const myLabel = document.createElement('my-label');

        df.appendChild(myInput);
        df.appendChild(myLabel);

        this.shadowRoot.appendChild(df);
        this.render('');
    }

    render(value) {
        this.shadowRoot.querySelector('my-label').name = value;
    }

    handleUpdate(event) {
        this.render(event.detail.value);
    }

}

import { html, render } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {
    const template = html`<button @click="${(e) => console.log('clicked!')}">click</button>`;
    const container =  document.getElementById('container');

    render(template, container);
});

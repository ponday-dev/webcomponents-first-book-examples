import { html, render } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {
    const initialValue = 'Web Components';
    const template = html`<input type="text" .value=${initialValue}>`
    const container =  document.getElementById('container');

    render(template, container);
});

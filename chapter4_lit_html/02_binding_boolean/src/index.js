import { html, render } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {
    const template = html`
        <p>
        <input type="checkbox" ?checked=${true}>checked = true
        </p>
        <p>
        <input type="checkbox" ?checked=${false}>checked = false
        </p>
    `;
    const container =  document.getElementById('container');

    render(template, container);
});

import { html, render } from 'lit-html';
import { when } from 'lit-html/directives/when';

window.addEventListener('DOMContentLoaded', () => {
    rendering(false);
});

function rendering(checked) {
    const template = html`
        <input type="checkbox" ?checked="${checked}" @change="${event => rendering(event.target.checked)}">
        <h1>${when(
            checked,
            () => html`Checked`,
            () => html`Not checked`
        )}</h1>
    `;
    const container =  document.getElementById('container');

    render(template, container);
}

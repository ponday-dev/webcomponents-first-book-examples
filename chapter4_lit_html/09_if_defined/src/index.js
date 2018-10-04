import { html, render } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

window.addEventListener('DOMContentLoaded', () => {

    const classValue = 'header';
    let nullValue;
    const template = html`
        <h1 class="${ifDefined(classValue)}">This header has class value</h1>
        <h1 class="${ifDefined(nullValue)}">This header does not have class value</h1>
    `;
    const container =  document.getElementById('container');

    render(template, container);
});

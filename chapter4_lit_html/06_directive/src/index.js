import { html, render, directive } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {

    const template = html`<h1>${
        directive(part => {
            part.setValue("Directive Sample");
        })
    }</h1>`;
    const container =  document.getElementById('container');

    render(template, container);
});

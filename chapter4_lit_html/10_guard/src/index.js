import { html, render } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { guard } from 'lit-html/directives/guard';

let list = [];

const countUp = (function* () {
    for(let i = 1; true; i++) {
        yield i;
    }
})();

window.addEventListener('DOMContentLoaded', () => {
    rendering(list);
});

function rendering(array) {

    const template = html`
        <button @click="${add}">add</button>
        <button @click="${apply}">apply</button>
        <ul>
            ${guard(array, () => repeat(array, v => v, v => html`<li>${v}</li>`))}
        </ul>
    `;
    const container =  document.getElementById('container');
    render(template, container);
}

function add() {
    list.push(countUp.next().value);
    rendering(list);
}

function apply() {
    list = list.slice();
    rendering(list);
}
import { html, render } from 'lit-html';
import { asyncAppend } from 'lit-html/directives/async-append';

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

async function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
    await wait(1000);
  }
}

window.addEventListener('DOMContentLoaded', () => {

    const template = html`<p>${asyncAppend(countUp())}</p>`;
    const container =  document.getElementById('container');
    render(template, container);

});

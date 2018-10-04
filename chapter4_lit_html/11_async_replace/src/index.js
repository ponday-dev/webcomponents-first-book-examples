import { html, render } from 'lit-html';
import { asyncReplace } from 'lit-html/directives/async-replace';

const wait = (t) => new Promise((resolve) => setTimeout(resolve, t));

async function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
    await wait(1000);
  }
}

window.addEventListener('DOMContentLoaded', () => {

    const template = html`Count: <span>${asyncReplace(countUp())}</span>.`;
    const container =  document.getElementById('container');
    render(template, container);

});

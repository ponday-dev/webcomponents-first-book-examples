import { html, render } from 'lit-html';
import { until } from 'lit-html/directives/until';

function wait(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), n);
  });
}

window.addEventListener('DOMContentLoaded', () => {

  const template = html`<h1>${until(wait(1000), html`waiting...`)}</h1>`;
  const container =  document.getElementById('container');
  render(template, container);

});

import { html, render } from 'lit-html';
import { classMap } from 'lit-html/directives/classMap';

window.addEventListener('DOMContentLoaded', () => {

  const classes = { foo: true, bar: false };
  const template = html`<div class="${classMap(classes)}">div</div>`;
  const container =  document.getElementById('container');
  render(template, container);

});

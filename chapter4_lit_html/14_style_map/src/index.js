import { html, render } from 'lit-html';
import { styleMap } from 'lit-html/directives/styleMap';

window.addEventListener('DOMContentLoaded', () => {

  const styles = {
    color: 'white',
    backgroundColor: '#424242'
  };
  const template = html`<h1 style="${styleMap(styles)}">Header</h1>`;
  const container =  document.getElementById('container');
  render(template, container);

});

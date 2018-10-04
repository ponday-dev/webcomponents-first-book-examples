import { html, render } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {
    const innerTemplate = html`
        <section>
            <h2>Demo Section</h2>
        </section>
    `;
    const template = html`
        <article>
            <h1>Demo Article</h1>
            ${innerTemplate}
        </article>
    `;
    const container =  document.getElementById('container');

    render(template, container);
});

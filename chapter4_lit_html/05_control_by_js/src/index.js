import { html, render } from 'lit-html';

window.addEventListener('DOMContentLoaded', () => {
    const list = [
        { id: 1, title: 'Demo Section 1', content: 'Demo Content 1' },
        { id: 2, title: 'Demo Section 2', content: 'Demo Content 2' },
        { id: 3, title: 'Demo Section 3', content: 'Demo Content 3' },
        { id: 4, title: 'Demo Section 4', content: 'Demo Content 4' },
        { id: 5, title: 'Demo Section 5', content: 'Demo Content 5' }
    ];
    const template = html`
        <article>
            <h1>Demo Article</h1>
            ${list.map(data => html`
                <h2>${data.title}</h2>
                <p>${data.content}</p>
            `)}
        </article>
    `;
    const container =  document.getElementById('container');

    render(template, container);
});

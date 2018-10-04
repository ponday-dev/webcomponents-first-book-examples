import { MyLabel } from './my-label';

window.customElements.define('my-label', MyLabel);

window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('my-label').name = "Web Components Sample";
});

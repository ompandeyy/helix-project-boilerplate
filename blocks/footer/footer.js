import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
    const html = await resp.text();
    console.log("html is : "+html);

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    console.log("footer inner html after appending  is : "+footer);
    decorateIcons(footer);
    block.append(footer);
    console.log("block after appending  is : "+block);
  }
}

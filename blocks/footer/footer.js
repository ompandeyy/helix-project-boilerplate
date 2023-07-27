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

    // decorate footer DOM
    const footer = document.createElement('div');
    footer.innerHTML = html;

    decorateIcons(footer);
    block.append(footer);

    // Create a new <div> element
    const newElement = document.createElement('div');
    newElement.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

    // Set the HTML content for the new element
    newElement.innerHTML = `
      <footer id="footer">
          <article>
              <div class="container pt50 pb50">
                  <div class="row">
                //inner html comes here
              </div>
          </article>
      </footer>
    `;

    const footerContainer = newElement.querySelector('.row');

    [...block.children].forEach((item) => {
      const column = document.createElement('div');
      column.className = 'col-lg-2 col-md-3 col-sm-4 col-xs-12';
      const h3Element = document.querySelector("h3.ftr-head");
      // Get the li element
      const liElement = document.querySelector("ui>li");
     if (liElement) {
                const link = liElement.querySelector('a');
                const linkText = link ? link.textContent : "Link not found!";
                const href = link ? link.getAttribute('href') : "Href not found!";
                const title = link ? link.getAttribute('title') : "Title not found!";
                const label = link ? link.getAttribute('aria-label') : "Label not found!";
            } else {
                console.log("li element not found!");
            }
      // Read the content of h3 and li
      const h3Content = h3Element ? h3Element.textContent : "h3 element not found!";
      console.log("h3Content"+ h3Content),
      column.innerHTML = `
        <h3 class="ftr-head mt-xs-20">${h3Content}</h3>
                            <ul class="list-unstyled footer-txt">
                                <li><a aria-label="${label}" href="${href}" title="${title}">${linkText}</a></li>
                                </ul>
      `;

      footerContainer.appendChild(column);
      });
  }
}

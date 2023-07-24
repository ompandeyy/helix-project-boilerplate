import { readBlockConfig, decorateIcons } from '../../scripts/scripts.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  await decorateIcons(footer);
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
              <!-- JavaScript will insert the content here -->
            </div>
          </div>
        </article>
      </footer>
  `;
  
  
  
      // Get the target container to insert the content
      const targetContainer = document.querySelector('#footer .container .row');
  
      // Loop through each h3 and ul elements inside the original div
      const h3Elements = footer.querySelectorAll('h3');
      const ulElements = footer.querySelectorAll('ul');
  
      for (let i = 0; i < h3Elements.length; i++) {
        const h3Text = h3Elements[i].innerText;
        const ul = ulElements[i];
  
        // Create the corresponding elements for [2]
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-2 col-md-3 col-sm-4 col-xs-12';
  
        const h3Element = document.createElement('h3');
        h3Element.className = 'ftr-head mt-xs-20';
        h3Element.innerText = h3Text;
  
        const ulElement = document.createElement('ul');
        ulElement.className = 'list-unstyled footer-txt';
  
        // Loop through each li element inside the ul
        const liElements = ul.querySelectorAll('li');
        for (let j = 0; j < liElements.length; j++) {
          const liText = liElements[j].innerText;
          const liLink = liElements[j].querySelector('a').href;
  
          const liElement = document.createElement('li');
          const aElement = document.createElement('a');
          aElement.setAttribute('aria-label', `Go to ${liText} Page`);
          aElement.setAttribute('href', liLink);
          aElement.setAttribute('title', liText);
          aElement.innerText = liText;
  
          liElement.appendChild(aElement);
          ulElement.appendChild(liElement);
        }
  
        colDiv.appendChild(h3Element);
        colDiv.appendChild(ulElement);
        targetContainer.appendChild(colDiv);
      }
}

  const targetElement = document.querySelector('div');

  // Create a new <div> element
  const newElement = document.createElement('div');
  newElement.className = 'experiencefragment aem-GridColumn aem-GridColumn--default--12';

  // Create the header section
  const headerSection = document.createElement('div');
  headerSection.className = 'xf-content-height';
  const headerGrid = document.createElement('div');
  headerGrid.className = 'aem-Grid aem-Grid--12 aem-Grid--default--12';
  const headerContent = document.createElement('div');
  headerContent.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

  headerGrid.appendChild(headerContent);
  headerSection.appendChild(headerGrid);
  newElement.appendChild(headerSection);

  // Create the footer section
  const footer = document.createElement('footer');
  const article = document.createElement('article');
  const container = document.createElement('div');
  container.className = 'container pt50 pb50';

  // Process each section in the original HTML and create corresponding sections in the new structure
  const sections = targetElement.querySelectorAll('h3');
  sections.forEach((section) => {
    const sectionTitle = section.querySelector('strong').textContent;

    const colElement = document.createElement('div');
    colElement.className = 'col-lg-3 col-md-3 col-sm-4 col-xs-12';

    const titleElement = document.createElement('h3');
    titleElement.className = 'ftr-head mt-xs-20';
    titleElement.textContent = sectionTitle;
    colElement.appendChild(titleElement);

    const ulElement = document.createElement('ul');
    ulElement.className = 'list-unstyled footer-txt';
    const links = section.nextElementSibling.querySelectorAll('a');
    links.forEach((link) => {
      const liElement = document.createElement('li');
      const clonedLink = link.cloneNode(true);
      liElement.appendChild(clonedLink);
      ulElement.appendChild(liElement);
    });
    colElement.appendChild(ulElement);

    container.appendChild(colElement);
  });

  // Add the footer section to the new element
  article.appendChild(container);
  footer.appendChild(article);
  newElement.appendChild(footer);

  // Replace the target element with the new element
  targetElement.parentNode.replaceChild(newElement, targetElement);
}

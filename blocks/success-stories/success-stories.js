import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  convertHtmlSnippet(block);
}

function convertHtmlSnippet(htmlSnippet) {
  // Create a temporary element to parse the HTML snippet
  const tempElement = document.createElement('div');
  tempElement.innerHTML = htmlSnippet.trim();

  // Modify the HTML structure and attributes
  const div = tempElement.querySelector('.success-stories');
  div.classList.remove('success-stories');
  div.classList.add('successstories', 'aem-GridColumn', 'aem-GridColumn--default--12');
  //div.removeAttribute('data-block-status');
  //div.removeAttribute('data-block-name');

  const section = tempElement.querySelector('#success_stories');
  section.removeAttribute('id');

  const container = tempElement.querySelector('.container');
  container.classList.add('row');

  const cols = tempElement.querySelectorAll('.col-md-3');
  cols.forEach((col) => {
    col.classList.remove('col-md-3', 'col-sm-6', 'mb20');
    col.classList.add('col-md-3', 'col-sm-6', 'col-xs-12');
  });

  const article = tempElement.querySelector('article');
  article.classList.add('row', 'equal-heights');

  const showMoreBtn = tempElement.querySelector('.btn-shutter-more');
  showMoreBtn.setAttribute('aria-label', 'Show More about Success Stories');

  // Return the modified HTML snippet
  return tempElement.innerHTML;
}

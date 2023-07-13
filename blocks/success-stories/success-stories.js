import { createOptimizedPicture } from '../../scripts/scripts.js';

export default function decorate(block) {
  // convertHtmlSnippet(block);
  convertDOMforSuccessStory();
}

// function convertHtmlSnippet(htmlSnippet) {
//   // Create a temporary element to parse the HTML snippet
//   const tempElement = document.createElement('div');
//   tempElement.innerHTML = htmlSnippet.trim();

//   // Modify the HTML structure and attributes
//   const div = tempElement.querySelector('.success-stories-container');
//   div.classList.remove('success-stories');
//   div.classList.add('successstories', 'aem-GridColumn', 'aem-GridColumn--default--12');
//   //div.removeAttribute('data-block-status');
//   //div.removeAttribute('data-block-name');

//   const section = tempElement.querySelector('#success_stories');
//   section.removeAttribute('id');

//   const container = tempElement.querySelector('.container');
//   container.classList.add('row');

//   const cols = tempElement.querySelectorAll('.col-md-3');
//   cols.forEach((col) => {
//     col.classList.remove('col-md-3', 'col-sm-6', 'mb20');
//     col.classList.add('col-md-3', 'col-sm-6', 'col-xs-12');
//   });

//   const article = tempElement.querySelector('article');
//   article.classList.add('row', 'equal-heights');

//   const showMoreBtn = tempElement.querySelector('.btn-shutter-more');
//   showMoreBtn.setAttribute('aria-label', 'Show More about Success Stories');

//   // Return the modified HTML snippet
//   return tempElement.innerHTML;
// }

function convertDOMforSuccessStory() {
  // main div
  const successContainer = document.querySelector('.success-stories-container');
  successContainer.classList.remove('success-stories-container');
  successContainer.classList.add('successstories', 'aem-GridColumn', 'aem-GridColumn--default--12');

  // section container
  const sec = document.createElement('section');
  sec.setAttribute("id", "success_stories");

  // article container
  const articleSec = document.createElement('article');
  articleSec.setAttribute("class", "container");

  // Child 1 - Set success title, sub-title
  const divRow = document.createElement('div');
  divRow.setAttribute("class", "row");
  const defaultContentWrapper = successContainer.querySelector('.default-content-wrapper');
  defaultContentWrapper.classList.remove('default-content-wrapper');
  defaultContentWrapper.classList.add('col-md-9', 'col-sm-9', 'col-xs-12', 'wow', 'fadeInDown', 'animated');
  defaultContentWrapper.querySelector('h2').classList.add('h2-heading', 'white-color');
  defaultContentWrapper.querySelector('h2').removeAttribute('id');
  divRow.appendChild(defaultContentWrapper);
  articleSec.appendChild(divRow);

  // Child 2 - Set success title, sub-title
  const successStoriesWrapper = successContainer.querySelector('.success-stories-wrapper');
  successStoriesWrapper.classList.remove('success-stories-wrapper');
  successStoriesWrapper.classList.add('row', 'equal-heights');
    
  const imgs = successContainer.querySelectorAll('.success-stories.block');
  imgs.forEach((i) => {
    i.classList.remove('success-stories', 'block');
    i.classList.add('col-md-3', 'col-sm-6', 'col-xs-12', 'mb20', 'relative', 'wow', 'fadeInLeft', 'animated');

    // const fc = i.firstChild;
    // console.log('fc', fc);
    // fc.classList.add('equal-bg','bg-light-white');

    // const sc = fc.firstChild;
    // console.log('sc', sc);
    // sc.classList.add('row');
  });
  
  console.log('imgs', imgs);

  successStoriesWrapper.querySelector('h2').classList.add('h2-heading', 'white-color');
  successStoriesWrapper.querySelector('h2').removeAttribute('id');
  divRow.appendChild(successStoriesWrapper);
  articleSec.appendChild(divRow);


  sec.appendChild(articleSec);
  successContainer.appendChild(sec);

  console.log(successContainer);
}

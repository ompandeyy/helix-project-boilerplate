// Function to convert HTML from [1] to [2]
function convertHTML() {
  const originalContainer = document.querySelector('.service-offerring'); // Select the original container [1]
  const newContainer = document.createElement('div'); // Create a new container [2]
  newContainer.classList.add('offeringscontainer', 'aem-GridColumn', 'aem-GridColumn--default--12');

  const sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'our_offerings');
  sectionElement.classList.add('pt75');

  const articleElement = document.createElement('article');
  articleElement.classList.add('container-fluid', 'p0', 'wow', 'fadeInUp', 'animated');
  articleElement.setAttribute('data-wow-delay', '0.6s');
  articleElement.setAttribute('style', 'visibility: visible;-webkit-animation-delay: 0.6s; -moz-animation-delay: 0.6s; animation-delay: 0.6s;');

  const rowDiv = document.createElement('div');
  rowDiv.classList.add('row-fluid', 'offering-hover', 'mt50');

  const borderDiv = document.createElement('div');
  borderDiv.classList.add('border-left');

  const offeringsRowDiv = document.createElement('div');
  offeringsRowDiv.classList.add('offerings-row', 'clearfix');

  // Clone the original container content and modify the structure
  const clonedContainer = originalContainer.cloneNode(true);
  const segmentTitle = clonedContainer.querySelector(':first-child > div:first-child');
  const offerings = Array.from(clonedContainer.querySelectorAll(':not(:first-child)'));

  // Modify the classes and structure to match the [2] HTML
  segmentTitle.classList.add('col-md-3', 'col-sm-12', 'col-xs-12', 'mb-sm-20');
  offerings.forEach((offering) => {
    offering.classList.add('col-md-3', 'col-sm-4', 'col-xs-12', 'mb-sm-20');
    const anchor = offering.querySelector('div:nth-child(2)');
    const a = document.createElement('a');
    //a.setAttribute('href', anchor.textContent);
    //a.setAttribute('title', anchor.previousElementSibling.textContent);
    //a.textContent = anchor.previousElementSibling.textContent;
    anchor.parentNode.replaceChild(a, anchor);
  });

  offeringsRowDiv.appendChild(clonedContainer);
  rowDiv.appendChild(borderDiv);
  rowDiv.appendChild(offeringsRowDiv);
  articleElement.appendChild(rowDiv);
  sectionElement.appendChild(articleElement);
  newContainer.appendChild(sectionElement);

  // Replace the original container [1] with the new container [2]
  originalContainer.parentNode.replaceChild(newContainer, originalContainer);
}

// Call the function to convert the HTML
convertHTML();

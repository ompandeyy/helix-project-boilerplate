// Get the target element to replace
const targetElement = document.querySelector('.partner-ecosystem');

// Create a new <div> element
const newElement = document.createElement('div');
newElement.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

// Set the HTML content for the new element
newElement.innerHTML = `
  <section id="ecosystem" class="">
    <article class="container-fluid">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12 wow fadeInUp animated" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
              <div class="h1-heading white-color text-center mb50">Partner Ecosystem</div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="row d-flex"></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
`;

const logosContainer = newElement.querySelector('.row.d-flex');


export default function decorate(block) {
// Get the container element for the logos

let colElement = document.createElement('div');
colElement.className = 'col-lg-2 col-md-2 col-sm-4 col-xs-12';

 [...block.children].forEach((logosRow, index) => {
  if (index > 0 && index % 5 === 0) {
    logosContainer.appendChild(logosRow);
    logosRow = document.createElement('div');
    logosRow.className = 'row d-flex';
  }

  const logoUrl = logo.nextElementSibling.textContent;
  const imageUrl = logo.querySelector('img').getAttribute('src');
  const imageAlt = logo.querySelector('img').getAttribute('alt');

  const logoElement = document.createElement('div');
  logoElement.className = 'logo-design';
  logoElement.innerHTML = `
    <div class="logo-img-wrap">
      <a href="${logoUrl}" title="${imageAlt}">
        <img src="${imageUrl}" class="img-responsive get-image-height center-block" alt="${imageAlt}">
      </a>
    </div>
  `;

  colElement.appendChild(logoElement);

  if ((index + 1) % 5 === 0 || index === block.length - 1) {
    logosRow.appendChild(colElement);
    colElement = document.createElement('div');
    colElement.className = 'col-lg-2 col-md-2 col-sm-4 col-xs-12';
  }

});
// Add the last row of logos to the container
logosContainer.appendChild(logosRow);
}



// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);


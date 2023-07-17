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
              <div class="row d-flex">
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
`;

// Get the container element for the logos
const logosContainer = newElement.querySelector('.row.d-flex');

// Loop through the logos and create the logo elements

export default function decorate(block) {
// Loop through the logos and create the logo elements
let logosRow = document.createElement('div');
logosRow.className = 'row d-flex';

[...block.children].forEach((logo, index) => {
if (index > 0 && index % 5 === 0) {
    logosContainer.appendChild(logosRow);
    logosRow = document.createElement('div');
    logosRow.className = 'row d-flex';
  }

  const logoUrl = logo.nextElementSibling.textContent;
  const imageUrl = logo.querySelector('img').getAttribute('src');
  const imageAlt = logo.querySelector('img').getAttribute('alt');

  const logoElement = document.createElement('div');
  logoElement.className = 'col-lg-2 col-md-2 col-sm-4 col-xs-12';

  logoElement.innerHTML = `
    <div class="logo-design">
      <div class="logo-img-wrap">
        <a href="${logoUrl}" title="${imageAlt}">
          <img src="${imageUrl}" class="img-responsive get-image-height center-block" alt="${imageAlt}">
        </a>
      </div>
    </div>
  `;

  logosContainer.appendChild(logoElement);
  });
}

// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);

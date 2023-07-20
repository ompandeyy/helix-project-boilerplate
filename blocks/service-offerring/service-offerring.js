import { createOptimizedPicture } from '../../scripts/scripts.js';

  // Get the target element to replace
  const targetElement = document.querySelector('.service-offerring');

  // Create a new <div> element
  const newElement = document.createElement('div');
  newElement.className = 'offeringscontainer aem-GridColumn aem-GridColumn--default--12';

  // Set the HTML content for the new element
  newElement.innerHTML = `
    <section id="our_offerings" class="pt75 ">
      <article class="container-fluid p0 wow fadeInUp animated" data-wow-delay="0.6s" style="visibility: visible;-webkit-animation-delay: 0.6s; -moz-animation-delay: 0.6s; animation-delay: 0.6s;">
        <div class="row-fluid offering-hover mt50">
          <div class="border-left"></div>
          <div class="offerings-row clearfix">
            <div class="service-offering">
              <div class="col-md-3 col-sm-12 col-xs-12 mb-sm-20">
                <p class="offering-title">${targetElement.querySelector('div > div').textContent}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  `;

  // Get the container element for the service offerings
  const serviceOfferingContainer = newElement.querySelector('.offerings-row');

export default function decorate(block) {
   [...block.children].forEach((item) => {
    const title = item.querySelector('div:first-child').textContent;
    const link = item.querySelector('div:last-child').textContent;
    const offeringElement = document.createElement('div');
    offeringElement.className = 'col-md-3 col-sm-4 col-xs-12 mb-sm-20';
    offeringElement.innerHTML = `
      <ul class="offering-list">
        <li><a href="${link}" title="${title}">${title}</a></li>
      </ul>
    `;
    serviceOfferingContainer.appendChild(offeringElement);
  });
}
  // Replace the target element with the new element
  targetElement.parentNode.replaceChild(newElement, targetElement);

// Get the target element to replace
const targetElement = document.querySelector('.dx-carousel-wrapper');

// Create a new <div> element
const newElement = document.createElement('div');
newElement.className = 'carousel aem-GridColumn aem-GridColumn--default--12';

// Set the HTML content for the new element
newElement.innerHTML = `
  <div class="cmp-carousel" data-cmp-delay="5000">
    <section id="hero_slider">
      <div id="main-cnt"></div>
      <article class="container-fluid slider">
        <div class="row">
          <div id="hero_slider_carousel" class="owl-carousel owl-theme owl-loaded owl-drag"></div>
        </div>
      </article>
    </section>
  </div>
`;

// Get the carousel container
const carouselContainer = newElement.querySelector('#hero_slider_carousel');

export default function decorate(block) {
[...block.children].forEach((item) => {
const picture = item.querySelector('picture');
  const imgSrc = picture.querySelector('img').getAttribute('src');
  const imgAlt = picture.querySelector('img').getAttribute('alt');
  const buttonHref = item.querySelector('.button-container > a').getAttribute('href');
  const buttonTitle = item.querySelector('.button-container > a').getAttribute('title');
  const description = item.querySelector('div:nth-child(3)').textContent;

  const carouselItem = document.createElement('div');
  carouselItem.className = 'owl-item cloned';
  carouselItem.style.width = '1263.33px';
  carouselItem.innerHTML = `
    <div class="item slide-2">
      <div class="teaser">
        <img class="portal-mob visible-xs" src="/content/dam/infosys-web/en/global-resource/background-image/portals.png" alt="Portals">
        <div role="img" aria-label="${description}" class="repeated-css industries-gradient">
          <img src="${imgSrc}" class="slide-image hidden-xs" alt="${imgAlt}">
          <img src="${imgSrc}" class="slide-image visible-xs" alt="${imgAlt}">
        </div>
        <div class="slider-overlay-coral"></div>
        <div class="caption">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 wow fadeInLeft animated animated" style="visibility: visible;">
                <p class="text-uppercase topicIndicator">${buttonTitle}</p>
                <p class="h2-heading white-color">${description}</p>
                <a href="${buttonHref}" target="_blank" class="btn btn-shutter-more text-uppercase" aria-describedby="${buttonTitle}">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  carouselContainer.appendChild(carouselItem);
  });
}

// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);

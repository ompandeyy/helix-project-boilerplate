// Get the target element to replace
const targetElement = document.querySelector('.success-stories-wrapper');

// Create a new <div> element
const newElement = document.createElement('div');
newElement.className = 'successstories aem-GridColumn aem-GridColumn--default--12';

// Set the HTML content for the new element
newElement.innerHTML = `
  <section id="success_stories">
    <article class="container">
      <div class="row">
        <div class="col-md-9 col-sm-9 col-xs-12 wow fadeInDown animated" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
          <h2 class="h2-heading white-color">Success Stories</h2>
          <div class="yellow-dots-left"> <span></span> <span></span> <span></span> </div>
          <p class="para-txt white-color mb50">Delivering the Complete Customer Experience</p>
        </div>
      </div>
      <div class="row equal-heights">
      </div>
      <div class="col-md-12 col-sm-12 col-xs-12 mt50 wow fadeInUp animated" data-wow-delay="1.2s" style="visibility: visible;-webkit-animation-delay: 1.2s; -moz-animation-delay: 1.2s; animation-delay: 1.2s;"> <a class="btn btn-shutter-more casestudy-btn" href="/services/digital-experience/case-studies.html" aria-label="Show More about Success Stories">Show More</a> </div>
    </article>
  </section>
`;

// Get the container element for success stories
const successStoriesContainer = newElement.querySelector('.equal-heights');

// Get the data from [1] HTML
const successStories = targetElement.querySelectorAll('.success-stories');

// Loop through the success stories and create columns
successStories.forEach((story) => {
  const column = document.createElement('div');
  column.className = 'col-md-3 col-sm-6 col-xs-12 mb20 relative wow fadeInLeft animated';
  column.dataset.wowDelay = '0.3s';
  column.style.visibility = 'visible';
  column.style.webkitAnimationDelay = '0.3s';
  column.style.mozAnimationDelay = '0.3s';
  column.style.animationDelay = '0.3s';

  const storyHTML = story.innerHTML;
  column.innerHTML = `
    <div class="equal-bg bg-light-white">
      <div class="row">
        ${storyHTML}
      </div>
    </div>
  `;

  successStoriesContainer.appendChild(column);
});

// Replace the target element with the new element
targetElement.parentNode.replaceChild(newElement, targetElement);

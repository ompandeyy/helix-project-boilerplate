  // Get the target element
  var targetElement = document.querySelector('.dx-carousel');

  // Create the main container element for the converted carousel [2]
  var mainContainer = document.createElement('div');
  mainContainer.classList.add('carousel', 'aem-GridColumn', 'aem-GridColumn--default--12');

  // Create the carousel element [2]
  var carouselElement = document.createElement('div');
  carouselElement.classList.add('cmp-carousel');
  carouselElement.setAttribute('data-cmp-delay', '5000');

  // Create the section element [2]
  var sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'hero_slider');

  // Create the main content container element [2]
  var mainContentContainer = document.createElement('div');
  mainContentContainer.setAttribute('id', 'main-cnt');

  // Append the main content container to the section element
  sectionElement.appendChild(mainContentContainer);

  // Create the article element [2]
  var articleElement = document.createElement('article');
  articleElement.classList.add('container-fluid', 'slider');

  // Create the row element [2]
  var rowElement = document.createElement('div');
  rowElement.classList.add('row');

  // Append the row element to the article element
  articleElement.appendChild(rowElement);

  // Get the individual carousel items from [1]
  var carouselItems = targetElement.querySelectorAll('div > div');

  // Loop through each carousel item from [1]
  for (var i = 0; i < carouselItems.length; i++) {
    var item = carouselItems[i];

    // Create the owl-item element [2]
    var owlItemElement = document.createElement('div');
    owlItemElement.classList.add('owl-item');
    owlItemElement.style.width = '1263.33px';

    // Create the item element [2]
    var itemElement = document.createElement('div');
    itemElement.classList.add('item', 'slide-' + i);

    // Clone the contents of each carousel item and append them to the item element
    var clonedContents = item.cloneNode(true).childNodes;
    for (var j = 0; j < clonedContents.length; j++) {
      itemElement.appendChild(clonedContents[j].cloneNode(true));
    }

    // Append the item element to the owl-item element
    owlItemElement.appendChild(itemElement);

    // Append the owl-item element to the row element
    rowElement.appendChild(owlItemElement);
  }

  // Append the row element to the article element
  articleElement.appendChild(rowElement);

  // Append the article element to the main container
  mainContainer.appendChild(articleElement);

  // Append the section element to the carousel element
  carouselElement.appendChild(sectionElement);

  // Append the carousel element to the main container
  mainContainer.appendChild(carouselElement);

  // Replace the original target element with the converted carousel [2]
  targetElement.parentNode.replaceChild(mainContainer, targetElement);

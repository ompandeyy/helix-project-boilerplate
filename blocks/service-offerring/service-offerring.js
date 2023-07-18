
  // Get the target element
  var targetElement = document.querySelector('.service-offerring-wrapper');

  // Create the main container element for the converted offerings [2]
  var mainContainer = document.createElement('div');
  mainContainer.classList.add('offeringscontainer', 'aem-GridColumn', 'aem-GridColumn--default--12');

  // Create the section element [2]
  var sectionElement = document.createElement('section');
  sectionElement.setAttribute('id', 'our_offerings');
  sectionElement.classList.add('pt75');

  // Create the article element [2]
  var articleElement = document.createElement('article');
  articleElement.classList.add('container-fluid', 'p0', 'wow', 'fadeInUp', 'animated');
  articleElement.setAttribute('data-wow-delay', '0.6s');
  articleElement.style.visibility = 'visible';
  articleElement.style.webkitAnimationDelay = '0.6s';
  articleElement.style.mozAnimationDelay = '0.6s';
  articleElement.style.animationDelay = '0.6s';

  // Create the row element [2]
  var rowElement = document.createElement('div');
  rowElement.classList.add('row-fluid', 'offering-hover', 'mt50');
  rowElement.innerHTML = '<div class="border-left"></div><div class="offerings-row clearfix"></div>';

  // Get the individual service offerings from [1]
  var serviceOfferings = targetElement.querySelectorAll('.service-offerring');

  // Loop through each service offering from [1]
  for (var i = 0; i < serviceOfferings.length; i++) {
    var offering = serviceOfferings[i];

    // Create the service offering element [2]
    var offeringElement = document.createElement('div');
    offeringElement.classList.add('service-offering');

    // Create the column element for the title [2]
    var titleColumnElement = document.createElement('div');
    titleColumnElement.classList.add('col-md-3', 'col-sm-12', 'col-xs-12', 'mb-sm-20');

    // Create the offering title element [2]
    var offeringTitleElement = document.createElement('p');
    offeringTitleElement.classList.add('offering-title');
    offeringTitleElement.textContent = offering.querySelector('div:nth-child(1) > div').textContent;

    // Append the offering title element to the title column element
    titleColumnElement.appendChild(offeringTitleElement);

    // Append the title column element to the offering element
    offeringElement.appendChild(titleColumnElement);

    // Get the individual buttons within the service offering from [1]
    var buttons = offering.querySelectorAll('div:nth-child(n+2) > div');

    // Loop through each button and create the column element [2]
    for (var j = 0; j < buttons.length; j++) {
      var button = buttons[j];

      // Create the column element for the button [2]
      var buttonColumnElement = document.createElement('div');
      buttonColumnElement.classList.add('col-md-3', 'col-sm-4', 'col-xs-12', 'mb-sm-20');

      // Create the offering list element [2]
      var offeringListElement = document.createElement('ul');
      offeringListElement.classList.add('offering-list');

      // Create the list item for the button and its link [2]
      var listItemElement = document.createElement('li');
      var linkElement = document.createElement('a');
      linkElement.href = button.querySelector('a').href;
      linkElement.title = button.querySelector('a').title;
      linkElement.textContent = button.querySelector('a').textContent;

      // Append the link element to the list item element
      listItemElement.appendChild(linkElement);

      // Append the list item element to the offering list element
      offeringListElement.appendChild(listItemElement);

      // Append the offering list element to the button column element
      buttonColumnElement.appendChild(offeringListElement);

      // Append the button column element to the offering element
      offeringElement.appendChild(buttonColumnElement);
    }

    // Append the offering element to the row element
    rowElement.querySelector('.offerings-row').appendChild(offeringElement);
  }

  // Append the row element to the article element
  articleElement.appendChild(rowElement);

  // Append the article element to the section element
  sectionElement.appendChild(articleElement);

  // Append the section element to the main container
  mainContainer.appendChild(sectionElement);

  // Replace the original target element with the converted offerings [2]
  targetElement.parentNode.replaceChild(mainContainer, targetElement);

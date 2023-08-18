import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
// function toggleMenu(nav, navSections, forceExpanded = null) {
//   const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
//   const button = nav.querySelector('.nav-hamburger button');
//   document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
//   nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//   toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
//   button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
//   // enable nav dropdown keyboard accessibility
//   const navDrops = navSections.querySelectorAll('.nav-drop');
//   if (isDesktop.matches) {
//     navDrops.forEach((drop) => {
//       if (!drop.hasAttribute('tabindex')) {
//         drop.setAttribute('role', 'button');
//         drop.setAttribute('tabindex', 0);
//         drop.addEventListener('focus', focusNavSection);
//       }
//     });
//   } else {
//     navDrops.forEach((drop) => {
//       drop.removeAttribute('role');
//       drop.removeAttribute('tabindex');
//       drop.removeEventListener('focus', focusNavSection);
//     });
//   }
//   // enable menu collapse on escape keypress
//   if (!expanded || isDesktop.matches) {
//     // collapse menu on escape press
//     window.addEventListener('keydown', closeOnEscape);
//   } else {
//     window.removeEventListener('keydown', closeOnEscape);
//   }
// }

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = html;

    // const classes = ['brand', 'sections', 'tools'];
    // classes.forEach((c, i) => {
    //   const section = nav.children[i];
    //   if (section) section.classList.add(`nav-${c}`);
    // });

    // const navSections = nav.querySelector('.nav-sections');
    // if (navSections) {
    //   navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
    //     if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
    //     navSection.addEventListener('click', () => {
    //       if (isDesktop.matches) {
    //         const expanded = navSection.getAttribute('aria-expanded') === 'true';
    //         toggleAllNavSections(navSections);
    //         navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    //       }
    //     });
    //   });
    // }

    // // hamburger for mobile
    // const hamburger = document.createElement('div');
    // hamburger.classList.add('nav-hamburger');
    // hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
    //     <span class="nav-hamburger-icon"></span>
    //   </button>`;
    // hamburger.addEventListener('click', () => toggleMenu(nav, navSections));
    // nav.prepend(hamburger);
    // nav.setAttribute('aria-expanded', 'false');
    // // prevent mobile nav behavior on window resize
    // toggleMenu(nav, navSections, isDesktop.matches);
    // isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

    decorateIcons(nav);
    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-wrapper';
    navWrapper.append(nav);
    block.append(navWrapper);

    var mainDXNavContent = document.querySelector('.nav-wrapper > #nav > div');
    mainDXNavContent.style.display = 'none';
    
    var getMainNav = document.querySelector('.nav-wrapper > #nav');
    getMainNav.classList.add('navbar', 'navbar-default', 'navbar-fixed-top', 'scrollbg-show');
    getMainNav.setAttribute('role','navigation');

    var navFirstDxDiv = document.createElement('div');
    navFirstDxDiv.classList.add('container', 'mt45');
    getMainNav.appendChild(navFirstDxDiv);

    var navSecondDxDiv = document.createElement('div');
    navSecondDxDiv.classList.add('navbar-header', 'page-scroll');
    navFirstDxDiv.appendChild(navSecondDxDiv);

    var navThirdDXAnchor = document.createElement('a');
    var anchorTitleContentDX = document.querySelectorAll('.nav-wrapper > #nav > div > .nav-logo-list > div > div')[1].innerText;
    var anchorlinkDX = document.querySelectorAll('.nav-wrapper > #nav > div > .nav-logo-list > div > div')[2].innerText;
    navThirdDXAnchor.setAttribute('class','navbar-brand');
    navThirdDXAnchor.setAttribute('href',anchorlinkDX);
    navThirdDXAnchor.setAttribute('title',anchorTitleContentDX);
    navThirdDXAnchor.setAttribute('aria-label',anchorTitleContentDX);
    navSecondDxDiv.appendChild(navThirdDXAnchor);
    
    var logoPictureSrc = document.querySelector('.nav-wrapper > #nav > div > .nav-logo-list > div > div > picture > img');
    navThirdDXAnchor.appendChild(logoPictureSrc);

    var navSecondContainerDiv = document.createElement('div');
    navSecondContainerDiv.classList.add('header-menu', 'hidden-tab');
    navSecondContainerDiv.style.display = 'block';
    navFirstDxDiv.appendChild(navSecondContainerDiv);

    var getnavUlDXContent = document.querySelector('.nav-wrapper > #nav > div > .nav-logo-list > div > div > ul');
    getnavUlDXContent.classList.add('nav', 'navbar-nav', 'navbar-right', 'pos-right');
    navSecondContainerDiv.appendChild(getnavUlDXContent);

    var searchDX = document.createElement('div');
    searchDX.setAttribute('role','search');
    navFirstDxDiv.appendChild(searchDX);
    searchDX.innerHTML = `
     <div class="search__color">
	<svg class="hidden1">
		<defs>
			<symbol id="icon-search" viewBox="0 0 24 24">
				<title>search</title>
				<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
			</symbol>
			<symbol id="icon-cross" viewBox="0 0 24 24">
				<title>cross</title>
				<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
			</symbol>
		</defs>
	</svg>
	<div class="main-wrap">
	<div class="search-wrap search-icon" style="top: 47px;">
		<button id="btn-search" class="btn1 btn--search" aria-label="Click to search" style="color: rgb(255, 255, 255);">
			<svg class="icon icon--search">
					<use xlink:href="#icon-search"></use>
			</svg>
		</button>
	</div>
	</div>
	<div class="search" aria-label="Site Search" style="width: auto;">
		<div class="search__inner search__inner--up">
			<!--action needs to be attached-->
			<form class="search__form" action="/search.html" method="get">
				<input id="k" class="search__input" name="k" type="search" placeholder="What are you looking for?" autocomplete="off" spellcheck="false" title="Search" aria-label="search text" tabindex="-1">
                               <label for="k" class="none">Search</label>
				<span class="search__info">Hit enter to search or ESC to close</span>
				<!-- <sly data-sly-test="false"><input id="search-categories" type="hidden" name="c" value="" /></sly> -->

			</form>
		</div>
                 <button id="btn-search-close" class="btn1 btn--search-close" aria-label="Close search form" style="color: rgb(255, 255, 255);" tabindex="-1">
			<svg class="icon icon--cross">
				<use xlink:href="#icon-cross"></use>
			</svg>
		</button>
		<div class="search__inner search__inner--down">
			<!-- search related content-->
			<div class="search__related"></div>
		</div>
	</div>

     `;

	  
	  //progressbar Div creation
	  var navProgressBarDX = document.createElement('div');
	  navProgressBarDX.setAttribute('class','progressbar');
	  navProgressBarDX.setAttribute('aria-label','Page' + ' progress' + ' bar');
	  getMainNav.appendChild(navProgressBarDX);
	// creating div inside progressbar 
	  var navProgressBarDXDiv = document.createElement('div');
	  navProgressBarDXDiv.setAttribute('class','width');
	  navProgressBarDX.appendChild(navProgressBarDXDiv);

	  
    // var searchNavDXImg = document.querySelector('.nav-wrapper > #nav > div > p > span ').innerHTML;
    // searchDX.appendChild(searchNavDXImg);

	// Bread-Crumb Code Starts 
	  var breadcrumbDX = document.createElement('div');
	  breadcrumbDX.classList.add('responsivegrid', 'aem-GridColumn', 'aem-GridColumn--default--12');
	  var insideBreadcrumbDX = document.querySelector('.header-wrapper');
	  insideBreadcrumbDX.appendChild(breadcrumbDX);

	  var insideBreadcrumbDXFirstDiv = document.createElement('div');
	  insideBreadcrumbDXFirstDiv.classList.add('aem-Grid', 'aem-Grid--12', 'aem-Grid--default--12');
	  breadcrumbDX.appendChild(insideBreadcrumbDXFirstDiv);

	  var insideBreadcrumbDXSecondDiv = document.createElement('div');
	  insideBreadcrumbDXSecondDiv.classList.add('breadcrumb', 'aem-GridColumn', 'aem-GridColumn--default--12');
	  insideBreadcrumbDXFirstDiv.appendChild(insideBreadcrumbDXSecondDiv);
		// <!-- Breadcrumb Start -->
	  var insideBreadcrumbDXThirdDiv = document.createElement('div');
	  insideBreadcrumbDXThirdDiv.style.backgroundColor = '#0000';
	  insideBreadcrumbDXSecondDiv.appendChild(insideBreadcrumbDXThirdDiv);
	  insideBreadcrumbDXThirdDiv.innerHTML = `
   			<script type="application/ld+json">
			   {
			  "@context": "https://schema.org",
			  "@type": "BreadcrumbList",
			  "itemListElement": [
			    {
			      "@type": "ListItem",
			      "position": 1,
			      "item": {
			        "@id": "https://www.infosys.com/services.html",
			        "name": "Services"
			      }
			    },
			    {
			      "@type": "ListItem",
			      "position": 2,
			      "item": {
			        "@id": "https://www.infosys.com/services/digital-experience.html",
			        "name": "Digital Experience"
			      }
			    }
			  ]
			} 
			   </script>
   		`;

	  var insideDXSectionNav = document.createElement('section');
	  insideDXSectionNav.setAttribute('class','breadcrumb-menu');
	  insideBreadcrumbDXThirdDiv.appendChild(insideDXSectionNav);

	  var insideDXArticleNav = document.createElement('article');
	  insideDXArticleNav.setAttribute('class','container');
	  insideDXSectionNav.appendChild(insideDXArticleNav);

	  var insideDXInsideArticleDIV = document.createElement('div');
	  insideDXInsideArticleDIV.setAttribute('class','row');
	  insideDXArticleNav.appendChild(insideDXInsideArticleDIV);

	  var insideDXInsideArticleSecndDIV = document.createElement('div');
	  insideDXInsideArticleSecndDIV.classList.add('col-md-12', 'col-sm-12', 'col-xs-12');
	  insideDXInsideArticleDIV.appendChild(insideDXInsideArticleSecndDIV);

	  var insideDXInsideArticleThirdDIV = document.createElement('div');
	  insideDXInsideArticleThirdDIV.setAttribute('class','listmenu');
	  insideDXInsideArticleThirdDIV.style.zIndex = '9';
	  insideDXInsideArticleSecndDIV.appendChild(insideDXInsideArticleThirdDIV);
	  
	   var insideDXInsideArticlefourthDIV = document.createElement('div');
	  insideDXInsideArticlefourthDIV.setAttribute('class','hero-list');
	  insideDXInsideArticlefourthDIV.classList.add('hero-list1');
	  insideDXInsideArticleThirdDIV.appendChild(insideDXInsideArticlefourthDIV);

	  var insideDXInsideNavMain = document.createElement('nav');
	  insideDXInsideNavMain.setAttribute('aria-label','Breadcrumb');
	  insideDXInsideArticlefourthDIV.appendChild(insideDXInsideNavMain);

	  var insideDXOLDIV = document.createElement('ol');
	  insideDXOLDIV.classList.add('breadcrumb', 'rmv-breadcrum', 'navbar-left', 'hidden-tab');
	  insideDXInsideNavMain.appendChild(insideDXOLDIV);

	var docContentDX = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[0].innerText;
	var docContentNextDx = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[1].innerText;

	var insideDXOLLIDIV = document.createElement('li');
	  insideDXOLLIDIV.classList.add('dropdown', 'mega-dropdown');
	  insideDXOLDIV.appendChild(insideDXOLLIDIV);

	  var insideDXOLLIAnchorONe = document.createElement('a');
	  insideDXOLLIAnchorONe.setAttribute('href', 'javascript:void(0);');
	  insideDXOLLIAnchorONe.classList.add('dropdown-toggle', 'disabled');
	  insideDXOLLIAnchorONe.setAttribute('data-toggle', 'dropdown');
	  insideDXOLLIAnchorONe.setAttribute('aria-expanded', 'false');
	
	  insideDXOLLIAnchorONe.innerHTML = docContentDX + `<i class="fa fa-chevron-circle-down reverseArrow" aria-hidden="true"></i>`;
	   insideDXOLLIDIV.innerHTML = `
   				<ul class="dropdown-menu mega-dropdown-menu row" style="display: none;">
                                    <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
				    	<ul>
	                                   <li class="dropdown-header">            
	                                       <span>
					       </span>
	                                    </li>
                                 <!-- divider class removed due to issue in aboutus page-->
	                                       <li>
	                                          <a title="Enterprise Agile DevOps" href="/services/agile-devops.html">Enterprise Agile DevOps
	                                          </a>
	                                       </li>
	                                       <li>
	                                          <a title="Applied AI" href="/services/applied-ai.html">Applied AI
	                                          </a>
	                                       </li>
					</ul>
 				   </li>
			     </ul>
   					`;
	  
 	 	insideDXOLLIDIV.appendChild(insideDXOLLIAnchorONe);
	  
	  var insideDXOLLISecondDIV = document.createElement('li');
	  insideDXOLLISecondDIV.classList.add('dropdown', 'mega-dropdown');
	  insideDXOLDIV.appendChild(insideDXOLLISecondDIV);

	  var insideDXOLLIAnchorTwo = document.createElement('a');
	  insideDXOLLIAnchorTwo.setAttribute('href', 'javascript:void(0);');
	  insideDXOLLIAnchorTwo.classList.add('dropdown-toggle', 'disabled');
	  insideDXOLLIAnchorTwo.setAttribute('data-toggle', 'dropdown');
	  insideDXOLLIAnchorTwo.setAttribute('aria-expanded', 'false');
	
	  insideDXOLLIAnchorTwo.innerHTML = docContentNextDx + `<i class="fa fa-chevron-circle-down reverseArrow" aria-hidden="true"></i>`;
	   insideDXOLLISecondDIV.innerHTML = `
					<ul class="dropdown-menu mega-dropdown-menu row" style="display: none;">
                                          <li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                             <ul>
                                                  <li>
                                                      <a title="Digital Experience Home" href="/services/digital-experience.html">Digital Experience Home</a>
                                                   </li>
                                                   <li>
                                                      <a title="Overview" href="/services/digital-experience/overview.html">Overview</a>
                                                   </li>
	  					</ul>
					    </li>
	 				</ul>
      					`;
	  insideDXOLLISecondDIV.appendChild(insideDXOLLIAnchorTwo);

	  //second ol for breadcrumb nav
	  var insideDXOLSecondDIV = document.createElement('ol');
	  insideDXOLSecondDIV.classList.add('navbar-right', 'list-inline', 'hidden-list', 'sticky-icons', 'visible-list');
	  insideDXInsideArticlefourthDIV.appendChild(insideDXOLSecondDIV);

	  
	  var insideDXOLLISecondDIV = document.createElement('li');
	  insideDXOLLISecondDIV.classList.add('trigger-share');
	  insideDXOLSecondDIV.appendChild(insideDXOLLISecondDIV);
	  
	  var insideDXOLLIAnchorSecond = document.createElement('a');
	  insideDXOLLIAnchorSecond.setAttribute('href', 'javascript:void(0);');
	  insideDXOLLIAnchorSecond.classList.add('aria-label', 'Share');
	  insideDXOLLIAnchorSecond.setAttribute('aria-expanded', 'false');
	  insideDXOLLISecondDIV.appendChild(insideDXOLLIAnchorSecond);

	  var insideDXImgElemSrcOne = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[4].innerText;

	  var insideDXImgElem = document.createElement('img');
	  insideDXImgElem.setAttribute('src',insideDXImgElemSrcOne);
	  insideDXImgElem.setAttribute('alt','Share');
	  insideDXImgElem.setAttribute('class','share-icon');
	  insideDXOLLIAnchorSecond.appendChild(insideDXImgElem);
	  
	   var insideDXULLIDIVOne = document.createElement('ul');
	  insideDXULLIDIVOne.classList.add('social-share', 'hidden-list', 'list-inline');
	  insideDXULLIDIVOne.style.opacity = '1';
	  insideDXOLLISecondDIV.appendChild(insideDXULLIDIVOne);
	  insideDXULLIDIVOne.innerHTML =  `
				<li>
					<a href="javascript:void(0)" onclick="twitterShare(window.location.href, encodeURIComponent(document.title));" class="share" aria-label="ShareByTwitter"> 
						<i class="fa fa-twitter" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)" onclick="var host=window.location.href;
					var fbUrl = 'http://www.facebook.com/sharer/sharer.php?s=100&amp;u='.concat(host);
					var width=500, height=500;
					var left = (window.screen.width / 2) - ((width / 2) + 10);
		    		var top = (window.screen.height / 2) - ((height / 2) + 50);
					popUp = window.open(fbUrl,'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +'');
					popUp.focus();
					return false" class="share" aria-label="ShareByFaceBook">
					<i class="fa fa-facebook" aria-hidden="true"></i>
					</a>
				</li>
				<li>
					<a href="javascript:void(0)" onclick="var host=window.location.href; var title = document.title;
						var liUrl = 'http://www.linkedin.com/shareArticle?mini=true&amp;url='.concat(host);
						var width=500, height=500;
		
		                var left = (window.screen.width / 2) - ((width / 2) + 10);
		    			var top = (window.screen.height / 2) - ((height / 2) + 50);
						popUp = window.open(encodeURI(liUrl),'popupwindow','scrollbars=no,width='+ width +',height='+ height +',top='+ top +', left='+ left +'');
						popUp.focus();
						return false" class="share" aria-label="ShareByLinkedIn">
						<i class="fa fa-linkedin" aria-hidden="true"></i>
					</a>
				</li>
		
			</ul>
		 		  `; 

	  		
	  var insideDXOLLIThirdDIV = document.createElement('li');
	  insideDXOLLIThirdDIV.classList.add('hidden-tab');
	  insideDXOLLIThirdDIV.setAttribute('id','like-what-you-see');
	  insideDXOLSecondDIV.appendChild(insideDXOLLIThirdDIV);
	  
	  var dxBreadcrumbContentDIVThirdone = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[2].innerText;
	  var dxBreadcrumbContentDIVThirdTwo = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[3].innerText;
	  
	  var insideDXOLLIThirdspan = document.createElement('span');
	  insideDXOLLIThirdspan.classList.add('block', 'career-block');
	  insideDXOLLIThirdDIV.appendChild(insideDXOLLIThirdspan);
	  insideDXOLLIThirdspan.innerHTML = dxBreadcrumbContentDIVThirdone;
	  
	  var insideDXOLLIAnchorThird = document.createElement('a');
	  insideDXOLLIAnchorThird.setAttribute('href', '#rfs');
	  insideDXOLLIAnchorThird.classList.add('small', 'scrollto-target');
	  insideDXOLLIAnchorThird.setAttribute('aria-label', 'Let'+ ' us' + ' talk');
	  insideDXOLLIThirdDIV.appendChild(insideDXOLLIAnchorThird);
	  insideDXOLLIAnchorThird.append(dxBreadcrumbContentDIVThirdTwo);	
	  
	  var insideDXImgElemSrcTwo = document.querySelectorAll('.nav-wrapper > #nav > div > .dx-breadcrumb > div > div')[5].innerText;
	  
	  var insideDXImgElemTwo = document.createElement('img');
	  insideDXImgElemTwo.setAttribute('src',insideDXImgElemSrcTwo);
	  insideDXImgElemTwo.setAttribute('alt','');
	  insideDXImgElemTwo.setAttribute('class','arrow-right-header');
	  insideDXOLLIAnchorThird.appendChild(insideDXImgElemTwo);

	  var insideDXParaa = document.createElement('p');
	  insideDXParaa.classList.add('hidden-list', 'strip-head', 'hidden-tab', 'visible-list');
	  insideDXInsideArticlefourthDIV.appendChild(insideDXParaa);

	  //keep this next two lines at last due to appending entire nav into under header from div wrapper
	  document.querySelector('.header-wrapper').append(document.querySelector('#nav'));
	  document.querySelector('.header.block').style.display = 'none';

	  // hamburger appending starts
	  var insideDXHamburgerDIV = document.createElement('div');
	  insideDXHamburgerDIV.classList.add('burger-search-wrapper', 'navbar-fixed-top');
	  document.querySelector('.header-wrapper').append(insideDXHamburgerDIV);

	  var insideDXHamburgerSecondDIV = document.createElement('div');
	  insideDXHamburgerSecondDIV.classList.add('container');
	  insideDXHamburgerDIV.appendChild(insideDXHamburgerSecondDIV);
  
  	 var insideDXHamburgermainNav = document.createElement('nav');
 	 insideDXHamburgermainNav.setAttribute('class','hamburger-menu');
  	 insideDXHamburgermainNav.setAttribute('role','main' +' nav');
	 insideDXHamburgermainNav.setAttribute('aria-label','open' +' menu');
	 insideDXHamburgerSecondDIV.appendChild(insideDXHamburgermainNav);

	  var insideDXHamburgerThirdDIV = document.createElement('div');
	  insideDXHamburgerThirdDIV.classList.add('menu-bg');
	  insideDXHamburgerThirdDIV.style.marginTop = '35px';
	  insideDXHamburgermainNav.appendChild(insideDXHamburgerThirdDIV);

	  var insideDXHamburgerFourthDIV = document.createElement('div');
	  insideDXHamburgerFourthDIV.classList.add('circle');
	  insideDXHamburgermainNav.appendChild(insideDXHamburgerFourthDIV);

	  var insideDXHamburgerFifthAnchor = document.createElement('a');
	  insideDXHamburgerFifthAnchor.setAttribute('href','javascript:void(0);');
	  insideDXHamburgerFifthAnchor.setAttribute('class','burger');
	  insideDXHamburgerFifthAnchor.setAttribute('aria-label', 'open' +' menu');
	  insideDXHamburgerFifthAnchor.setAttribute('aria-haspopup', 'false');
	  insideDXHamburgerFifthAnchor.setAttribute('aria-expanded', 'false');
	  insideDXHamburgerFifthAnchor.style.marginTop = '35px';
	  insideDXHamburgermainNav.appendChild(insideDXHamburgerFifthAnchor);

	  var insideDXHamburgerSixthDIV = document.createElement('div');
	  insideDXHamburgerSixthDIV.classList.add('icon-bar1');
	  insideDXHamburgerFifthAnchor.appendChild(insideDXHamburgerSixthDIV);

	  var insideDXHamburgerSeventhDIV = document.createElement('div');
	  insideDXHamburgerSeventhDIV.classList.add('icon-bar2');
	  insideDXHamburgerFifthAnchor.appendChild(insideDXHamburgerSeventhDIV);

	  var insideDXHamburgereigthDIV = document.createElement('div');
	  insideDXHamburgereigthDIV.classList.add('icon-bar3');
	  insideDXHamburgerFifthAnchor.appendChild(insideDXHamburgereigthDIV);

	  var insideDXHamburgerMenuFirstDIV = document.createElement('div');
	  insideDXHamburgerMenuFirstDIV.classList.add('menu');
	  insideDXHamburgerMenuFirstDIV.style.display = 'none';
	  insideDXHamburgermainNav.appendChild(insideDXHamburgerMenuFirstDIV);
	  
	  var insideDXHamburgerMenuSecondDIV = document.createElement('div');
	  insideDXHamburgerMenuSecondDIV.classList.add('fix-menu', 'hidden-sm', 'hidden-xs', 'col-md-9', 'col-sm-12', 'col-xs-12', 'p0');
	  insideDXHamburgerMenuFirstDIV.appendChild(insideDXHamburgerMenuSecondDIV); 
	  insideDXHamburgerMenuSecondDIV.innerHTML = `
   			<!-- <div class="hidden">
                        <div class="col-md-12 col-sm-12 col-xs-12 automate h-50vh">
                            <div class="top_menu_img_wrapper"> <img
                                    src="/content/dam/infosys-web/en/global-resource/18/banner/being-resilient-lead-menu.jpg"
                                    class="being-resilient" alt="Being Resilient. That's Live Enterprise."> </div>
                            <div class="row">
                                <div class="top_menu_cont_wrapper">
                                    <div class="col-md-6 col-sm-12 col-xs-12"> <a
                                            href="/content/infosys-web/en/navigate-your-next/being-resilient.html"
                                            title="Being Resilient. That's Live Enterprise.">
                                            <h2 class="head-txt mt100">Being Resilient. That's Live Enterprise.</h2>
                                        </a> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-12 col-xs-12 automate bg-img-pos h-50vh"> <a
                                href="/navigate-your-next/digital-capabilities.html" title="Digital Core Capabilities">
                                <h2 class="head-txt">Digital Core Capabilities</h2>
                            </a> </div>
                        <div class="col-md-3 col-sm-12 col-xs-12 innovate bg-img-pos h-50vh"> <a
                                href="/navigate-your-next/digital-operating-models.html"
                                title="Digital Operating Models">
                                <h2 class="head-txt">Digital Operating Models</h2>
                            </a> </div>
                        <div class="col-md-3 col-sm-12 col-xs-12 learn bg-img-pos h-50vh"> <a
                                href="/navigate-your-next/talent-transformations.html"
                                title="Empowering Talent Transformations">
                                <h2 class="head-txt">Empowering Talent Transformations</h2>
                            </a> </div>
                        <div class="col-md-3 col-sm-12 col-xs-12 tales-transformation bg-img-pos h-50vh">
                            <a href="/content/infosys-web/en/navigate-your-next/tales-of-transformation.html"
                                title="Tales of Transformation">
                                <h2 class="head-txt">Tales of Transformation</h2>
                            </a>
                        </div>
                    </div> -->
   			`;
		// <!-- Side Menu Title -->
			
 	  var insideDXHamburgerMenuThirdDIV = document.createElement('div');
	  insideDXHamburgerMenuThirdDIV.classList.add('col-md-3', 'col-sm-12', 'col-xs-12', 'menuItems');
	  insideDXHamburgerMenuFirstDIV.appendChild(insideDXHamburgerMenuThirdDIV); 

	  var insideDXHamburgerMenuFourthAnchor = document.createElement('a');
	  insideDXHamburgerMenuFourthAnchor.setAttribute('href','/');
	  insideDXHamburgerMenuFourthAnchor.setAttribute('title','Go' + ' to' +' Infosys' +' Home');
	  insideDXHamburgerMenuFourthAnchor.setAttribute('aria-label','Go' + ' to' +' Infosys' +' Home');
	  insideDXHamburgerMenuThirdDIV.appendChild(insideDXHamburgerMenuFourthAnchor);

	  var insideDXHamburgerMenuFifthImgsrc = document.querySelectorAll('#nav > div > .dx-hamburger > div > div')[0].innerText;

	  var insideDXHamburgerMenuFifthImg = document.createElement('img');
	  insideDXHamburgerMenuFifthImg.classList.add('img-responsive', 'logo-inner');
	  insideDXHamburgerMenuFifthImg.setAttribute('alt','Infosys');
	  insideDXHamburgerMenuFifthImg.setAttribute('src',insideDXHamburgerMenuFifthImgsrc);
	  insideDXHamburgerMenuFourthAnchor.appendChild(insideDXHamburgerMenuFifthImg);   

	  var DXHamburgerMenucontentOne = document.querySelectorAll('#nav > div > .dx-hamburger > div > div')[1].innerText;
	  var DXHamburgerMenucontentTwo = document.querySelectorAll('#nav > div > .dx-hamburger > div > div')[2].innerText;
	  var DXHamburgerMenucontentThree = document.querySelectorAll('#nav > div > .dx-hamburger > div > div')[3].innerText;

 	  var insideDXHamburgerMenuForthUL = document.createElement('ul');
	  insideDXHamburgerMenuForthUL.classList.add('list-unstyled');
	  insideDXHamburgerMenuThirdDIV.appendChild(insideDXHamburgerMenuForthUL);
	  
 	  var insideDXHamburgerMenuFifthLI = document.createElement('li');
	  insideDXHamburgerMenuFifthLI.setAttribute('title',DXHamburgerMenucontentOne);
	  insideDXHamburgerMenuForthUL.appendChild(insideDXHamburgerMenuFifthLI);

	  var insideDXHamburgerMenuSixthAnchor = document.createElement('a');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('href','javascript:void(0);');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('title',DXHamburgerMenucontentOne);
	  insideDXHamburgerMenuSixthAnchor.setAttribute('class','nyn');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('target','_self');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('aria-label', 'Hover'+' to' +' show' + ' submenu');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('aria-haspopup', 'false');
	  insideDXHamburgerMenuSixthAnchor.setAttribute('aria-expanded', 'false');
	  insideDXHamburgerMenuFifthLI.appendChild(insideDXHamburgerMenuSixthAnchor);
	  insideDXHamburgerMenuSixthAnchor.innerHTML = DXHamburgerMenucontentOne + `<span class="un-line hidden-sm hidden-xs hidden-tab"></span>`;
			//--
	  var insideDXHamburgerMenuSixthLI = document.createElement('li');
	  insideDXHamburgerMenuSixthLI.setAttribute('title',DXHamburgerMenucontentTwo);
	  insideDXHamburgerMenuForthUL.appendChild(insideDXHamburgerMenuSixthLI);

	  var insideDXHamburgerMenuSeventhAnchor = document.createElement('a');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('href','javascript:void(0);');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('title',DXHamburgerMenucontentTwo);
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('class','industries');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('target','_self');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('aria-label', 'Hover'+' to' +' show' + ' submenu');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('aria-haspopup', 'false');
	  insideDXHamburgerMenuSeventhAnchor.setAttribute('aria-expanded', 'false');
	  insideDXHamburgerMenuSixthLI.appendChild(insideDXHamburgerMenuSeventhAnchor);
	  insideDXHamburgerMenuSeventhAnchor.innerHTML = DXHamburgerMenucontentTwo + `<span class="un-line hidden-sm hidden-xs hidden-tab"></span>`;
		// ----	
	  var insideDXHamburgerMenuSeventhLI = document.createElement('li');
	  insideDXHamburgerMenuSeventhLI.setAttribute('title',DXHamburgerMenucontentThree);
	  insideDXHamburgerMenuForthUL.appendChild(insideDXHamburgerMenuSeventhLI);

	  var insideDXHamburgerMenueigthAnchor = document.createElement('a');
	  insideDXHamburgerMenueigthAnchor.setAttribute('href','javascript:void(0);');
	  insideDXHamburgerMenueigthAnchor.setAttribute('title',DXHamburgerMenucontentThree);
	  insideDXHamburgerMenueigthAnchor.setAttribute('class','services');
	  insideDXHamburgerMenueigthAnchor.setAttribute('target','_self');
	  insideDXHamburgerMenuSeventhLI.appendChild(insideDXHamburgerMenueigthAnchor);
	  insideDXHamburgerMenueigthAnchor.innerHTML = DXHamburgerMenucontentThree + `<span class="un-line hidden-sm hidden-xs hidden-tab"></span>`;

	  
  }
}































//header.js old code commented starts here:: below

// import { readBlockConfig, decorateIcons } from '../../scripts/scripts.js';

// /**
//  * collapses all open nav sections
//  * @param {Element} sections The container element
//  */

// function collapseAllNavSections(sections) {
//   sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', 'false');
//   });
// }

// /**
//  * decorates the header, mainly the nav
//  * @param {Element} block The header block element
//  */

// export default async function decorate(block) {
//   const cfg = readBlockConfig(block);
//   block.textContent = '';

//   // fetch nav content
//   const navPath = cfg.nav || '/nav';
//   const resp = await fetch(`${navPath}.plain.html`);
//   if (resp.ok) {
//     const html = await resp.text();

//     // decorate nav DOM
//     const nav = document.createElement('nav');
//     nav.innerHTML = html;
//     decorateIcons(nav);

//     const classes = ['brand', 'sections', 'tools'];
//     classes.forEach((e, j) => {
//       const section = nav.children[j];
//       if (section) section.classList.add(`nav-${e}`);
//     });

//     const navSections = [...nav.children][1];
//     if (navSections) {
//       navSections.querySelectorAll(':scope > ul > li').forEach((navSection) => {
//         if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
//         navSection.addEventListener('click', () => {
//           const expanded = navSection.getAttribute('aria-expanded') === 'true';
//           collapseAllNavSections(navSections);
//           navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//         });
//       });
//     }

//     // hamburger for mobile
//     const hamburger = document.createElement('div');
//     hamburger.classList.add('nav-hamburger');
//     hamburger.innerHTML = '<div class="nav-hamburger-icon"></div>';
//     hamburger.addEventListener('click', () => {
//       const expanded = nav.getAttribute('aria-expanded') === 'true';
//       document.body.style.overflowY = expanded ? '' : 'hidden';
//       nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
//     });
//     nav.prepend(hamburger);
//     nav.setAttribute('aria-expanded', 'false');
//     decorateIcons(nav);
//     block.append(nav);
//   }
// }

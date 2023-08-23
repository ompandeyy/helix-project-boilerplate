import { readBlockConfig, decorateIcons } from "../../scripts/scripts.js";
/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */


export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.innerHTML = '';

  // fetch nav content
  const navPath = cfg.nav || "/nav";
  const resp = await fetch(`${navPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();


    // decorate nav DOM
    const nav = document.createElement("nav");
    nav.innerHTML = html;
    decorateIcons(nav);
	let h = getData(nav)
	nav.innerHTML = h
    block.append(nav);
  }
}

const getData = (nav) => {
	nav.classList.add(
		"navbar","navbar-default","navbar-fixed-top","scrollbg-show"
	);
	let navbar = nav.querySelectorAll(".dx-navbar>div>div")
	let breadcrumb = nav.querySelectorAll(".dx-breadcrumb>div>div")
	let hamburger = nav.querySelectorAll(".dx-hamburger>div>div")
	return `<nav class="navbar navbar-default navbar-fixed-top scrollbg-show" role="navigation">
				<div class="container mt45">
					${getNavbar(navbar,nav)}
				</div>
				<div class="progressbar" aria-label="Page progress bar">
					<div class="width" style="width: 0%;"></div>
				</div>
			</nav>
			${getBreadcrumb(breadcrumb,nav)}
			${getHamburger(hamburger,nav)}`
}

const getNavbar = (divData,nav) => {
	let data = getNavbarData(divData)
	let navList = ''
	data.navList.forEach((e)=> {
		navList+='<li> <a href="'+e.navhref+'" title="'+e.navtext+'">'+e.navtext+'</a> </li>'
	})
	return `<div class="navbar-header page-scroll">
				<a class="navbar-brand" href="${data.navLogo.logohref}" title="Go to Infosys Home" aria-label="Go to Infosys Home"> 
					<img src="${data.navLogo.logoimg}" class="" alt="logo">
				</a>
			</div>
			<div class="header-menu hidden-tab" style="display: block;">
				<ul class="nav navbar-nav navbar-right pos-right">
					${navList}
				</ul>
			</div>
			<div role="search">
				<div class="search__color">
					<svg class="hidden1">
						<defs>
							<symbol id="icon-search" viewBox="0 0 24 24">
								<title>search</title>
								<path
									d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
								</path>
							</symbol>
							<symbol id="icon-cross" viewBox="0 0 24 24">
								<title>cross</title>
								<path
									d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
								</path>
							</symbol>
						</defs>
					</svg>
					<div class="main-wrap">
						<div class="search-wrap search-icon" style="top: 47px;">
							<button id="btn-search" class="btn1 btn--search" aria-label="Click to search"
								style="color: rgb(255, 255, 255);">
								<svg class="icon icon--search">
									<use xlink:href="#icon-search"></use>
								</svg>
							</button>
						</div>
					</div>
					<div class="search" aria-label="Site Search">
						<div class="search__inner search__inner--up">
							<!--action needs to be attached-->
							<form class="search__form" action="/search.html" method="get">
								<input id="k" class="search__input" name="k" type="search"
									placeholder="What are you looking for?" autocomplete="off" spellcheck="false"
									title="Search" aria-label="search text" tabindex="-1">
								<label for="k" class="none">Search</label>
								<span class="search__info">Hit enter to search or ESC to close</span>
								<!-- <sly data-sly-test="false"><input id="search-categories" type="hidden" name="c" value="" /></sly> -->

							</form>
						</div>
						<button id="btn-search-close" class="btn1 btn--search-close" aria-label="Close search form"
							tabindex="-1" style="color: rgb(255, 255, 255);">
							<svg class="icon icon--cross">
								<use xlink:href="#icon-cross"></use>
							</svg>
						</button>
						<div class="search__inner search__inner--down">
							<!-- search related content-->
							<div class="search__related"></div>
						</div>
					</div>
				</div>
			</div>`
}
const getNavbarData = (divData) => {
	let data = {navLogo:{},navList:[]}
	divData.forEach((element,index) => {
		if(index==0){
			data.navLogo = {
				'logohref':element.querySelector("a").href,
				'logoimg':element.querySelector("picture").children[0].srcset
			}
		}else{
			data.navList = [...data.navList,{
				'navhref':element.querySelector("a").href,
				'navtext':element.querySelector("a").innerHTML
			}]
		}
	});
	console.log(data)
	return data
}

const getBreadcrumb = (divData,nav) => {
	let data = getBreadcrumbData(divData)
	return `<div class="breadcrumb aem-GridColumn aem-GridColumn--default--12"><!-- Breadcrumb Start -->
				<div style="background-color:#0000">
					<section class="breadcrumb-menu">
						<article class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="listmenu" style="z-index: 9;">
										<div class="hero-list" style="display: block;">
											<nav aria-label="Breadcrumb">
												<ol class="breadcrumb rmv-breadcrum navbar-left hidden-tab">
													<li class="dropdown mega-dropdown">
														<a href="javascript:void(0);" class="dropdown-toggle disabled"
															data-toggle="dropdown">
															Services
															<i class="fa fa-chevron-circle-down reverseArrow"
																aria-hidden="true"></i>
														</a>
														<ul class="dropdown-menu mega-dropdown-menu row">
															<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
																<ul>
																	<li class="dropdown-header">
																		<span>
																		</span>
																	</li>
																	<!-- divider class removed due to issue in aboutus page-->
																	<li>
																		<a title="Enterprise Agile DevOps"
																			href="/services/agile-devops.html">Enterprise Agile
																			DevOps
																		</a>
																	</li>
																	<li>
																		<a title="Applied AI"
																			href="/services/applied-ai.html">Applied AI
																		</a>
																	</li>
																	<li>
																		<a title="API Economy &amp; Microservices"
																			href="/services/api-economy.html">API Economy
																			&amp; Microservices
																		</a>
																	</li>
																	<li>
																		<a title="Application Development and Maintenance "
																			href="/services/application-development-maintenance.html">Application
																			Development and
																			Maintenance
																		</a>
																	</li>
																	<li>
																		<a title="Application Modernization"
																			href="/services/application-modernization.html">Application
																			Modernization
																		</a>
																	</li>
																	<li>
																		<a title="Blockchain"
																			href="/services/blockchain.html">Blockchain
																		</a>
																	</li>
																	<li>
																		<a title="Cloud - Infosys Cobalt"
																			href="/services/cloud-cobalt.html">Cloud - Infosys
																			Cobalt
																		</a>
																	</li>
																	<li>
																		<a title="Consulting Services"
																			href="/services/consulting.html">Consulting Services
																		</a>
																	</li>
																	<li>
																		<a title="Cyber Security"
																			href="/services/cyber-security.html">Cyber Security
																		</a>
																	</li>
																</ul>
															</li>
															<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
																<ul>
																	<li class="dropdown-header">
																		<span>
																		</span>
																	</li>
																	<!-- divider class removed due to issue in aboutus page-->
																	<li>
																		<a title="Data Analytics and AI"
																			href="/services/data-analytics.html">Data Analytics and
																			AI
																		</a>
																	</li>
																	<li>
																		<a title="Digital Commerce"
																			href="/services/digital-commerce.html">Digital Commerce
																		</a>
																	</li>
																	<li>
																		<a title="Digital Interactions"
																			href="/services/digital-interaction.html">Digital
																			Interactions
																		</a>
																	</li>
																	<li>
																		<a title="Digital Marketing"
																			href="/services/digital-marketing.html">Digital
																			Marketing
																		</a>
																	</li>

																	<li>
																		<a title="Digital Experience"
																			href="/services/digital-experience.html">Digital
																			Experience
																		</a>
																	</li>

																	<li>
																		<a title="Digital Process Automation"
																			href="/services/digital-process-automation.html">Digital
																			Process Automation
																		</a>
																	</li>

																	<li>
																		<a title="Digital Supply Chain"
																			href="/services/digital-supply-chain.html">Digital
																			Supply
																			Chain
																		</a>
																	</li>

																	<li>
																		<a title="Digital Workplace Services"
																			href="/services/digital-workplace-services.html">Digital
																			Workplace Services
																		</a>
																	</li>

																	<li>
																		<a title="Infosys Metaverse Foundry"
																			href="/services/metaverse.html">Infosys Metaverse
																			Foundry
																		</a>
																	</li>

																	<li>
																		<a title="Infosys Generative AI Labs"
																			href="/services/generative-ai.html">Infosys
																			Generative AI Labs
																		</a>
																	</li>

																	<li>
																		<a title="Infosys Topaz"
																			href="/services/data-ai-topaz.html">Infosys Topaz
																		</a>
																	</li>

																</ul>
															</li>
															<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
																<ul>
																	<li class="dropdown-header">
																		<span>
																		</span>
																	</li>
																	<!-- divider class removed due to issue in aboutus page-->
																	<li>
																		<a title="Energy Transition"
																			href="/services/energy-transition.html">Energy
																			Transition
																		</a>
																	</li>
																	<li>
																		<a title="Engineering Services"
																			href="/services/engineering-services.html">Engineering
																			Services
																		</a>
																	</li>
																	<li>
																		<a title="Incubating Emerging Offerings"
																			href="/services/incubating-emerging-technologies.html">Incubating
																			Emerging Offerings
																		</a>
																	</li>

																	<li>
																		<a title="Testing"
																			href="/services/validation-solutions.html">Testing
																		</a>
																	</li>

																	<li>
																		<a title="Microsoft Business Application Services"
																			href="/services/microsoft-dynamics.html">Microsoft
																			Business Application Services
																		</a>
																	</li>

																	<li>
																		<a title="Microsoft Cloud Business"
																			href="/services/microsoft-cloud-business.html">Microsoft
																			Cloud Business
																		</a>
																	</li>

																	<li>
																		<a title="Oracle" href="/services/oracle.html">Oracle
																		</a>
																	</li>

																	<li>
																		<a title="Salesforce"
																			href="/services/salesforce.html">Salesforce
																		</a>
																	</li>

																	<li>
																		<a title="SAP" href="/services/sap.html">SAP
																		</a>
																	</li>

																	<li>
																		<a title="Service Experience Transformation"
																			href="/services/experience-transformation.html">Service
																			Experience Transformation
																		</a>
																	</li>

																	<li>
																		<a title="Workplace Transformation"
																			href="/services/microsoft-cloud-business/offerings/digital-workplace-services.html">Workplace
																			Transformation
																		</a>
																	</li>

																</ul>
															</li>

														</ul>
													</li>
													<li class="dropdown mega-dropdown">
														<a href="javascript:void(0);" class="dropdown-toggle disabled"
															data-toggle="dropdown" aria-current="page">
															Digital Experience
															<i class="fa fa-chevron-circle-down reverseArrow"
																aria-hidden="true"></i>
														</a>
														<ul class="dropdown-menu mega-dropdown-menu row" style="display: none;">
															<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
																<ul>
																	<li>
																		<a title="Digital Experience Home"
																			href="/services/digital-experience.html">Digital
																			Experience Home</a>
																	</li>
																	<li>
																		<a title="Overview"
																			href="/services/digital-experience/overview.html">Overview</a>
																	</li>

																	<li>
																		<a title="Success Stories"
																			href="/services/digital-experience/case-studies.html">Success
																			Stories</a>
																	</li>
																	<li>
																		<a title="Insights"
																			href="/services/digital-experience/insights.html">Insights</a>
																	</li>
																	<li>
																		<a title="Offerings"
																			href="/services/digital-experience.html#our_offerings_title">Offerings</a>
																	</li>
																</ul>
															</li>
															<li class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
																<ul>
																	<li class="dropdown-header">
																		<a title="Services"
																			href="/services/digital-experience.html">
																			Services
																		</a>
																	</li>
																	<li class="divider"></li>
																	<li>
																		<a title="Digital Marketing"
																			href="/services/digital-experience/offerings/digital-marketing.html">Digital
																			Marketing</a>
																	</li>
																	<li>
																		<a title="Digital Commerce"
																			href="/services/digital-experience/offerings/digital-commerce.html">Digital
																			Commerce</a>
																	</li>
																	<li>
																		<a title="Digital Interactions"
																			href="/services/digital-experience/offerings/digital-interactions.html">Digital
																			Interactions</a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ol>
											</nav>
											<ol class="navbar-right list-inline hidden-list sticky-icons">
												<li class="trigger-share">
													<a href="javascript:void(0);" aria-label="Share" aria-expanded="false">
														<img src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/background-image/share.svg"
															alt="Share" class="share-icon">
													</a>
													<ul class="social-share hidden-list list-inline" style="opacity: 1;">
														<li>
															<a href="javascript:void(0)"
																onclick="twitterShare(window.location.href, encodeURIComponent(document.title));"
																class="share" aria-label="ShareByTwitter">
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
												</li>
												<li class="hidden-tab" id="like-what-you-see">
													<span class="block career-block">Like what you see?</span>
													<a class="small scrollto-target" href="#rfs" aria-label="Let us talk"> Let's
														talk <img
															src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/background-image/arrow-right.svg"
															class="arrow-right-header" alt=""></a>
												</li>
											</ol>
											<p class="hidden-list strip-head hidden-tab">
											</p>
										</div>
									</div>
								</div>
							</div>
						</article>
					</section>
				</div>
				<!-- Breadcrumb End -->
			</div>`
}
const getBreadcrumbData = (divData) => {
	let data = {}
	divData.forEach((element,index) => {
		let key = element.querySelector("p").innerHTML
		let alllinks = []
		element.querySelectorAll("ul>li").forEach((e)=>{
			alllinks = [...alllinks,{
				'link':e.querySelector("a").href,
				'linktext':e.querySelector("a").innerHTML
			}]
		})
		data[key]=alllinks
	});
	console.log(data)
	return data
}

const getHamburger = (divData,nav) => {
	let data = getHamburgerData(divData)
	return `<div class="experiencefragment aem-GridColumn aem-GridColumn--default--12">
				<div class="xf-content-height">
				<div class="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
					<div class="freeflowhtml aem-GridColumn aem-GridColumn--default--12">
					<!-- Burger Menu START -->
					<div class="burger-search-wrapper navbar-fixed-top">
						<div class="container">
						<nav class="hamburger-menu" role="main nav" aria-label="open menu">
							<div class="menu-bg" style="margin-top: 35px;"></div>
							<div class="circle" style="opacity: 0; visibility: hidden;"></div>
							<a href="javascript:void(0);" class="burger" aria-label="open menu" aria-haspopup="false"
							aria-expanded="false" style="margin-top: 35px;">
							<div class="icon-bar1"></div>
							<div class="icon-bar2" style="display: block;"></div>
							<div class="icon-bar3"></div>
							</a>
							<div class="menu" style="display: none;">
							<div class="fix-menu hidden-sm hidden-xs col-md-9 col-sm-12 col-xs-12 p0">
								<!-- <div class="hidden">
									<div class="col-md-12 col-sm-12 col-xs-12 automate h-50vh">
										<div class="top_menu_img_wrapper"> <img
												src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/being-resilient-lead-menu.jpg"
												class="being-resilient" alt="Being Resilient. That's Live Enterprise."> </div>
										<div class="row">
											<div class="top_menu_cont_wrapper">
												<div class="col-md-6 col-sm-12 col-xs-12"> <a
														href="https://www.infosys.com/content/infosys-web/en/navigate-your-next/being-resilient.html"
														title="Being Resilient. That's Live Enterprise.">
														<h2 class="head-txt mt100">Being Resilient. That's Live Enterprise.</h2>
													</a> </div>
											</div>
										</div>
									</div>
									<div class="col-md-3 col-sm-12 col-xs-12 automate bg-img-pos h-50vh"> <a
											href="https://www.infosys.com/navigate-your-next/digital-capabilities.html" title="Digital Core Capabilities">
											<h2 class="head-txt">Digital Core Capabilities</h2>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12 innovate bg-img-pos h-50vh"> <a
											href="https://www.infosys.com/navigate-your-next/digital-operating-models.html"
											title="Digital Operating Models">
											<h2 class="head-txt">Digital Operating Models</h2>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12 learn bg-img-pos h-50vh"> <a
											href="https://www.infosys.com/navigate-your-next/talent-transformations.html"
											title="Empowering Talent Transformations">
											<h2 class="head-txt">Empowering Talent Transformations</h2>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12 tales-transformation bg-img-pos h-50vh">
										<a href="https://www.infosys.com/content/infosys-web/en/navigate-your-next/tales-of-transformation.html"
											title="Tales of Transformation">
											<h2 class="head-txt">Tales of Transformation</h2>
										</a>
									</div>
								</div> -->
							</div>
							<!-- Side Menu Title -->
							<div class="col-md-3 col-sm-12 col-xs-12 menuItems"> <a href="/" title="Go to Infosys Home"
								aria-label="Go to Infosys Home"> <img src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/logo.svg"
									alt="Infosys" class="img-responsive logo-inner"> </a>
								<ul class="list-unstyled">
								<li title="Navigate your next"> <a href="javascript:void(0);" title="Navigate your next" class="nyn"
									target="_self" aria-label="Hover to show submenu" aria-haspopup="false"
									aria-expanded="false">Navigate
									your next <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a> </li>
								<li title="Industries"> <a href="javascript:void(0);" title="Industries" class="industries"
									target="_self" aria-label="Hover to show submenu" aria-haspopup="false"
									aria-expanded="false">Industries <span class="un-line hidden-sm hidden-xs hidden-tab"></span>
									</a> </li>
								<li title="Services"> <a href="javascript:void(0);" title="Services" class="services"
									target="_self">Services <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a> </li>
								<li title="Platforms"> <a href="javascript:void(0);" title="Platforms" class="platforms"
									target="_self" aria-label="Hover to show submenu" aria-haspopup="false"
									aria-expanded="false">Platforms <span class="un-line hidden-sm hidden-xs hidden-tab"></span>
									</a> </li>
								<li title="Infosys Living Labs"> <a href="https://living-labs.infosys.com/"
									title="Infosys Living Labs" class="hover-menu-hide line_ht_1" target="_blank"
									aria-label="Go to Infosys Living Labs site" aria-haspopup="false" aria-expanded="false"
									rel="noopener noreferrer">Infosys Living Labs<span
										class="un-line hidden-sm hidden-xs hidden-tab"></span> </a> </li>
								<li title="Infosys Knowledge Institute"> <a href="javascript:void(0);"
									title="Infosys Knowledge Institute" class="iki-text" target="_self"
									aria-label="Hover to show submenu" aria-haspopup="false" aria-expanded="false">Infosys
									Knowledge Institute <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a> </li>
								<li title="About Us"> <a href="javascript:void(0);" title="About Us" class="about-txt"
									target="_self" aria-label="Hover to show submenu" aria-haspopup="false"
									aria-expanded="false">About Us <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a>
								</li>
								<li class="smalltext" title="Investors"> <a href="/investors.html" title="Investors"
									class="hover-menu-hide" target="_self" aria-label="Go to Investor Page" aria-haspopup="false"
									aria-expanded="false">Investors <span class="un-line hidden-sm hidden-xs hidden-tab"></span>
									</a> </li>
								<li class="smalltext" title="Careers"> <a href="/careers/" title="Careers" class="hover-menu-hide"
									target="_self" aria-label="Go to Careers Page" aria-haspopup="false"
									aria-expanded="false">Careers <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a>
								</li>
								<li class="smalltext" title="Newsroom"> <a href="/newsroom.html" title="Newsroom"
									class="hover-menu-hide" target="_self" aria-label="Go to Newsroom Page" aria-haspopup="false"
									aria-expanded="false">Newsroom <span class="un-line hidden-sm hidden-xs hidden-tab"></span> </a>
								</li>
								<li class="smalltext" title="Contact Us"> <a href="/contact.html" title="Contact Us"
									class="hover-menu-hide" target="_self" aria-label="Go to Contact Page" aria-haspopup="false"
									aria-expanded="false">Contact Us <span class="un-line hidden-sm hidden-xs hidden-tab"></span>
									</a> </li>
								<li class="social-icons"> <a href="https://www.linkedin.com/company/infosys"
									title="Follow us on LinkedIn" target="_blank" aria-label="Follow us on LinkedIn"
									rel="noopener noreferrer">
									<svg width="16" height="16">
										<image xlink:href="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/linkedin.svg"
										src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/linkedin.svg" width="16" height="16">
										</image>
									</svg>
									</a> </li>
								<li class="social-icons"> <a href="https://www.twitter.com/infosys" title="Follow us on Twitter"
									target="_blank" aria-label="Follow us on Twitter" rel="noopener noreferrer">
									<svg width="16" height="16">
										<image xlink:href="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/twitter.svg"
										src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/twitter.svg" width="16" height="16">
										</image>
									</svg>
									</a> </li>
								<li class="social-icons"> <a href="https://www.facebook.com/Infosys" title="Follow us on Facebook"
									target="_blank" aria-label="Follow us on Facebook" rel="noopener noreferrer">
									<svg width="16" height="16">
										<image xlink:href="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/facebook.svg"
										src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/facebook.svg" width="16" height="16">
										</image>
									</svg>
									</a> </li>
								<li class="social-icons"> <a href="https://www.youtube.com/user/Infosys"
									title="Follow us on YouTube" target="_blank" aria-label="Follow us on YouTube"
									rel="noopener noreferrer">
									<svg width="16" height="16">
										<image xlink:href="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/youtube.svg"
										src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/youtube.svg" width="16" height="16">
										</image>
									</svg>
									</a> </li>
								</ul>
							</div>
							<!-- NYN Menu -->
							<div class="nyn-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="https://www.infosys.com/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12 bg-jade-medium automate1 h-50vh">
									<div class="top_menu_img_wrapper"> <img
										src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/being-resilient-lead-menu.jpg"
										class="being-resilient hidden-sm hidden-xs" alt="Being Resilient. That's Live Enterprise.">
									<img src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/banner/being-resilient-lead-mob.jpg"
										class="being-resilient visible-sm hidden-xs" alt="Being Resilient. That's Live Enterprise.">
									</div>
									<div class="row">
									<div class="top_menu_cont_wrapper">
										<div class="col-md-6 col-sm-12 col-xs-12"> <a href="https://www.infosys.com/navigate-your-next/being-resilient.html"
											title="Being Resilient. That's Live Enterprise.">
											<h2 class="head-txt mt100">Being Resilient. That's Live Enterprise.</h2>
										</a> </div>
									</div>
									</div>
								</div>
								<a href="https://www.infosys.com/navigate-your-next/digital-capabilities.html" title="Digital Core Capabilities">
									<div class="col-md-3 col-sm-4 col-xs-12 automate bg-img-pos h-50vh">
									<h2 class="head-txt">Digital Core Capabilities</h2>
									</div>
								</a> <a href="https://www.infosys.com/navigate-your-next/digital-operating-models.html" title="Digital Operating Models">
									<div class="col-md-3 col-sm-4 col-xs-12 innovate bg-img-pos h-50vh">
									<h2 class="head-txt">Digital Operating Models</h2>
									</div>
								</a> <a href="/navigate-your-next/talent-transformations.html"
									title="Empowering Talent Transformations">
									<div class="col-md-3 col-sm-4 col-xs-12 learn bg-img-pos h-50vh">
									<h2 class="head-txt">Empowering Talent Transformations</h2>
									</div>
								</a> <a href="/navigate-your-next/tales-of-transformation.html" title="Tales of Transformation">
									<div class="col-md-3 col-sm-4 col-xs-12 tales-transformation bg-img-pos h-50vh">
									<h2 class="head-txt black-color1">Tales of Transformation</h2>
									</div>
								</a>
								</div>
							</div>
							<!-- Industries Menu -->
							<div class="industries-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2 class="h2-heading mb10">Industries</h2>
								</div>
								<div class="col-md-4 col-sm-6 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Aerospace &amp; Defense Page"
										href="/industries/aerospace-defense.html" title="Aerospace &amp; Defense">Aerospace &amp;
										Defense</a> </li>
									<li> <a aria-label="Go to Agriculture Page" title="Agriculture"
										href="/industries/agriculture.html">Agriculture</a> </li>
									<li> <a aria-label="Go to Automotive Page" title="Automotive"
										href="/industries/automotive.html">Automotive</a> </li>
									<li> <a aria-label="Go to Chemical Manufacturing Page" title="Chemical Manufacturing"
										href="/industries/chemical-manufacturing.html">Chemical
										Manufacturing</a> </li>
									<li> <a aria-label="Go to Communication Services Page" title="Communication Services"
										href="/industries/communication-services.html">Communication
										Services</a> </li>
									<li> <a aria-label="Go to Consumer Packaged Goods Page" title="Consumer Packaged Goods"
										href="/industries/consumer-packaged-goods.html">Consumer
										Packaged Goods</a> </li>
									<li> <a aria-label="Go to Education Page" title="Education"
										href="/industries/education.html">Education</a> </li>
									<li> <a aria-label="Go to Engineering Procurement &amp; Construction"
										title="Engineering Procurement &amp; Construction"
										href="/industries/engineering-procurement-construction.html">Engineering
										Procurement &amp; Construction</a> </li>
									<li> <a aria-label="Go to Financial Services Page" title="Financial Services"
										href="/industries/financial-services.html">Financial
										Services</a> </li>
									</ul>
								</div>
								<div class="col-md-4 col-sm-6 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Healthcare Page" title="Healthcare"
										href="/industries/healthcare.html">Healthcare</a> </li>
									<li> <a aria-label="Go to High Technology Page" title="High Technology"
										href="/industries/high-technology.html">High
										Technology</a> </li>
									<li> <a aria-label="Go to Industrial Manufacturing Page" title="Industrial Manufacturing"
										href="/industries/industrial-manufacturing.html">Industrial
										Manufacturing</a> </li>
									<li> <a aria-label="Go to Information Services &amp; Publishing Page"
										title="Information Services &amp; Publishing" href="/industries/publishing.html">Information
										Services
										&amp; Publishing</a> </li>
									<li> <a aria-label="Go to Insurance Page" title="Insurance"
										href="/industries/insurance.html">Insurance</a> </li>
									<li> <a aria-label="Go to Life Sciences Page" title="Life Sciences"
										href="/industries/life-sciences.html">Life Sciences</a> </li>
									<li> <a aria-label="Go to Logistics &amp; Distribution Page"
										title="Logistics &amp; Distribution"
										href="/industries/logistics-distribution.html">Logistics
										&amp; Distribution</a> </li>
									<li> <a aria-label="Go to Media and Entertainment Page" title="Media and Entertainment"
										href="/industries/media-entertainment.html">Media and
										Entertainment</a> </li>
									</ul>
								</div>
								<div class="col-md-4 col-sm-12 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Mining Page" title="Mining" href="/industries/mining.html">Mining</a>
									</li>
									<li> <a aria-label="Go to Oil and Gas Page" title="Oil and Gas"
										href="/industries/oil-and-gas.html">Oil and Gas</a> </li>
									<li> <a aria-label="Go to Private Equity Page" title="Private Equity"
										href="/industries/private-equity.html">Private Equity</a> </li>
									<li> <a aria-label="Go to Professional Services Page" title="Professional Services"
										href="/industries/professional-services.html">Professional
										Services</a> </li>
									<li> <a aria-label="Go to Public Sector Page" title="Public Sector"
										href="/industries/public-sector.html">Public
										Sector</a> </li>
									<li> <a aria-label="Go to Retail Page" title="Retail" href="/industries/retail.html">Retail</a>
									</li>
									<li> <a aria-label="Go to Travel and Hospitality Page" title="Travel and Hospitality"
										href="/industries/travel-hospitality.html">Travel and
										Hospitality</a> </li>
									<li> <a aria-label="Go to Utilities Page" title="Utilities"
										href="/industries/utilities.html">Utilities</a> </li>
									<li> <a aria-label="Go to Waste Management Page" title="Waste Management"
										href="/industries/waste-management.html">Waste
										Management</a> </li>
									</ul>
								</div>
								</div>
							</div>
							<!-- Services Menu -->
							<div class="services-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2 class="h2-heading mb10">Services</h2>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="row">
									<div class="col-md-3 col-sm-3 col-xs-12"> <img
										src="/content/dam/infosys-web/burger-menu/en/images/experience.svg" alt="Experience"
										class="">
										<h3 class="hear-txt-sub">Experience</h3>
									</div>
									<div class="col-md-9 col-sm-9 col-xs-12">
										<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Digital Marketing Page"
												href="/services/digital-marketing.html" title="Digital Marketing">Digital
												Marketing</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Digital Commerce Page" href="/services/digital-commerce.html"
												title="Digital Commerce">Digital Commerce</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Digital Interactions Page"
												href="/services/digital-interaction.html" title="Digital Interactions">Digital
												Interactions</a> </li>
											</ul>
										</div>
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Digital Workplace Services Page"
												href="/services/digital-workplace-services.html"
												title="Digital Workplace Services">Digital Workplace
												Services</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Digital Experience Page"
												href="/services/digital-experience.html" title="Digital Experience">Digital
												Experience</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Infosys Metaverse Foundry Page"
												href="/services/metaverse.html" title="Infosys Metaverse Foundry">Infosys Metaverse
												Foundry</a> </li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									<div class="menu-seprator"></div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="row">
									<div class="col-md-3 col-sm-3 col-xs-12"> <img
										src="/content/dam/infosys-web/burger-menu/en/images/insight.svg" alt="Insight" class="">
										<h3 class="hear-txt-sub">Insight</h3>
									</div>
									<div class="col-md-9 col-sm-9 col-xs-12 align-list">
										<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0 mb0">
											<li> <a aria-label="Go to Infosys Topaz Page" href="/services/data-ai-topaz.html"
												title="Infosys Topaz">Infosys Topaz</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Data Analytics and AI Page"
												href="/services/data-analytics.html" title="Data Analytics and AI">Data Analytics
												and AI</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Applied AI Page" href="/services/applied-ai.html"
												title="Applied AI">Applied AI</a> </li>
											</ul>
										</div>
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Infosys Generative AI Page"
												href="/services/generative-ai.html" title="Infosys Generative AI">Infosys Generative
												AI</a> </li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									<div class="menu-seprator"></div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="row">
									<div class="col-md-3 col-sm-3 col-xs-12"> <img
										src="/content/dam/infosys-web/burger-menu/en/images/innovate.svg" alt="Innovate" class="">
										<h3 class="hear-txt-sub">Innovate</h3>
									</div>
									<div class="col-md-9 col-sm-9 col-xs-12">
										<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Blockchain Page" href="/services/blockchain.html"
												title="Blockchain">Blockchain</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Engineering Services Page"
												href="/services/engineering-services.html" title="Engineering Services">Engineering
												Services</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline">
											<li> <a aria-label="Go to Internet of Things (IoT) Page"
												href="/services/engineering-services/service-offerings/internet-of-things.html"
												title="Internet of Things (IoT)">Internet of Things (IoT)</a> </li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									<div class="menu-seprator"></div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="row">
									<div class="col-md-3 col-sm-3 col-xs-12"> <img
										src="/content/dam/infosys-web/burger-menu/en/images/accelerate.svg" alt="Accelerate"
										class="">
										<h3 class="hear-txt-sub">Accelerate</h3>
									</div>
									<div class="col-md-9 col-sm-9 col-xs-12">
										<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Agile DevOps Page" href="/services/agile-devops.html"
												title="Enterprise Agile DevOps">Enterprise Agile DevOps </a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to API Economy &amp; Microservices Page"
												href="/services/api-economy.html" title="API Economy &amp; Microservices">API
												Economy &amp;
												Microservices</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Application Modernization Page"
												href="/services/application-modernization.html"
												title="Application Modernization">Application Modernization</a> </li>
											</ul>
										</div>
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Cloud - Infosys Cobalt Page"
												href="/services/cloud-cobalt.html" title="Cloud - Infosys Cobalt">Cloud - Infosys
												Cobalt</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Digital Process Automation Page"
												href="/services/digital-process-automation.html"
												title="Digital Process Automation">Digital Process
												Automation</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Digital Supply Chain Page"
												href="/services/digital-supply-chain.html" title="Digital Supply Chain">Digital
												Supply Chain</a> </li>
											</ul>
										</div>
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Microsoft Cloud Business Page"
												href="/services/microsoft-dynamics.html"
												title="Microsoft Business Application Services">Microsoft
												Business Application Services</a> </li>
			
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Microsoft Cloud Business Page"
												href="/services/microsoft-cloud-business.html"
												title="Microsoft Cloud Business">Microsoft Cloud Business</a> </li>
			
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Oracle Page" href="/services/oracle.html"
												title="Oracle">Oracle</a> </li>
											</ul>
										</div>
			
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to SAP Page" href="/services/sap.html" title="SAP">SAP</a> </li>
											</ul>
										</div>
			
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Salesforce Page" href="/services/salesforce.html"
												title="Salesforce">Salesforce</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Service Experience Transformation Page"
												href="/services/experience-transformation.html"
												title="Service Experience Transformation">Service Experience
												Transformation</a> </li>
											</ul>
										</div>
										<div class="clearfix visible-sm hidden-xs"></div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb0">
											<li> <a aria-label="Go to Energy Transition Page"
												href="/services/energy-transition.html" title="Energy Transition">Energy
												Transition</a> </li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									<div class="menu-seprator"></div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12">
									<div class="row">
									<div class="col-md-3 col-sm-3 col-xs-12"> <img
										src="/content/dam/infosys-web/burger-menu/en/images/assure.svg" alt="Assure" class="">
										<h3 class="hear-txt-sub">Assure</h3>
									</div>
									<div class="col-md-9 col-sm-9 col-xs-12">
										<div class="row">
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline mb-xs-0">
											<li> <a aria-label="Go to Cyber Security Page" href="/services/cyber-security.html"
												title="Cyber Security">Cyber
												Security</a> </li>
											</ul>
										</div>
										<div class="col-md-4 col-sm-4 col-xs-12 align-list">
											<ul class="list-inline">
											<li> <a aria-label="Go to Testing Page" href="/services/validation-solutions.html"
												title="Testing">Testing</a> </li>
											</ul>
										</div>
										</div>
									</div>
									</div>
									<div class="menu-seprator"></div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12 mt30">
									<div class="row">
									<div class="col-md-3 col-sm-12 col-xs-12"> <a
										aria-label="Go to Application Development and Maintenance Page"
										href="/services/application-development-maintenance.html"
										title="Application Development and Maintenance"> <img
											src="/content/dam/infosys-web/en/global-resource/background-image/application.svg" alt=""
											class="">
										<h3 class="hear-txt-sub">Application Development and Maintenance</h3>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12"> <a
										aria-label="Go to Business Process Management Page" target="_blank"
										href="https://www.infosysbpm.com/Pages/index.aspx" title="Business Process Management"
										rel="noopener noreferrer"> <img
											src="/content/dam/infosys-web/en/global-resource/background-image/business-management.svg"
											alt="" class="">
										<h3 class="hear-txt-sub">Business Process Management</h3>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12"> <a aria-label="Go to Consulting Page"
										href="/services/consulting.html" title="Consulting Services"> <img
											src="/content/dam/infosys-web/en/global-resource/background-image/consulting.svg" alt=""
											class="">
										<h3 class="hear-txt-sub">Consulting Services</h3>
										</a> </div>
									<div class="col-md-3 col-sm-12 col-xs-12"> <a
										aria-label="Go to Incubating Emerging Offerings Page"
										href="/services/incubating-emerging-technologies.html"
										title="Incubating Emerging Offerings"> <img
											src="/content/dam/infosys-web/en/global-resource/background-image/incubating-emerging.svg"
											alt="" class="">
										<h3 class="hear-txt-sub">Incubating Emerging Offerings</h3>
										</a> </div>
									</div>
								</div>
								</div>
							</div>
							<!-- Platform Menu -->
							<div class="platforms-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2 class="h2-heading mb10">Platforms</h2>
								</div>
								<div class="col-md-6 col-sm-12 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to EdgeVerve Page" href="https://www.edgeverve.com/"
										title="EdgeVerve">EdgeVerve</a> </li>
									<li> <a aria-label="Go to Infosys Finacle Page" href="https://www.edgeverve.com/finacle/"
										title="Infosys Finacle">Infosys
										Finacle</a> </li>
									<li> <a aria-label="Go to Infosys Live Enterprise Suite Page"
										href="/navigate-your-next/live-enterprise-suite.html"
										title="Infosys Live Enterprise Suite">Infosys Live Enterprise Suite</a> </li>
									<li> <a aria-label="Go to Infosys Cortex Page" href="/products-and-platforms/cortex.html"
										title="Infosys Cortex">Infosys
										Cortex</a> </li>
									<li> <a aria-label="Go to Infosys Meridian Page" href="/products-and-platforms/meridian.html"
										title="Infosys Meridian">Infosys
										Meridian</a> </li>
									</ul>
								</div>
								<div class="col-md-6 col-sm-12 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Panaya Page" href="https://www.panaya.com" title="Panaya">Panaya</a>
									</li>
									<li> <a aria-label="Go to Infosys Equinox Page" href="https://www.infosysequinox.com/"
										title="Infosys Equinox">Infosys Equinox</a> </li>
									<li> <a aria-label="Go to Infosys Wingspan Page" href="/products-and-platforms/wingspan.html"
										title="Infosys Wingspan">Infosys
										Wingspan</a> </li>
									<li> <a aria-label="Go to Infosys HELIX Page" href="/products-and-platforms/helix.html"
										title="Infosys HELIX">Infosys
										HELIX</a> </li>
									<li> <a aria-label="Go to Infosys Polycloud Page" href="/products-and-platforms/polycloud.html"
										title="Infosys Polycloud">Infosys Polycloud</a> </li>
									</ul>
								</div>
								</div>
							</div>
							<!-- IKI Menu -->
							<div class="iki-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2 class="h2-heading mb10">Infosys Knowledge Institute</h2>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Overview Page" title="Overview" href="/iki.html">Overview</a> </li>
									<li> <a aria-label="Go to Connect Page" title="Connect"
										href="/iki/iki-connect-with-us.html">Connect</a> </li>
									<li> <a aria-label="Go to About Us Page" title="About Us" href="/iki/our-people.html">About
										Us</a> </li>
									</ul>
								</div>
								<div class="col-md-6 col-sm-6 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Learn Page" href="/iki/learn.html"><strong>Learn</strong></a></li>
									<li> <a aria-label="Go to Research Page" title="Research"
										href="/iki/insights/research.html">Research</a> </li>
									<li> <a aria-label="Go to Perspectives Page" title="Perspectives"
										href="/iki/insights.html">Perspectives</a> </li>
									<li> <a aria-label="Go to Podcasts Page" title="Podcasts" href="/iki/podcast.html">Podcasts</a>
									</li>
									<li> <a aria-label="Go to Videos Page" title="Videos"
										href="/iki/insights/videos.html">Videos</a> </li>
									</ul>
								</div>
								</div>
							</div>
							<!-- About Us -->
							<div class="aboutus-menu wow animated fadeOutRightBig" data-wow-duration="0.3s"
								style="visibility: visible; animation-duration: 0.3s; display: none;">
								<div class="cross visible1024-cross"> <a title="close" href="javascript:void(0);" alt="Cross"
									aria-label="Close menu" aria-haspopup="false" aria-expanded="false"> <img
									src="/content/dam/infosys-web/burger-menu/en/images/multiply.svg" alt="Cross"> </a> </div>
								<div class="submenu-portion">
								<div class="col-md-12 col-sm-12 col-xs-12">
									<h2 class="h2-heading mb10">About Us</h2>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Overview Page" title="Overview" href="/about.html">Overview</a> </li>
									<li> <a aria-label="Go to History Page" title="History" href="/about/history.html">History</a>
									</li>
									<!--<li> <a  aria-label="Go to Videos Page" title="Corporate Governance" href="/content/infosys-web/en/about/corporate-governance.html">Corporate Governance</a> </li>-->
									<li> <a aria-label="Go to ESG Page" title="ESG" href="/about/esg.html">ESG</a> </li>
									<li> <a aria-label="Go to Management Profiles Page" title="Management Profiles"
										href="/about/management-profiles.html">Management
										Profiles</a> </li>
									<li> <a aria-label="Go to Infosys Knowledge Institute Page" title="Infosys Knowledge Institute"
										href="/iki.html">Infosys Knowledge
										Institute</a> </li>
									<li> <a aria-label="Go to Infosys Stories Page" title="Infosys Stories"
										href="/infosys-stories.html">Infosys Stories</a> </li>
									<li> <a aria-label="Go to Infosys Springboard Page" title="Infosys Springboard"
										href="/about/springboard.html">Infosys Springboard</a> </li>
									<li> <a aria-label="Go to Analyst Reports Page" title="Analyst Reports"
										href="/analyst-speak.html">Analyst Reports</a> </li>
									</ul>
			
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <a aria-label="Go to Subsidiaries Page" title="Subsidiaries"
										href="/about/subsidiaries.html">Subsidiaries</a> </li>
									<li> <a aria-label="Go to Clients Speak Page" title="Clients Speak"
										href="/about/clients-speak.html">Clients Speak</a> </li>
									<li> <a aria-label="Go to Alliances Page" title="Alliances"
										href="/about/alliances.html">Alliances</a> </li>
									<li> <a aria-label="Go to Innovation Fund Page" title="Innovation Fund"
										href="/about/innovation-fund.html">Innovation Fund</a> </li>
									<li> <a aria-label="Go to Infosys Innovation Network (IIN) Page"
										title="Infosys Innovation Network (IIN)" href="/about/innovation-network.html">Infosys
										Innovation
										Network (IIN)</a> </li>
									<li> <a aria-label="Go to Diversity Equity Inclusion Page" title="Diversity Equity Inclusion"
										href="/about/diversity-inclusion.html">Diversity Equity
										Inclusion</a> </li>
									<li> <a aria-label="Go to Awards Page" title="Awards" href="/about/awards.html">Awards</a> </li>
									</ul>
								</div>
								<div class="col-md-4 col-sm-4 col-xs-12 align-list">
									<ul class="list-unstyled li-separator">
									<li> <strong>Flagship Brand Partnerships</strong> </li>
									<li class="border-0"> <a class="collapse-txt fontweight600 collapsed" role="button"
										data-toggle="collapse" href="#tennismenu" aria-expanded="false"
										aria-controls="tennismenu">Tennis</a> </li>
									<div class="collapse" id="tennismenu">
										<li> <a aria-label="Go to All Partnerships" title="All Partnerships" href="/tennis.html">All
											Partnerships</a> </li>
										<li> <a aria-label="Go to Australian Open Page" title="Australian Open"
											href="/australian-open.html">Australian Open</a> </li>
										<li> <a aria-label="Go to Roland-Garros Page" title="Roland-Garros"
											href="/roland-garros.html">Roland-Garros</a> </li>
										<li> <a aria-label="Go to ATP Page" title="ATP" href="/atp.html">ATP</a> </li>
										<li> <a aria-label="Go to International Tennis Hall of Fame Page"
											title="International Tennis Hall of Fame" href="/ithf.html"> International Tennis Hall of
											Fame </a> </li>
									</div>
									<!-- <li> <a aria-label="Go to ATP Page" title="ATP"
													href="/content/infosys-web/en/atp.html">ATP</a> </li>
											<li> <a aria-label="Go to Australian Open Page" title="Australian Open"
													href="/content/infosys-web/en/australian-open.html">Australian Open</a> </li> -->
									<li class="border-top"> <a aria-label="Go to Bloomberg Media Page" title="Bloomberg Media"
										href="/bloomberg.html">Bloomberg
										Media</a> </li>
									<!-- <li> <a aria-label="Go to Roland-Garros Page" title="Roland-Garros"
													href="/content/infosys-web/en/roland-garros.html">Roland-Garros</a> </li> -->
									<li> <a aria-label="Go to Madison Square Garden Page" title="Madison Square Garden"
										href="/madison-square-garden.html">Madison Square
										Garden</a> </li>
									<li> <a aria-label="Go to The Economist Group Page" title="The Economist Group"
										href="/the-sustainability-project.html">The Economist
										Group</a> </li>
									<li> <a aria-label="Go to Dow Jones Page" title="Dow Jones" href="/dow-jones.html">Dow Jones</a>
									</li>
									<li> <a aria-label="Go to Financial Times Page" title="Financial Times"
										href="/financial-times.html">Financial Times</a> </li>
									<li> <a aria-label="Go to The Cloud Hub Page" title="The Cloud Hub" href="/cloud-hub.html">The
										Cloud Hub</a> </li>
									</ul>
								</div>
								</div>
							</div>
							</div>
						</nav>
						</div>
					</div>
					<!-- Burger Menu End -->
					</div>
				</div>
				</div>
			</div>`
}
const getHamburgerData = (divData) => {
	let data = {navLogo:{},navList:[]}
	divData.forEach((element,index) => {
		if(index==0){
			let logohref = element.querySelector("a")
			let logoimg = element.querySelector("picture")
			data.navLogo = {
				'logohref':logohref==null?'':logohref.href,
				'logoimg':logoimg==null?'':logoimg.children[0].srcset
			}
		}else{
			let headtext = element.querySelector("p")
			let links = element.querySelectorAll("ul>li")
			let d = {headtext:'',otherlinks:[]}
			links.forEach((e)=>{
				let links = e.querySelector("a")
				d.headtext=headtext.innerHTML
				d.otherlinks = [...d.otherlinks,{
					'link':links==null?'':links.href,
					'text':links==null?'':links.innerHTML
				}]
			})
			data.navList.push(d)
		}
	});
	console.log(data)
	return data
}


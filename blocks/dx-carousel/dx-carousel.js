let actualData = [];
let targetElement = document.querySelector(".dx-carousel-wrapper");
targetElement.classList.add(
  "carousel",
  "aem-GridColumn",
  "aem-GridColumn--default--12"
);

let newElement = (d) => {
  return d == null || d == undefined || d == ""
    ? ""
    : `<div class="cmp-carousel" data-cmp-delay="5000">
				<section id="hero_slider">
					<div id="main-cnt"> </div>
					<article class="container-fluid slider">
						<div class="row">
							<div id="hero_slider_carousel" class="owl-carousel owl-theme owl-loaded owl-drag">
								${fetchNewElementData(d)}
							</div>
						</div>
					</article>
				</section>
			</div>`;
};

let newElementItem = (d) => {
  return `<div class="item slide-2">
				<div class="teaser">
					<img class="portal-mob visible-xs" src="${d.ptlImg}" alt="Portals">
					<div role="img" aria-label="${d.heading}" class="repeated-css industries-gradient">
						<img src="${d.dskImg}" class="slide-image hidden-xs" alt="${d.heading}">
						<img src="${d.mobImg}" class="slide-image visible-xs" alt="${d.heading}">
					</div>
					<div class="slider-overlay-coral"></div>
					<div class="caption">
						<div class="container">
							<div class="row">
								<div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 wow fadeInLeft animated animated" style="visibility: visible;">
									<p class="text-uppercase topicIndicator">${d.imgTopic}</p>
									<p class="h2-heading white-color" id="leadstory2">${d.heading}</p>
									<a href="${d.moreLink}" target="_blank" class="btn btn-shutter-more text-uppercase" aria-describedby="leadstory2" aria-label="undefined about ${d.heading}">${d.moreText}</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>`;
};

let fetchNewElementData = (d) => {
  let item = "";
  d.forEach((e) => {
    item += newElementItem(e);
  });
  return item;
};

let blockData = targetElement.querySelectorAll(".dx-carousel.block > div");
blockData.forEach((e) => {
  let d = {};
  let blockSingleData = e.querySelectorAll("div");
  d.ptlImg = blockSingleData[0].querySelector("picture").children[0].srcset;
  d.dskImg = blockSingleData[1].querySelector("picture").children[0].srcset;
  d.mobImg = blockSingleData[2].querySelector("picture").children[0].srcset;
  d.imgTopic = blockSingleData[3].innerHTML;
  d.heading = blockSingleData[4].innerHTML;
  d.moreText = blockSingleData[5].children[0].innerHTML;
  d.moreLink = blockSingleData[5].children[0].href;
  actualData.push(d);
});

targetElement.innerHTML = newElement(actualData);

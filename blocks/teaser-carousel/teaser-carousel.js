  let actualData = [];
  let targetElement = document.querySelector(".teaser-carousel-wrapper");
  targetElement.classList.add(
    "teasercarousel",
    "parbase",
    "aem-GridColumn",
    "aem-GridColumn--default--12"
  );

  let newElement = (d) => {
    return d == null || d == undefined || d == ""
      ? ""
      : `<section id="what_new">
                <article class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 wow fadeInUp animated" data-wow-delay="0.6s" style="visibility: visible;-webkit-animation-delay: 0.6s; -moz-animation-delay: 0.6s; animation-delay: 0.6s;">
                            <div id="slider_list_carousel" class="owl-theme owl-carousel owl-loaded owl-drag">
                                ${fetchNewElementData(d)}
                            </div>
                        </div>
                    </div>
                </article>
            </section>`;
  };
  let blockData = targetElement.querySelectorAll(
    ".teaser-carousel.block > div"
  );
  blockData.forEach((e) => {
    let d = {};
    let blockSingleData = e.querySelectorAll("div");
    d.title = blockSingleData[0].textContent;
    d.slider_title = blockSingleData[1].textContent;
    d.link = blockSingleData[2].children[0].href;
    d.linkText = blockSingleData[2].children[0].innerHTML;
    actualData.push(d);
  });
  let fetchNewElementData = (d) => {
    let item = "";
    d.forEach((e) => {
      item += newElementItem(e);
    });
    return item;
  };
  let newElementItem = (d) => {
    return `<div class="item">
                <div class="whatnew-box">
                    <p class="title-box">${d.title}</p>
                    <p class="slider-title">${d.slider_title}</p>
                    <a class="slider-btn" href="${d.link}" target="_blank">${d.linkText}</a>
                </div>
            </div>`;
  };
  targetElement.innerHTML = newElement(actualData);

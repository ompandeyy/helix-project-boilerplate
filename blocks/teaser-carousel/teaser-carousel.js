(function () {
  let actual_DATA = [];
  let target_ELEMENT = document.querySelector(".teaser-carousel-wrapper");
  target_ELEMENT.classList.add(
    "teasercarousel",
    "parbase",
    "aem-GridColumn",
    "aem-GridColumn--default--12"
  );

  let new_ELEMENT = (d) => {
    return d == null || d == undefined || d == ""
      ? ""
      : `<section id="what_new">
                <article class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 wow fadeInUp animated" data-wow-delay="0.6s" style="visibility: visible;-webkit-animation-delay: 0.6s; -moz-animation-delay: 0.6s; animation-delay: 0.6s;">
                            <div id="slider_list_carousel" class="owl-theme owl-carousel owl-loaded owl-drag">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" style="transform: translate3d(-1155px, 0px, 0px); transition: all 0s ease 0s; width: 4620px;">
                                        ${fetch_ELEMENT_DATA(d)}
                                    </div>
                                </div>
                                <div class="owl-nav">
                                    <div class="owl-prev">prev</div>
                                    <div class="owl-next">next</div>
                                </div>
                                <div class="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>`;
  };
  let block_DATA = target_ELEMENT.querySelectorAll(
    ".teaser-carousel.block > div"
  );
  block_DATA.forEach((e) => {
    let d = {};
    let block_single_DATA = e.querySelectorAll("div");
    d.title = block_single_DATA[0].textContent;
    d.slider_title = block_single_DATA[1].textContent;
    d.link = block_single_DATA[2].children[0].href;
    d.linkText = block_single_DATA[2].children[0].innerHTML;
    actual_DATA.push(d);
  });
  let fetch_ELEMENT_DATA = (d) => {
    let item = "";
    d.forEach((e) => {
      item += new_ELEMENT_ITEM(e);
    });
    return item;
  };
  let new_ELEMENT_ITEM = (d) => {
    return `<div class="owl-item cloned" style="width: 273.75px; margin-right: 15px;">
                <div class="item">
                    <div class="whatnew-box">
                        <p class="title-box">${d.title}</p>
                        <p class="slider-title">${d.slider_title}</p>
                        <a class="slider-btn" href="${d.link}" target="_blank">${d.linkText}</a>
                    </div>
                </div>
            </div>`;
  };
  target_ELEMENT.innerHTML = new_ELEMENT(actual_DATA);
})();

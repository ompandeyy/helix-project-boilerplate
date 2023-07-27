
(function () {
    let d = {}
    let target_ELEMENT = document.querySelector(".title-description-wrapper")
    target_ELEMENT.classList.add('titledescription','aem-GridColumn','aem-GridColumn--default--12')

    let new_ELEMENT = (d) => {
        return `<section class="pt75">
                    <article class="container">
                        <div class="row">
                            <div class="col-md-12 col-sm-12 col-xs-12 text-center wow fadeInDown animated" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
                                <img src="${d.imgsrc}" class="center-block" alt="Line">
                                <h2 class="h2-heading">${d.heading}</h2>
                                <p class="col-md-8 col-md-offset-2 para-txt light-gray mb50">${d.para}</p>
                            </div>
                        </div>
                    </article>
                </section>`
    }
    let block_DATA = target_ELEMENT.querySelectorAll('.title-description.block > div > div')
    d.imgsrc=block_DATA[0].querySelector('img').src
    d.heading=block_DATA[1].textContent
    d.para=block_DATA[2].textContent
    target_ELEMENT.innerHTML=new_ELEMENT(d)
})();



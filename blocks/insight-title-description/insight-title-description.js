 //Getting main Div
 var mainInsightTitleHeading = document.querySelector('.insight-title-description-wrapper > .insight-title-description');
 //adding classNames to main Div
mainInsightTitleHeading.setAttribute('class','titledescription');
mainInsightTitleHeading.classList.add('aem-GridColumn','aem-GridColumn--default--12');
//creating section element
    var insightTitleSectionElem = document.createElement('section');
    //adding Id to section
    insightTitleSectionElem.setAttribute('class','pt75');
     mainInsightTitleHeading.appendChild(insightTitleSectionElem);

   //Getting div container presented from plain.html For Hiding
    var InsideTitleMainDiv = document.querySelector('.titledescription > div');
    //Hiding the Inside Main Div From Plain Html
    InsideTitleMainDiv.style.display = 'none';

    //creating article
    var insightTitleArticleElem = document.createElement('article');
    //adding class to article
    insightTitleArticleElem.setAttribute('class','container');
    insightTitleSectionElem.appendChild(insightTitleArticleElem);

    //creating div
    var containerTitleDiv = document.createElement('div');
    //adding class to container Div
    containerTitleDiv.setAttribute('class','row');  
     insightTitleArticleElem.appendChild(containerTitleDiv);
   
    //creating div inside Div Container
    var insightTitleContainerFirstDiv = document.createElement('div');
    //adding className to container first Div
    insightTitleContainerFirstDiv.classList.add('col-md-12', 'col-sm-12', 'col-xs-12', 'text-center', 'wow', 'fadeInDown', 'animated');
    //adding attribute to container first Div
    insightTitleContainerFirstDiv.setAttribute('data-wow-delay','0.3s');
    //Adding Inline CSS to container first Div
    insightTitleContainerFirstDiv.style.visibility = 'visible';
    insightTitleContainerFirstDiv.style.webkitAnimationDelay = '0.3s';
    insightTitleContainerFirstDiv.style.mozAnimationDelay = '0.3s';
    insightTitleContainerFirstDiv.style.animationDelay = '0.3s';
    containerTitleDiv.appendChild(insightTitleContainerFirstDiv);
       //creating img tag
    var containerImg = document.createElement('img');
    //adding class to container img
    containerImg.setAttribute('class','center-block');  
    containerImg.setAttribute('alt','Line'); 
   
  //creating heading tag
    var containerHeading = document.createElement('h2');
    //adding class to container h2
    containerHeading.setAttribute('class','h2-heading'); 
   
           //creating p tag
    var containerPara = document.createElement('p');
    //adding class to container p
    containerPara.classList.add('col-md-8', 'col-md-offset-2', 'para-txt', 'light-gray', 'mb50');
   
    var imgsrclink , headingcontent , paragraphcontent ;
            imgsrclink = document.querySelector('.titledescription  > div > div > picture >img').src
            containerImg.src = imgsrclink;
             insightTitleContainerFirstDiv.appendChild(containerImg);
    for(let i=1; i < document.querySelectorAll('.titledescription > div > div').length; i++){
          if(i == 1){
            headingcontent = document.querySelectorAll('.titledescription > div > div')[1].innerText
             containerHeading.innerHTML = headingcontent;
           insightTitleContainerFirstDiv.appendChild(containerHeading);
          }
        if(i == 2){
                headingcontent = document.querySelectorAll('.titledescription > div > div')[2].innerText
                 containerPara.innerHTML = headingcontent;
                insightTitleContainerFirstDiv.appendChild(containerPara);

              }
    }
    

// (function () {
//     let desc = {}
//     let targetELEMENT = document.querySelector(".insight-title-description")
//     targetELEMENT.classList.add('titledescription','aem-GridColumn','aem-GridColumn--default--12')

//     let newELEMENT = (desc) => {
//         return `<section class="pt75">
//                     <article class="container">
//                         <div class="row">
//                             <div class="col-md-12 col-sm-12 col-xs-12 text-center wow fadeInDown animated" data-wow-delay="0.3s" style="visibility: visible;-webkit-animation-delay: 0.3s; -moz-animation-delay: 0.3s; animation-delay: 0.3s;">
//                                 <img src="${desc.imgsrc}" class="center-block" alt="Line">
//                                 <h2 class="h2-heading">${desc.heading}</h2>
//                                 <p class="col-md-8 col-md-offset-2 para-txt light-gray mb50">${desc.para}</p>
//                             </div>
//                         </div>
//                     </article>
//                 </section>`
//     }
//     let blockDATA = targetELEMENT.querySelectorAll('.insight-title-description.block > div > div')
//     desc.imgsrc=blockDATA[0].querySelector('img').src
//     desc.heading=blockDATA[1].textContent
//     desc.para=blockDATA[2].textContent
//     targetELEMENT.innerHTML=newELEMENT(desc)
// })();

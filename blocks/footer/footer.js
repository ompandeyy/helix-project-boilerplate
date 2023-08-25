import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  // fetch footer content
  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

  if (resp.ok) {
   const html = await resp.text();

    // decorate footer DOM
 const footer = document.createElement('div');
 footer.innerHTML = html;

   decorateIcons(footer);
   block.append(footer); 
  //hiding content
   var footerContent = document.querySelector('.footer-wrapper > .footer.block > div');
    footerContent.style.display = 'none';
   //console.log(footerContent);
    
    var mainFooter = document.querySelector('.footer-wrapper > .footer.block');
    mainFooter.setAttribute('class','experiencefragment');
    mainFooter.classList.add('aem-GridColumn', 'aem-GridColumn--default--12');

    var firstDiv = document.createElement('div');
    firstDiv.setAttribute('class','xf-content-height');
    mainFooter.appendChild(firstDiv);

    var secondDiv = document.createElement('div');
    secondDiv.setAttribute('class','aem-Grid');
   secondDiv.classList.add('aem-Grid--12' , 'aem-Grid--default--12');
    firstDiv.appendChild(secondDiv); 

    var thirdDiv = document.createElement('div');
    thirdDiv.setAttribute('class','freeflowhtml');
    thirdDiv.classList.add('aem-GridColumn' , 'aem-GridColumn--default--12');
    secondDiv.appendChild(thirdDiv);  

    var fourthDiv = document.createElement('footer');
    fourthDiv.setAttribute('id','footer');
    thirdDiv.appendChild(fourthDiv);

     var footerArticle = document.createElement('article');
     fourthDiv.appendChild(footerArticle);

     var fifthDiv = document.createElement('div');
    fifthDiv.classList.add('container', 'pt50', 'pb50');
    footerArticle.appendChild(fifthDiv);

    var sixthDiv = document.createElement('div');
    sixthDiv.setAttribute('class','row');
    fifthDiv.appendChild(sixthDiv);
    
   var counter = document.querySelectorAll('.footer-wrapper > .experiencefragment  > div > div > h3').length;

    for(let i = 0; i < counter ;i++){
        var footerContentDiv = document.createElement('div');
        sixthDiv.appendChild(footerContentDiv);
        footerContentDiv.classList.add('col-lg-2', 'col-md-3', 'col-sm-4', 'col-xs-12');  
        var footerContentHeader = document.createElement('h3');
         var footerUl = document.createElement('ul');
             footerContentDiv.appendChild(footerContentHeader);
  if(i == 0){
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
            footerContentHeader.innerHTML = footerContHead;    
     var footerUlTwo = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
     var liContentFooterTwo = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
      liContentFooterTwo.classList.add('list-unstyled', 'footer-txt'); 
      footerUlTwo[i].append(liContentFooterTwo);
     // footerContentHeader.appendChild(footerUlTwo[i]); 
   }
    
        
   else if(i == 1){footerContentDiv.appendChild(footerContentHeader);
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
     var footerContHeadOne = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHeadOne;
                    var footerUlThree = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');   
      var liContentFooterThree = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[i];
       
       liContentFooterThree.classList.add('list-unstyled', 'footer-txt');   
       footerUlThree[i].append(liContentFooterThree);
       // footerContentHeader.appendChild(footerUlThree[i]);
 } 
    else if(i == 2){footerContentDiv.appendChild(footerContentHeader);
       footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      footerContentDiv.setAttribute('class','col-lg-3');
      footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHead;
      var liContentFooterFour = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
      var footerUlFour = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
      liContentFooterFour.classList.add('list-unstyled', 'footer-txt');
      footerUlFour[i].append(liContentFooterFour);
      // footerContentHeader.appendChild(footerUlFour[i]);
     
  }
    else if(i == 3){footerContentDiv.appendChild(footerContentHeader);
       footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
      footerContentDiv.setAttribute('class','col-lg-3');
     footerContentDiv.classList.add('col-lg-3','col-md-3','col-sm-4', 'col-xs-12');
      var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
        footerContentHeader.innerHTML = footerContHead;
      var liContentFooterFive = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
      var footerUlFive = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
       liContentFooterFive.classList.add('list-unstyled', 'footer-txt'); 
      footerUlFive[i].append(liContentFooterFive);
      // footerContentHeader.appendChild(footerUlFive[i]);
      
  }
  else if(i == 4){footerContentDiv.appendChild(footerContentHeader);
            footerContentHeader.classList.add('ftr-head', 'mt-xs-20');
    var footerContHead = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > h3')[i].innerText;
            footerContentHeader.innerHTML = footerContHead;
           var liContentFooterSix = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
      var footerUlSix = document.querySelectorAll('#footer > article > .container > .row > div > .ftr-head');
       liContentFooterSix.classList.add('list-inline', 'footer-txt'); 
      footerUlSix[i].append(liContentFooterSix);
      
                 }
       } 
  
     // copyright starts : 
    var ftrcopyrightOne = document.createElement('div');
    ftrcopyrightOne.classList.add('container-fluid', 'ptb15', 'bg-white');
    footerArticle.appendChild(ftrcopyrightOne);  

    var ftrcopyrightDiv = document.createElement('div');
    ftrcopyrightDiv.setAttribute('class','container');
    ftrcopyrightOne.appendChild(ftrcopyrightDiv);

    var ftrcopyrightRowDiv = document.createElement('div');
    ftrcopyrightRowDiv.setAttribute('class','row');
    ftrcopyrightDiv.appendChild(ftrcopyrightRowDiv);

    var ftrcopyrightRowFirstDiv = document.createElement('div');
    ftrcopyrightRowFirstDiv.classList.add('col-lg-7', 'col-md-6', 'col-sm-6', 'col-xs-12');
    ftrcopyrightRowDiv.appendChild(ftrcopyrightRowFirstDiv);

    var ftrcopyrightRowPara = document.createElement('p');
    ftrcopyrightRowPara.setAttribute('class','mb0');
    var ftrCpyrightRowParaContent =  document.querySelector('.footer-wrapper > .experiencefragment  > div > div > div > div > div').innerText;
    ftrcopyrightRowPara.innerHTML =  ftrCpyrightRowParaContent;
    ftrcopyrightRowFirstDiv.appendChild(ftrcopyrightRowPara);

    var ftrcopyrightRowSecondDiv = document.createElement('div');
    ftrcopyrightRowSecondDiv.classList.add('col-lg-5', 'col-md-6', 'col-sm-6', 'col-xs-12');
    ftrcopyrightRowDiv.appendChild(ftrcopyrightRowSecondDiv);
      
    var ftrcopyrightRowThirdDiv = document.createElement('div');
    ftrcopyrightRowThirdDiv.classList.add('pull-right', 'pull-left-xs', 'mt-xs-20');
    ftrcopyrightRowSecondDiv.appendChild(ftrcopyrightRowThirdDiv);
    
    var ftrcopyrightRowFourthDiv = document.createElement('div');
    ftrcopyrightRowFourthDiv.setAttribute('class','country');
    ftrcopyrightRowThirdDiv.appendChild(ftrcopyrightRowFourthDiv);

    var ftrcopyrightRowFifthDiv = document.createElement('div');
    ftrcopyrightRowFifthDiv.setAttribute('class','select-country');
    ftrcopyrightRowFourthDiv.appendChild(ftrcopyrightRowFifthDiv);

    var ftrcopyrightAnchor = document.createElement('a');
    ftrcopyrightAnchor.setAttribute('aria-label','Select Country');
    var footerAnchorLinkContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > div > div > div')[1].innerText;
    ftrcopyrightAnchor.setAttribute('href',footerAnchorLinkContent);
    var footerAnchorContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > div > div > div')[2].innerText;
    ftrcopyrightAnchor.innerHTML = footerAnchorContent + `<span class="down-arrow"></span>`;
    ftrcopyrightRowFifthDiv.appendChild(ftrcopyrightAnchor);
 
    var ftrcopyrightRowSixDiv = document.createElement('div');
    ftrcopyrightRowSixDiv.setAttribute('class','option-country');
   // ftrcopyrightRowSixDiv.setAttribute('onclick','onclck()');
   // ftrcopyrightRowSixDiv.classList.add('open-country'); 
    ftrcopyrightRowFourthDiv.appendChild(ftrcopyrightRowSixDiv);

 //   var ftrcopyrightUlContent = document.querySelectorAll('.footer-wrapper > .experiencefragment > div > div > ul')[0];
    var ftrcopyrightUlContent = document.createElement('ul');
    ftrcopyrightUlContent.classList.add('list-unstyled', 'country-align'); 
    ftrcopyrightRowSixDiv.append(ftrcopyrightUlContent);
    ftrcopyrightUlContent.innerHTML = `
                                        <li><a aria-label="Go to Australia Page" href="https://www.infosys.com/australia.html">Australia</a></li>
                                        <li><a aria-label="Go to Austria Page" href="https://www.infosys.com/at-en/">Austria</a></li>
                                        <li><a aria-label="Go to Belgium Page" href="https://www.infosys.com/be-en/">Belgium</a></li>
                                        <li><a aria-label="Go to Brazil Page" href="https://www.infosys.com/br/">Brazil</a></li>
                                        <li><a aria-label="Go to Bulgaria Page" href="https://www.infosys.com/bg-en/">Bulgaria</a></li>
                                        <li><a aria-label="Go to Canada Page" href="https://www.infosys.com/powering-digital-canada.html">Canada</a></li>
                                        <li><a aria-label="Go to Chile Page" href="https://www.infosys.com/contact/country.html?region=Americas&amp;subsidiary=Infosys#Chile">Chile</a></li>
                                        <li><a aria-label="Go to China Page" href="https://www.infosys.com/cn/">China</a></li>
                                        <li><a aria-label="Go to Costa Rica Page" href="https://www.infosys.com/contact/country.html?region=Americas&amp;subsidiary=Infosys#Costa%2520rica">Costa Rica</a></li>
                                        <li><a aria-label="Go to Croatia Page" href="https://www.infosys.com/hr-en/">Croatia</a> </li>
                                        <li><a aria-label="Go to Czech Page" href="https://www.infosys.com/cz-en/">Czech</a> </li>
                                        <li><a aria-label="Go to Denmark Page" href="https://www.infosys.com/dk-en/">Denmark</a> </li>
                                        <li><a aria-label="Go to Estonia Page" href="https://www.infosys.com/ee-en/">Estonia</a> </li>
                                        <li><a aria-label="Go to Finland Page" href="https://www.infosys.com/fi-en/">Finland</a> </li>
                                        <li><a aria-label="Go to France Page" href="https://www.infosys.com/fr-en/">France</a> </li>
                                        <li><a aria-label="Go to Germany Page" href="https://www.infosys.com/de/">Germany</a> </li>
                                        <li><a aria-label="Go to Hong Kong Page" href="https://www.infosys.com/hk-en.html">Hong Kong</a></li>
                                        <li><a aria-label="Go to Hungary Page" href="https://www.infosys.com/hu-en/">Hungary</a> </li>
                                        <li><a aria-label="Go to India Page" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#India">India</a></li>
                                        <li><a aria-label="Go to Ireland Page" href="https://www.infosys.com/ie-en/">Ireland</a> </li>
                                        <li><a aria-label="Go to Italy Page" href="https://www.infosys.com/it-en/">Italy</a> </li>
                                        <li><a aria-label="Go to Japan Page" href="https://www.infosys.com/jp/">Japan</a> </li>
                                        <li><a aria-label="Go to Liechtenstein Page" href="https://www.infosys.com/contact/country.html?region=Europe&amp;subsidiary=Infosys#Liechtenstein">Liechtenstein</a> </li>
                                        <li><a aria-label="Go to Latvia Page" href="https://www.infosys.com/lv-en/">Latvia</a> </li>
                                        <li><a aria-label="Go to Lithuania Page" href="https://www.infosys.com/lt-en/">Lithuania</a> </li>
                                        <li><a aria-label="Go to Luxembourg Page" href="https://www.infosys.com/lu-en/">Luxembourg</a> </li>
                                        <li><a aria-label="Go to Malaysia Page" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Malaysia">Malaysia</a></li>
                                        <li><a aria-label="Mauritius" href="https://www.infosys.com/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#Mauritius">Mauritius</a></li>
                                        <li><a aria-label="Go to Mexico Page" href="https://www.infosys.com/mx/">Mexico</a> </li>
                                        <li><a aria-label="Go to New Zealand Page" href="https://www.infosys.com/australia.html">New Zealand</a></li>
                                        <li><a aria-label="Go to Norway Page" href="https://www.infosys.com/no-en/">Norway</a> </li>
                                        <li><a aria-label="Go to Peru Page" href="https://www.infosys.com/contact/country.html?region=Americas&amp;subsidiary=Infosys#Peru">Peru</a></li>
                                        <li><a aria-label="Go to Philippines Page" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Philippines">Philippines</a></li>
                                        <li><a aria-label="Go to Poland Page" href="https://www.infosys.com/pl-en/">Poland</a> </li>
                                        <li><a aria-label="Go to Portugal Page" href="https://www.infosys.com/pt-en/">Portugal</a> </li>
                                        <li><a aria-label="Go to Romania Page" href="https://www.infosys.com/ro-en/">Romania</a> </li>
                                        <li><a aria-label="Go to Russia Page" href="https://www.infosys.com/ru-en/">Russia</a> </li>
                                        <li><a aria-label="Go to Singapore Page" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Singapore">Singapore</a>  </li>
                                        <li><a aria-label="Go to Slovakia Page" href="https://www.infosys.com/sk-en/">Slovakia</a> </li>
                                        <li><a aria-label="Go to Slovenia Page" href="https://www.infosys.com/sl-en/">Slovenia</a> </li>
                                        <li><a aria-label="South Africa" href="https://www.infosys.com/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#South%20Africa">South Africa</a></li>
                                        <li><a aria-label="South Korea" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#South%20Korea">South Korea</a></li>
                                        <li><a aria-label="Go to Spain Page" href="https://www.infosys.com/es-en/">Spain</a> </li>
                                        <li><a aria-label="Go to Sweden Page" href="https://www.infosys.com/se-en/">Sweden</a> </li>
                                        <li><a href="https://www.infosys.com/ch-en/" title="Switzerland">Switzerland</a></li>
                                        <li><a aria-label="Go to Taiwan Page" href="https://www.infosys.com/contact/country.html?region=Asia_X32_Pacific&amp;subsidiary=Infosys#Taiwan">Taiwan</a> </li>
                                        <li><a aria-label="Go to Netherlands Page" href="https://www.infosys.com/nl-en/">The Netherlands</a> </li>
                                        <li><a aria-label="Go to Arab Emirates Page" href="https://www.infosys.com/contact/country.html?region=Middle_X32_East_X32_and_X32_Africa&amp;subsidiary=Infosys#United%20Arab%20Emirates">United Arab Emirates</a></li>
                                        <li><a aria-label="Go to UK Page" href="https://www.infosys.com/gb-en/">United Kingdom (UK)</a></li>
                                        <li><a aria-label="Go to Americas Page" href="https://www.infosys.com/americas.html">United States</a></li>
                                  `;
   
    
    
    // //copyright ends :
  }
}










// import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

// /**
//  * loads and decorates the footer
//  * @param {Element} block The footer block element
//  */
// export default async function decorate(block) {
//   const cfg = readBlockConfig(block);
//   block.textContent = '';

//   // fetch footer content
//   const footerPath = cfg.footer || '/footer';
//   const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

//   if (resp.ok) {
//     const html = await resp.text();

//     // decorate footer DOM
//     const footer = document.createElement('div');
//     footer.innerHTML = html;

//     //decorateIcons(footer);
//     //block.append(footer);

//     // Create a new <div> element
//     const newElement = document.createElement('div');
//     newElement.className = 'freeflowhtml aem-GridColumn aem-GridColumn--default--12';

//     // Set the HTML content for the new element
//     newElement.innerHTML = `
//       <footer id="footer">
//           <article>
//               <div class="container pt50 pb50">
//                   <div class="row">
//                 //inner html comes here
//               </div>
//           </article>
//       </footer>
//     `;

//     const footerContainer = newElement.querySelector('.row');

//     [...footer.children].forEach((item) => {
//       const column = document.createElement('div');
//       column.className = 'col-lg-2 col-md-3 col-sm-4 col-xs-12';
//       const h3Element = item.querySelector("h3");
//       // Get the li element
//       const liElement = item.querySelector("li");
//       let linkText = "Link Text not found!";
//       let href = "Link not found!";
//      if (liElement) {
//                 const link = liElement.querySelector('a');
//                 linkText = link ? link.textContent : "Link not found!";
//                 href = link ? link.getAttribute('href') : "Href not found!";
//                 //const title = link ? link.getAttribute('title') : "Title not found!";
//                 //const label = link ? link.getAttribute('aria-label') : "Label not found!";
//             } else {
//                 console.log("li element not found!");
//             }
//       // Read the content of h3 and li
//       const h3Content = h3Element ? h3Element.textContent : "h3 element not found!";
//       column.innerHTML = `
//         <h3 class="ftr-head mt-xs-20">${h3Content}</h3>
//                             <ul class="list-unstyled footer-txt">
//                                 <li><a aria-label="${linkText}" href="${href}" title="${linkText}">${linkText}</a></li>
//                                 </ul>
//       `;

//       footerContainer.appendChild(column);
//       });
//       block.append(footerContainer);
//   }
// }

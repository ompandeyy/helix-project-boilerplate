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
    
    //latest updated Footer js code
           if(document.body.children.item('footer-wrapper').lastElementChild.className == 'footer block'){
            //adding className to first Div in footer
            document.querySelector("div > div").className += 'container pt50 pb50'; 

             //adding className to second Div in footer
            document.querySelector("div > div > div").className += 'row';

            //creating div to append Loop (h3,ul) tags starts here ---
            
            for(var i=0; i< document.getElementsByTagName("H3").length;i++){
                const elem = document.createElement('div');
                const target = document.getElementsByTagName("H3")[i];
                const elemul = document.getElementsByTagName("ul")[i];
          
            // grab target element reference
           // const target = document.querySelector('H3')[i]
          // const elemul = document.querySelector('ul')

            // insert the element before target element
            target.parentNode.insertBefore(elem, target);
            elem.append(target,elemul);

            //Loop used to set same className to that tag conatins(h3,ul)
            [...document.querySelectorAll("div > div > div > div")].forEach((element) => {
                element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
                });
            }

            //Loop used to set same className to h3
            [...document.querySelectorAll("h3")].forEach((element) => {
                element.className = "ftr-head mt-xs-20";
                });
                
            //Loop used to set same className to ul
            [...document.querySelectorAll("ul")].forEach((element) => {
            element.className = "list-unstyled footer-txt";
            });

            //updating className to lastchild of ul containing in last div with innerHTML as Connect With Us
            document.body.children.item('footer-wrapper').lastElementChild.parentElement.firstElementChild.children.item("").firstChild.nextElementSibling.lastElementChild.lastChild.className = 'list-inline footer-txt';
                
            //Loop ends here ---list-inline footer-txt

                
        }


      // if(document.querySelector("div").offsetParent.lastChild.ownerDocument.all[132].classList.value == 'footer block'){

//      [...document.querySelectorAll("div")].forEach((element) => {
//             element.className += " col-lg-2 col-md-3 col-sm-4 col-xs-12";
//             });
//      document.querySelector("div").offsetParent.lastChild.ownerDocument.all[132].classList = 'footer block';

// }
        //     //Adding id to footer
        // document.querySelector("footer").id += 'footer';

        // //Loop used to set same className to div
        // [...document.querySelectorAll("div")].forEach((element) => {
        //     element.className = "col-lg-2 col-md-3 col-sm-4 col-xs-12";
        //     });

        //       //Adding className to first Div
        // document.querySelector("div").offsetParent.lastChild.ownerDocument.all[13].classList = 'container pt50 pb50';

        //     //Adding className to secondDiv
        // document.querySelector("div").offsetParent.lastChild.ownerDocument.all[14].classList = 'row';

        //     //Loop used to set same className to h3
        // [...document.querySelectorAll("h3")].forEach((element) => {
        //         element.className = "ftr-head mt-xs-20";
        //         });
                
        //     //Loop used to set same className to ul
        // [...document.querySelectorAll("ul")].forEach((element) => {
        //     element.className = "list-unstyled footer-txt";
        //     });

        //     //Adding className to lastLoop ul tag in connect with us innerHtml div
        // document.querySelector("ul").offsetParent.lastChild.ownerDocument.all[73].classList = 'list-inline footer-txt';

 

  }
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 (function(){

const main = document.querySelector('[data-block-name="remoteapp"]');
const remoteAppType = main.children[0].children[0].innerHTML;
console.log("Remote App Type = "+ remoteAppType);

  const generateScriptLink = (path) => {
      const element = document.createElement('script');
      element.type = 'text/javascript'
      element.src = path;

      return element;
  };

  const generateStyleLink = (path) => {
      const element = document.createElement('link');
      element.type = 'text/css';
      element.rel = 'stylesheet';
      element.href = path;

      return element;
  };

  const sanitizeUrl = (url) => {
      let { pathname, origin } = new URL(url, location.origin); // defaults to own origin
      pathname = pathname.replace(/\/\//, '/');
      return `${origin}${pathname}`;
  };

   let domain = "";
   if(remoteAppType !== 'undefined' && remoteAppType !== '' &&( remoteAppType === 'newsletter' || remoteAppType === 'Newsletter')){
     domain = "http://localhost:3000";
   } else if(remoteAppType !== 'undefined' && remoteAppType !== '' &&( remoteAppType === 'checkout' || remoteAppType === 'Checkout')){
    domain = "http://localhost:3008";
   } else{
       domain = "http://localhost:3010";
   }

   if(domain) {
       const manifestUrl = sanitizeUrl(`${domain}/asset-manifest.json`);
       fetch(manifestUrl)
         .then(response => response.json())
         .then(asset => {
            const { entrypoints } = asset;
            let files = entrypoints?.client?.js || entrypoints;

            if (Array.isArray(files)) {
                const bodyFragment = document.createDocumentFragment();
                const headFragment = document.createDocumentFragment();

                files.forEach(item => {
                  const filePath = sanitizeUrl(`${domain}/${item}`);
                  if(item.indexOf('.css') > 0) {
                      headFragment.appendChild(generateStyleLink(filePath));
                  } else {
                      bodyFragment.appendChild(generateScriptLink(filePath));
                  }
               });
               headFragment.hasChildNodes() && document.head.appendChild(headFragment);
               bodyFragment.hasChildNodes() && document.body.appendChild(bodyFragment);
            }
       });
   }
})();

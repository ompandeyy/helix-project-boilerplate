//Get dx-Banner Div
var getMainDxBannerDiv = document.querySelector('.dx-banner-overview-wrapper');
// Get main DOC Value
var dxBannerContent = document.querySelector('.dx-banner-overview.block > div > div').innerText;
//hiding dx-banner div
document.querySelector('.dx-banner-overview-wrapper > .dx-banner-overview.block' ).style.display = 'none';
//create div for banner starts
var dxBannerFirstDiv = document.createElement('div');
dxBannerFirstDiv.classList.add('banner', 'parbase', 'industries-gradient', 'aem-GridColumn', 'aem-GridColumn--default--12');
getMainDxBannerDiv.appendChild(dxBannerFirstDiv);
var dxBannerSection = document.createElement('section');
dxBannerSection.setAttribute('id','sml_ht_home_banner');
dxBannerFirstDiv.appendChild(dxBannerSection);
var dxcntDiv = document.createElement('div');
dxcntDiv.setAttribute('id','main-cnt');
dxBannerSection.appendChild(dxcntDiv);
var dxBannerArticle = document.createElement('article');
dxBannerArticle.setAttribute('class','container');
dxBannerSection.appendChild(dxBannerArticle);
var dxBannerSecondDiv = document.createElement('div');
dxBannerSecondDiv.setAttribute('class','row');
dxBannerArticle.appendChild(dxBannerSecondDiv);
var dxBannerThirdDiv = document.createElement('div');
  //adding className to row Div
    dxBannerThirdDiv.classList.add('col-md-9','col-sm-12','col-xs-12','wow','fadeInLeft','animated');
    //adding attribute to container first Div
    dxBannerThirdDiv.setAttribute('data-wow-delay','0.3s');
    //Adding Inline CSS to container first Div
    dxBannerThirdDiv.style.visibility = 'visible';
    dxBannerThirdDiv.style.webkitAnimationDelay = '0.3s';
    dxBannerThirdDiv.style.mozAnimationDelay = '0.3s';
    dxBannerThirdDiv.style.animationDelay = '0.3s';
dxBannerSecondDiv.appendChild(dxBannerThirdDiv);
var dxBannerFourthDiv = document.createElement('div'); 
dxBannerFourthDiv.classList.add('h2-heading', 'white-color', 'l-top');
dxBannerThirdDiv.appendChild(dxBannerFourthDiv);
dxBannerFourthDiv.innerHTML = dxBannerContent;
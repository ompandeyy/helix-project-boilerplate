  //Getting main Div container
    var mainDivDX = document.querySelector('.dx-digital-experience-wrapper > .dx-digital-experience.block');
      //hiding content
   var mainDXContent = document.querySelector('.dx-digital-experience-wrapper > .dx-digital-experience.block > div');
    mainDXContent.style.display = 'none';

     mainDivDX.setAttribute('class','freeflowhtml');
    // Getting content from DOC
    var mainDXClassHeading =  document.querySelectorAll('.freeflowhtml > div > div')[0].textContent;
    var poneDXClassPara =  document.querySelectorAll('.freeflowhtml > div > div')[1].textContent;
    var ptwoDXClassPara =  document.querySelectorAll('.freeflowhtml > div > div')[2].textContent;
    var ulDXContent = document.querySelector('.freeflowhtml > div > div > ul');
      //adding classNames to main Div
      mainDivDX.classList.add('aem-GridColumn','aem-GridColumn--default--12');
   
    //creating div element
    var mainTextBodyElem = document.createElement('div');
    //adding Id to section
    mainTextBodyElem.setAttribute('id','main-text-body');
     mainDivDX.appendChild(mainTextBodyElem);
   
    //creating article
    var articleDXElem = document.createElement('article');
    //adding class to article
    articleDXElem.setAttribute('class','container');
     mainTextBodyElem.appendChild(articleDXElem);
   
    //creating div
    var containerDXDiv = document.createElement('div');
    //adding class to container Div
    containerDXDiv.setAttribute('class','row');  
     articleDXElem.appendChild(containerDXDiv);
   
    //creating div inside Div Container
    var InsideContainerFirstDXDiv = document.createElement('div');
    //adding className to container first Div
    InsideContainerFirstDXDiv.classList.add('col-md-10', 'col-sm-12', 'col-xs-12', 'wow', 'fadeInUp','animated');
    //adding attribute to container first Div
    InsideContainerFirstDXDiv.setAttribute('data-wow-delay','0.6s');
    //Adding Inline CSS to container first Div
    InsideContainerFirstDXDiv.style.visibility = 'visible';
    InsideContainerFirstDXDiv.style.webkitAnimationDelay = '0.6s';
    InsideContainerFirstDXDiv.style.mozAnimationDelay = '0.6s';
    InsideContainerFirstDXDiv.style.animationDelay = '0.6s';
    containerDXDiv.appendChild(InsideContainerFirstDXDiv);
    
    //Creating header inside Div Conatiner
    var InsideContainerSecondDX = document.createElement('h1');
    //adding className to above header
    InsideContainerSecondDX.setAttribute('class','h1-heading');
    //adding text to above div
    InsideContainerSecondDX.innerHTML = mainDXClassHeading;
    InsideContainerFirstDXDiv.appendChild(InsideContainerSecondDX);

      //Creating second para inside Div Conatiner
    var InsideContainerThirdDX = document.createElement('p');
    InsideContainerThirdDX.innerHTML = poneDXClassPara;
    InsideContainerFirstDXDiv.appendChild(InsideContainerThirdDX);

    //Creating third para inside Div Conatiner
    var InsideContainerFourthDX = document.createElement('p');
    InsideContainerFourthDX.innerHTML = ptwoDXClassPara;
    InsideContainerFirstDXDiv.appendChild(InsideContainerFourthDX);

    //appending UL Content
    ulDXContent.setAttribute('class','list-items');
    InsideContainerFirstDXDiv.appendChild(ulDXContent);

//Getting main Div container
    var mainDiv = document.querySelector('.request-for-services-wrapper');
    //Getting whole Div from plain.html
    var mainDivContainer = document.querySelector('.request-for-services-wrapper > .request-for-services');
    //applying css to hide whole Div from plain.html
    mainDivContainer.style.display = 'none';
   // mainDivContainer.innerHTML = '';
   //getting Heading and content from DOC
 var mainRequestHeading = document.querySelectorAll('.request-for-services-wrapper > .request-for-services > div > div')[0].textContent;
var mainRequestContent = document.querySelectorAll('.request-for-services-wrapper > .request-for-services > div > div')[1].textContent;
    //creating section element
    var serviceSectionElem = document.createElement('section');
    //adding Id to section
    serviceSectionElem.setAttribute('id','request_for_services');
    //creating article
    var serviceArticleElem = document.createElement('article');
    //adding class to article
    serviceArticleElem.setAttribute('class','container');
    //creating div
    var serviceContainerDiv = document.createElement('div');
    //adding class to service container Div
    serviceContainerDiv.setAttribute('class','row');    
    //creating first div inside Div service Container
    var insideServiceContainerFirstDiv = document.createElement('div');
    //adding className to inside first Div service Container
    insideServiceContainerFirstDiv.classList.add('col-md-4','col-sm-6','col-xs-12','mb-xs-50');
    //creating h2 tag inside service container first Div
    var insideServiceContainerHeader = document.createElement('h2');
    //setting className to h2 tag inside service container first Div
    insideServiceContainerHeader.classList.add('black-color','h2-heading');
    //adding data into h2 tag inside service container first Div
    insideServiceContainerHeader.innerHTML = mainRequestHeading;
    //create p tag inside service container first Div
    var insideServiceContainerPara = document.createElement('p');
    //setting className to p tag inside service container first Div
    insideServiceContainerPara.classList.add('txt-request','light-gray');
    //adding data to p tag inside service container first Div
    insideServiceContainerPara.innerHTML= mainRequestContent;
      //'Find out more about how we can help your organization navigate its next.Let us know your areas of interest so that we can serve you better.';
    //creating second div inside Div service Container
    var insideServiceContainerSecondDiv = document.createElement('div');
    //adding className to inside second Div service Container
    insideServiceContainerSecondDiv.classList.add('col-md-8','col-sm-6','col-xs-12','form-bg');
    //creating div inside second Div service Container
    var serviceContainerSecondDiv = document.createElement('div');
    //adding class to div inside second Div service Container
    serviceContainerSecondDiv.setAttribute('class','row'); 

        var newElemmodal = document.createElement('div');
    //setting Attribute to new element
    newElemmodal.setAttribute('id','myModal');
newElemmodal.setAttribute('class','modal');
newElemmodal.innerHTML = ` <!-- Modal content -->
  <div class="modal-content">
    <span class="close">×</span>
    <p id="emailDisplay"></p>
  </div>`;
serviceContainerSecondDiv.append(newElemmodal);
    //creating form inside container second div
    var insideSecondDivForm = document.createElement('form');
    //setting attributes to form inside container second div
    insideSecondDivForm.setAttribute('method','post');
    insideSecondDivForm.setAttribute('id','infy-rfs');
//    insideSecondDivForm.setAttribute('onsubmit','return valid_registration(this)');
    insideSecondDivForm.setAttribute('name','infy-rfs');
   // insideSecondDivForm.setAttribute('action',"");
    //adding statically data(input tags,...) to form inside container second div
// serviceContainerSecondDiv.innerHTML =  `
// <!-- The Modal -->
// <div id="myModal" class="modal">
//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">×</span>
//     <p id="emailDisplay"></p>
//   </div>
// </div>
// ` + insideSecondDivForm;
    insideSecondDivForm.innerHTML = `
    <input type="hidden" name="elqFormName" value="request-for-services">
    <input type="hidden" id="Source" name="Source" value="digital-experience">
    <input type="hidden" name="referral_source" id="referral_source" value="">
    <input type="hidden" name="elqSiteID" value="672742760">
    <input type="hidden" value="United States" id="country" name="country">
    <input type="hidden" value="1734259" id="demandbase_sid" name="demandbase_sid">
    <input type="hidden" value="Software &amp; Technology" id="industry" name="industry">
    <input type="hidden" value="Data &amp; Technical Services" id="sub_industry" name="sub_industry">
    <input type="hidden" value="Brocade Communications Systems Inc" id="company_name" name="company_name">
    <input type="hidden" value="Over $5B" id="revenue_range" name="revenue_range">
    <input type="hidden" value="San Jose" id="city" name="city">
    <input type="hidden" value="CA" id="state" name="state">
    <input type="hidden" value="95134" id="zip" name="zip">
    <input type="hidden" value="false" id="fortune_1000" name="fortune_1000">
    <input type="hidden" value="false" id="forbes_2000" name="forbes_2000">
    <input type="hidden" value="" id="watch_list_account_type" name="watch_list_account_type">
    <input type="hidden" value="" id="watch_list_account_status" name="watch_list_account_status">
    <input type="hidden" value="United States" id="db_country_name_ip" name="db_country_name_ip">
    <input type="hidden" value="408-333-8000" id="office_phone" name="office_phone">
    <input type="hidden" value="infysp" id="sptext" name="sptext">
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="firstname" name="firstname" title="First Name" value="" onblur="validateEmptys(this.form.firstname, 'name', 'alertYname');this.setAttribute('value', this.value);"">
      <span class="bar"></span>
      <label for="First Name">First Name</label>
       </div>
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="lastname" name="lastname" title="Last Name" value="" onblur="validateEmptys(this.form.lastname, 'name', 'alertlname');this.setAttribute('value', this.value);"">
      <span class="bar"></span>
      <label for="Last Name">Last Name</label>
       </div>
    <div class="clearfix"></div>
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="email" title="Email" name="email" value="" required>
      <span class="highlight"></span> <span class="bar"></span>
      <label for="Email Address">Email<sup>*</sup></label>
      <span id="alertEmail"></span> </div>
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="company" name="company" title="Company" value="" onblur="validateEmptys_length(this.form.company, 'alertcompany',1);this.setAttribute('value', this.value);" placeholder="To select, begin typing.">
      
      <label for="company">Company</label>
      <span class="bar"></div>
    <div class="clearfix"></div>
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="title" title="Job Title" name="title" value="" onblur="validateEmptys(this.form.title, 'name', 'alerttitle');this.setAttribute('value', this.value);">
       <span class="bar"></span>
      <label for="Job Title">Job Title</label>
      </div>
    <div class="field-bg col-md-6 col-sm-6 col-xs-12">
      <input type="text" id="phone" name="phone" value="" title="Phone" onblur="phone_special();this.setAttribute('value', this.value);">
       <span class="bar"></span>
      <label for="phone">Phone</label>
      </div>
    <div class="clearfix"></div>
    <div class="field-bg col-md-12 col-sm-12 col-xs-12">
      <textarea id="Message" name="Message" onblur="message_special();this.setAttribute('value', this.value);"></textarea>
     </span> <span class="bar"></span>
      <label for="Message">Message</label>
    </div>
    <div class="col-md-12 col-sm-12 col-xs-12 no-padding">
      <p class="text-left fs-md-16">
        <label class="form-switch">
          <input type="checkbox" id="opt-in-comm" name="opt-in-comm" value="Yes">
          <i></i> </label>
        <span id="lineheight">Opt in for marketing communication <a class="pvcy-stmt" href="/privacy-statement.html" title="Privacy Statement" target="_blank">Privacy Statement</a></span></p>
    </div>
    <div class="form-group col-md-3 col-sm-3 col-xs-4">
      <button type="submit" class="submit-btn">Submit </button>
    </div>
    <fieldset id="db_data_container" style="border: none;"><input id="db_registry_company_name" name="db_registry_company_name" type="hidden" value="GOOGLE-CLOUD-PLATFORM"><input id="db_registry_city" name="db_registry_city" type="hidden" value=""><input id="db_registry_state" name="db_registry_state" type="hidden" value=""><input id="db_region_name" name="db_region_name" type="hidden" value=""><input id="db_registry_zip_code" name="db_registry_zip_code" type="hidden" value=""><input id="db_registry_area_code" name="db_registry_area_code" type="hidden" value=""><input id="db_registry_dma_code" name="db_registry_dma_code" type="hidden" value=""><input id="db_registry_country" name="db_registry_country" type="hidden" value="India"><input id="db_registry_country_code" name="db_registry_country_code" type="hidden" value="IN"><input id="db_registry_country_code3" name="db_registry_country_code3" type="hidden" value=""><input id="db_registry_latitude" name="db_registry_latitude" type="hidden" value="22"><input id="db_registry_longitude" name="db_registry_longitude" type="hidden" value="79"><input id="db_marketing_alias" name="db_marketing_alias" type="hidden" value="Brocade"><input id="db_employee_count" name="db_employee_count" type="hidden" value="20000"><input id="db_isp" name="db_isp" type="hidden" value="false"><input id="db_primary_sic" name="db_primary_sic" type="hidden" value="7373"><input id="db_primary_naics" name="db_primary_naics" type="hidden" value="541512"><input id="db_street_address" name="db_street_address" type="hidden" value="130 Holger Way"><input id="db_country" name="db_country" type="hidden" value="US"><input id="db_stock_ticker" name="db_stock_ticker" type="hidden" value=""><input id="db_web_site" name="db_web_site" type="hidden" value="brocade.com"><input id="db_annual_sales" name="db_annual_sales" type="hidden" value="31680000000"><input id="db_employee_range" name="db_employee_range" type="hidden" value="Enterprise"><input id="db_b2b" name="db_b2b" type="hidden" value="true"><input id="db_b2c" name="db_b2c" type="hidden" value="false"><input id="db_traffic" name="db_traffic" type="hidden" value="Medium"><input id="db_latitude" name="db_latitude" type="hidden" value="37.42"><input id="db_longitude" name="db_longitude" type="hidden" value="-121.95"><input id="db_hq_sid" name="db_hq_sid" type="hidden" value="1734259"><input id="db_domestichq_sid" name="db_domestichq_sid" type="hidden" value="1734259"><input id="db_worldhq_sid" name="db_worldhq_sid" type="hidden" value="1734259"><input id="db_information_level" name="db_information_level" type="hidden" value="Detailed"><input id="db_audience" name="db_audience" type="hidden" value="Enterprise Business"><input id="db_audience_segment" name="db_audience_segment" type="hidden" value="Software &amp; Technology"><input id="db_company_size" name="db_company_size" type="hidden" value="Over $5B"><input id="db_access_type" name="db_access_type" type="hidden" value="remote"><input id="db_hq_company_name" name="db_hq_company_name" type="hidden" value="Brocade Communications Systems Inc"><input id="db_hq_demandbase_sid" name="db_hq_demandbase_sid" type="hidden" value="1734259"><input id="db_hq_marketing_alias" name="db_hq_marketing_alias" type="hidden" value="Brocade"><input id="db_hq_industry" name="db_hq_industry" type="hidden" value="Software &amp; Technology"><input id="db_hq_sub_industry" name="db_hq_sub_industry" type="hidden" value="Data &amp; Technical Services"><input id="db_hq_employee_count" name="db_hq_employee_count" type="hidden" value="20000"><input id="db_hq_primary_sic" name="db_hq_primary_sic" type="hidden" value="7373"><input id="db_hq_primary_naics" name="db_hq_primary_naics" type="hidden" value="541512"><input id="db_hq_street_address" name="db_hq_street_address" type="hidden" value="130 Holger Way"><input id="db_hq_city" name="db_hq_city" type="hidden" value="San Jose"><input id="db_hq_state" name="db_hq_state" type="hidden" value="CA"><input id="db_hq_zip" name="db_hq_zip" type="hidden" value="95134"><input id="db_hq_country" name="db_hq_country" type="hidden" value="US"><input id="db_hq_country_name" name="db_hq_country_name" type="hidden" value="United States"><input id="db_hq_phone" name="db_hq_phone" type="hidden" value="408-333-8000"><input id="db_hq_stock_ticker" name="db_hq_stock_ticker" type="hidden" value=""><input id="db_hq_web_site" name="db_hq_web_site" type="hidden" value="brocade.com"><input id="db_hq_annual_sales" name="db_hq_annual_sales" type="hidden" value="31680000000"><input id="db_hq_revenue_range" name="db_hq_revenue_range" type="hidden" value="Over $5B"><input id="db_hq_employee_range" name="db_hq_employee_range" type="hidden" value="Enterprise"><input id="db_hq_b2b" name="db_hq_b2b" type="hidden" value="true"><input id="db_hq_b2c" name="db_hq_b2c" type="hidden" value="false"><input id="db_hq_traffic" name="db_hq_traffic" type="hidden" value="Medium"><input id="db_hq_latitude" name="db_hq_latitude" type="hidden" value="37.42"><input id="db_hq_longitude" name="db_hq_longitude" type="hidden" value="-121.95"><input id="db_hq_fortune_1000" name="db_hq_fortune_1000" type="hidden" value="false"><input id="db_hq_forbes_2000" name="db_hq_forbes_2000" type="hidden" value="false"><input id="db_hq_hq_sid" name="db_hq_hq_sid" type="hidden" value="1734259"><input id="db_hq_domestichq_sid" name="db_hq_domestichq_sid" type="hidden" value="1734259"><input id="db_hq_worldhq_sid" name="db_hq_worldhq_sid" type="hidden" value="1734259"><input id="db_hq_company_size" name="db_hq_company_size" type="hidden" value="Over $5B"><input id="db_hq_session_id" name="db_hq_session_id" type="hidden" value=""><input id="db_domestichq_company_name" name="db_domestichq_company_name" type="hidden" value="Brocade Communications Systems Inc"><input id="db_domestichq_demandbase_sid" name="db_domestichq_demandbase_sid" type="hidden" value="1734259"><input id="db_domestichq_marketing_alias" name="db_domestichq_marketing_alias" type="hidden" value="Brocade"><input id="db_domestichq_industry" name="db_domestichq_industry" type="hidden" value="Software &amp; Technology"><input id="db_domestichq_sub_industry" name="db_domestichq_sub_industry" type="hidden" value="Data &amp; Technical Services"><input id="db_domestichq_employee_count" name="db_domestichq_employee_count" type="hidden" value="20000"><input id="db_domestichq_primary_sic" name="db_domestichq_primary_sic" type="hidden" value="7373"><input id="db_domestichq_primary_naics" name="db_domestichq_primary_naics" type="hidden" value="541512"><input id="db_domestichq_street_address" name="db_domestichq_street_address" type="hidden" value="130 Holger Way"><input id="db_domestichq_city" name="db_domestichq_city" type="hidden" value="San Jose"><input id="db_domestichq_state" name="db_domestichq_state" type="hidden" value="CA"><input id="db_domestichq_zip" name="db_domestichq_zip" type="hidden" value="95134"><input id="db_domestichq_country" name="db_domestichq_country" type="hidden" value="US"><input id="db_domestichq_country_name" name="db_domestichq_country_name" type="hidden" value="United States"><input id="db_domestichq_phone" name="db_domestichq_phone" type="hidden" value="408-333-8000"><input id="db_domestichq_stock_ticker" name="db_domestichq_stock_ticker" type="hidden" value=""><input id="db_domestichq_web_site" name="db_domestichq_web_site" type="hidden" value="brocade.com"><input id="db_domestichq_annual_sales" name="db_domestichq_annual_sales" type="hidden" value="31680000000"><input id="db_domestichq_revenue_range" name="db_domestichq_revenue_range" type="hidden" value="Over $5B"><input id="db_domestichq_employee_range" name="db_domestichq_employee_range" type="hidden" value="Enterprise"><input id="db_domestichq_b2b" name="db_domestichq_b2b" type="hidden" value="true"><input id="db_domestichq_b2c" name="db_domestichq_b2c" type="hidden" value="false"><input id="db_domestichq_traffic" name="db_domestichq_traffic" type="hidden" value="Medium"><input id="db_domestichq_latitude" name="db_domestichq_latitude" type="hidden" value="37.42"><input id="db_domestichq_longitude" name="db_domestichq_longitude" type="hidden" value="-121.95"><input id="db_domestichq_fortune_1000" name="db_domestichq_fortune_1000" type="hidden" value="false"><input id="db_domestichq_forbes_2000" name="db_domestichq_forbes_2000" type="hidden" value="false"><input id="db_domestichq_hq_sid" name="db_domestichq_hq_sid" type="hidden" value="1734259"><input id="db_domestichq_domestichq_sid" name="db_domestichq_domestichq_sid" type="hidden" value="1734259"><input id="db_domestichq_worldhq_sid" name="db_domestichq_worldhq_sid" type="hidden" value="1734259"><input id="db_domestichq_company_size" name="db_domestichq_company_size" type="hidden" value="Over $5B"><input id="db_domestichq_session_id" name="db_domestichq_session_id" type="hidden" value=""><input id="db_worldhq_company_name" name="db_worldhq_company_name" type="hidden" value="Brocade Communications Systems Inc"><input id="db_worldhq_demandbase_sid" name="db_worldhq_demandbase_sid" type="hidden" value="1734259"><input id="db_worldhq_marketing_alias" name="db_worldhq_marketing_alias" type="hidden" value="Brocade"><input id="db_worldhq_industry" name="db_worldhq_industry" type="hidden" value="Software &amp; Technology"><input id="db_worldhq_sub_industry" name="db_worldhq_sub_industry" type="hidden" value="Data &amp; Technical Services"><input id="db_worldhq_employee_count" name="db_worldhq_employee_count" type="hidden" value="20000"><input id="db_worldhq_primary_sic" name="db_worldhq_primary_sic" type="hidden" value="7373"><input id="db_worldhq_primary_naics" name="db_worldhq_primary_naics" type="hidden" value="541512"><input id="db_worldhq_street_address" name="db_worldhq_street_address" type="hidden" value="130 Holger Way"><input id="db_worldhq_city" name="db_worldhq_city" type="hidden" value="San Jose"><input id="db_worldhq_state" name="db_worldhq_state" type="hidden" value="CA"><input id="db_worldhq_zip" name="db_worldhq_zip" type="hidden" value="95134"><input id="db_worldhq_country" name="db_worldhq_country" type="hidden" value="US"><input id="db_worldhq_country_name" name="db_worldhq_country_name" type="hidden" value="United States"><input id="db_worldhq_phone" name="db_worldhq_phone" type="hidden" value="408-333-8000"><input id="db_worldhq_stock_ticker" name="db_worldhq_stock_ticker" type="hidden" value=""><input id="db_worldhq_web_site" name="db_worldhq_web_site" type="hidden" value="brocade.com"><input id="db_worldhq_annual_sales" name="db_worldhq_annual_sales" type="hidden" value="31680000000"><input id="db_worldhq_revenue_range" name="db_worldhq_revenue_range" type="hidden" value="Over $5B"><input id="db_worldhq_employee_range" name="db_worldhq_employee_range" type="hidden" value="Enterprise"><input id="db_worldhq_b2b" name="db_worldhq_b2b" type="hidden" value="true"><input id="db_worldhq_b2c" name="db_worldhq_b2c" type="hidden" value="false"><input id="db_worldhq_traffic" name="db_worldhq_traffic" type="hidden" value="Medium"><input id="db_worldhq_latitude" name="db_worldhq_latitude" type="hidden" value="37.42"><input id="db_worldhq_longitude" name="db_worldhq_longitude" type="hidden" value="-121.95"><input id="db_worldhq_fortune_1000" name="db_worldhq_fortune_1000" type="hidden" value="false"><input id="db_worldhq_forbes_2000" name="db_worldhq_forbes_2000" type="hidden" value="false"><input id="db_worldhq_hq_sid" name="db_worldhq_hq_sid" type="hidden" value="1734259"><input id="db_worldhq_domestichq_sid" name="db_worldhq_domestichq_sid" type="hidden" value="1734259"><input id="db_worldhq_worldhq_sid" name="db_worldhq_worldhq_sid" type="hidden" value="1734259"><input id="db_worldhq_company_size" name="db_worldhq_company_size" type="hidden" value="Over $5B"><input id="db_worldhq_session_id" name="db_worldhq_session_id" type="hidden" value=""><input id="db_data_source" name="db_data_source" type="hidden" value="ip"></fieldset>
    
    `

    //creating new element to append to div
    var newElem = document.createElement('div');
    //setting Attribute to new element
    newElem.setAttribute('id','thankyou');
    newElem.style.display = 'none';
    newElem.style.padding = '25px';
    //adding static data for reference to div(new Element)
    newElem.innerHTML =    `
          <p class="txt-request light-gray">Thank you for connecting with us.We will respond to you shortly. </p>
          <div class="share-page share-page-top mt-50">
          <div class="social-share social-txt"><span>Follow us:</span></div>
          <div class="social-share social-icons"><a target="_blank" title="Follow us on Linkedin" class="socialTitle" href="https://www.linkedin.com/company/infosys"><img src="/content/dam/infosys-web/en/careers/Images/2020/linkedin.png" alt="Linkedin" class="img-responsive"></a></div>
          <div class="social-share social-icons"><a target="_blank" title="Follow us on Instagram" class="socialTitle" href="https://www.instagram.com/infosys/"><img src="/content/dam/infosys-web/en/careers/Images/2020/instagram.png" alt="Instagram" class="img-responsive"></a></div>
          </div>
          
    `
    //append everything starts here
    mainDiv.appendChild(serviceSectionElem);
    serviceSectionElem.appendChild(serviceArticleElem);
    serviceArticleElem.appendChild(serviceContainerDiv);
    serviceContainerDiv.appendChild(insideServiceContainerFirstDiv);
    insideServiceContainerFirstDiv.appendChild(insideServiceContainerHeader);
    insideServiceContainerFirstDiv.appendChild(insideServiceContainerPara);
    serviceContainerDiv.appendChild(insideServiceContainerSecondDiv);
    insideServiceContainerSecondDiv.appendChild(serviceContainerSecondDiv);
    serviceContainerSecondDiv.appendChild(insideSecondDivForm);
    serviceContainerSecondDiv.appendChild(newElem);
    //append everything ends here

// var divmodal = document.createElement('div');
//     divmodal.innerHTML = `<!-- The Modal -->
// <div id="myModal" class="modal">
//   <!-- Modal content -->
//   <div class="modal-content">
//     <span class="close">×</span>
//     <p id="emailDisplay"></p>
//   </div>
// </div>`;
var emailInput = document.querySelector("#email");

// Add an event listener to the email input element
emailInput.addEventListener("input", function() {
    // Get the value of the email input
    var emailValue = emailInput.value;
//var myDate = new Date();
//myDate.setMonth(myDate.getMonth() + 12);
    // Set the cookie with the email value
    document.cookie = "email=" + emailValue;
   // expires=" + myDate + ";domain=.hlx.live;path=https://main--boilerplate--arja-sankar.hlx.live/";
});

// Get the modal
var modal = document.getElementById("myModal");
// Get the email display element in the modal
var emailDisplay = document.getElementById("emailDisplay");

// When the user submits the form, open the modal and display the email
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    modal.style.display = "block";
    emailDisplay.innerHTML = "Registered Successfully " ;
   // + decodeURIComponent(document.cookie).split(';')[0].split('=')[1];
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

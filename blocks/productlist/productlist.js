const main = document.querySelector('[data-block-name="productlist"]');
const productType = main.children[0].children[0].innerHTML;
console.log("Product Type = "+productType);
function getData() {

    let apiUrl = "";
    if(productType !== 'undefined' && productType !== '' &&( productType === 'smartphones' || productType === 'smartphone')){
        apiUrl = "https://dummyjson.com/products/category/smartphones";
    } else if(productType !== 'undefined' && productType !== '' && productType === 'laptops'){
        apiUrl = "https://dummyjson.com/products/category/laptops";

    } else if(productType !== 'undefined' && productType !== '' && productType === 'fragrances'){
        apiUrl = "https://dummyjson.com/products/category/fragrances";

    } else{
        apiUrl = "https://dummyjson.com/products";
    }
    console.log("Api URL is : "+apiUrl);
    fetch(apiUrl)
      .then(res => {
        return res.json();
      })
      .then(json => {
        const html = json.products
          .map(function(item) {
            return  "<div class='product'><img src="+ item.thumbnail +" alt=''><h4 class='product-name'>" + item.title + "</h4><div class='product-description'>" + item.description + "</div><h4 class='product-name'>" +"$"+ item.price + "</h4><button class='btn btn-buy'>Add to cart</button></div>";
          })
          .join("");
          main.innerHTML = html;
        //document.querySelector('[data-block-name="productlist"]').insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getData();
  
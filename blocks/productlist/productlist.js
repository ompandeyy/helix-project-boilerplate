function getData() {
    fetch("https://dummyjson.com/products")
      .then(res => {
        return res.json();
      })
      .then(json => {
        console.log(json.products);
        const html = json.products
          .map(function(item) {
            return  "<div class='product'><img src="+ item.thumbnail +" alt=''><h4 class='product-name'>" + item.title + "</h4><div class='product-description'>" + item.description + "</div><h4 class='product-name'>" +"$"+ item.price + "</h4><button class='btn btn-buy'>Add to cart</button></div>";
          })
          .join("");
        console.log(html);
        document.querySelector('[data-block-name="productlist"]').insertAdjacentHTML("afterbegin", html);
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  getData();
  
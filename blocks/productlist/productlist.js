const productTypeLaptop = `<div class="wrapper">
<div class="product">
  <img src="https://i.dummyjson.com/data/products/6/thumbnail.png" alt="">
  <h4 class="product-name">MacBook Pro</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/7/thumbnail.jpg" alt="">
  <h4 class="product-name">Samsung Galaxy Book</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/8/thumbnail.jpg" alt="">
  <h4 class="product-name">Microsoft Surface Laptop 4</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/9/thumbnail.jpg" alt="">
  <h4 class="product-name">Infinix INBOOK</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/10/1.jpg" alt="">
  <h4 class="product-name">HP Pavilion 15-DK1056WM</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
</div>`;

const productTypeSmartPhone = `<div class="wrapper">
<div class="product">
  <img src="https://i.dummyjson.com/data/products/1/thumbnail.jpg" alt="">
  <h4 class="product-name">iPhone 9</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"" alt="">
  <h4 class="product-name">iPhone X</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/3/1.jpg" alt="">
  <h4 class="product-name">Samsung Universe 9</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" alt="">
  <h4 class="product-name">OPPOF19</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
<div class="product">
  <img src="https://i.dummyjson.com/data/products/5/thumbnail.jpg" alt="">
  <h4 class="product-name">Huawei P30</h4>
  <button class="btn btn-buy">Add to cart</button>
</div>
</div>`;
const main = document.querySelector('[data-block-name="productlist"]');
const productType = main.children[0].children[0].innerHTML;
//const productBrand = main.children[0].children[0].children[1].innerHTML;
console.log("Product Type  : "+productType);
//console.log("Product Brand  : "+productBrand);
if(productType !== null && productType !== 'undefined' && productType === 'Category- Smartphone'){
console.log("Product Type Smartphone is Avalaible : "+productType);
main.innerHTML = productTypeSmartPhone;
} else if(productType !== null && productType !== 'undefined' 
&& productType === 'Category- Laptop'){
    main.innerHTML = productTypeLaptop;
    console.log("Product Type Laptop is Avalaible : "+productType);
}
//main.innerHTML = scriptHTML;

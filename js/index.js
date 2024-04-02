var productName=document.getElementById("product-Name");
var productPrice=document.getElementById("product-Price");
var productCategory=document.getElementById("product-Category");
var addBtn=document.getElementById("addBtn")
var productContainer=[];
 
mainindex=0;
//locAL storage
if(localStorage.getItem('productList') != null){
    productContainer=JSON.parse(localStorage.getItem('productList'));
    //call  display function 
    display()
}

// add function 
function addProduct(){
    if( addBtn.innerHTML=="Update Product"){
        addBtn.innerHTML=="Add Product"
    
var products={
    Name:productName.value,
    price:productPrice.value,
    Category: productCategory.value
}
productContainer.splice(mainindex,1, products)
    }
    else{
        var products={
            Name:productName.value,
            price:productPrice.value,
            Category: productCategory.value
        }
    
    
productContainer.push(products);
    }
localStorage.setItem('productList',JSON.stringify( productContainer))
display()
clear()
}



//  هخزن الداتا بتاعتي ف تابل function
function display(){
    var allProducts=``;
    for(var i=0;i<productContainer.length ;i++ ){
        allProducts +=
        `<tr>
        <td >${i}</td>
        <td >${productContainer[i].Name}</td>
        <td >${productContainer[i].price}</td>
        <td >${productContainer[i].Category}</td>
        <td><button type="button" class="btn btn-success m-2 " onclick='update(${i})'>update</button></td>
        <td><button type="button" class="btn btn-danger m-2 " onclick='delet(${i})'>Delete</button></td>
      </tr>`
    }
    document.getElementById('tableBody').innerHTML= allProducts;
}

//  Delete function
    function delet(index){
        productContainer.splice(index,1)
        localStorage.setItem('productList',JSON.stringify( productContainer))
        display()
        clear()
}

// clear  function
function clear(){
    productName.value='';
    productPrice.value='';
    productCategory.value='';
}
// update function
 function update(Index){
    productName.value=productContainer[Index].Name;
    // price  مش بترجع زي الباقي في الفورم
    productPrice.value=productContainer[Index].Price;
    productCategory.value=productContainer[Index].Category;
    addBtn.innerHTML="Update Product";
    mainindex=Index;
    
 }
//  function search
 function search(searchTxt){
    var trs="";
 for( var i=0; i< productContainer.length ;i++){
      if( productContainer[i].Name.toLowerCase().includes(searchTxt.toLowerCase()) ){
      trs+=
      `<tr>
        <td >${i}</td>
        <td >${productContainer[i].Name}</td>
        <td >${productContainer[i].price}</td>
        <td >${productContainer[i].Category}</td>
        <td><button type="button" class="btn btn-success m-2 " onclick='update(${i})'>update</button></td>
        <td><button type="button" class="btn btn-danger m-2 " onclick='delet(${i})'>Delete</button></td>
      </tr>`}

 }
 document.getElementById("tableBody").innerHTML=trs;
}
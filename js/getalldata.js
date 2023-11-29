////////////////////////////////
//PL Code
function getAllProduct_Click() {
  getallproduct();
}

// BLL Code
function respondallproduct() {
  var data = this.responseText;
  var jsObject = JSON.parse(data);
  var arr = jsObject.products; // It returns an array from jsObject (because value of products is an array)
  // Here we create table headings in string format
  var tableData = `
    <table class="table table-hover table-sm">
        <thead>
             <tr>
                <th>ID</th>
                <th>TITLE</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>BRAND</th>
                <th>CATEGORY</th>                                
             </tr>
        </thead> `;
  for (var i = 0; i < arr.length; i++) {
    var e = arr[i];
    tableData += `
            <tbody>
            <tr>
                <td>${e.id}</td>
                <td>${e.title}</td>
                <td>${e.price}</td>
                <td>${e.stock}</td>
                <td>${e.brand}</td>
                <td>${e.category}</td>                            
            </tr>
            </tbody>`;
  }
  tableData += `</table>`;
  document.getElementById("showAllData").innerHTML = tableData;
}

function getallproduct() {
  var r = new XMLHttpRequest();

  r.open("GET", "https://dummyjson.com/products");

  r.onload = respondallproduct;
  r.send();
}

//////////////////////////////////
// //PL Code
// function getAllProduct_Click(){
//     getallproduct();
// }

// function getSingleProduct_Click(){
// var id=document.getElementById("txtId").value;
// getsingleproduct(id);
// }
// // BLL Code
// function respondallproduct(){
// var data=this.responseText;
// document.getElementById("showAllData").innerText=data;
// }

// function getallproduct(){
//     var r= new XMLHttpRequest();
//     r.open('GET','https://dummyjson.com/products');
//     r.onload= respondallproduct;
//     r.send();
// }

// function getsingleproduct(id){
//     var r= new XMLHttpRequest();
//     r.open('GET',`https://dummyjson.com/products/${id}`);
//     r.onload= respondallproduct;
//     r.send();
// }

// or try this

// function getSingleProduct_Click(){
//     var id=document.getElementById("txtId").value;
//     getsingleproduct(id);

// }

// function getsingleproduct(id){
//     var r= new XMLHttpRequest();
//     r.onload= function(){
//         document.getElementById("showAllData").innerHTML=this.responseText;
//     }
//     r.open('GET',`https://dummyjson.com/products/${id}`);
//     r.send();
// }

// function  getAllProduct_Click(){
//     var r= new XMLHttpRequest();
//     r.onload=function(){
//      document.getElementById("showAllData").innerHTML=this.responseText;
//     }
//     r.open('GET','https://dummyjson.com/products');
//     r.send();
// }

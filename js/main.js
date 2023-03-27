let pn = document.querySelector(".Product-Name");
let pp = document.querySelector(".Product-price");
let pc = document.querySelector(".category");
let pd = document.querySelector(".Description");
    let updateIndex;
    let AllProducts=[];

    if (localStorage.getItem("allproducts") != null) {
        AllProducts = JSON.parse(localStorage.getItem("allproducts"));
        DisplayProduct()
    }

function AddProuduct() {
    // console.log("done");
 if (nameValidathion() && CtegValidathion() &&  DescriptionValidathion() && pp.value !="") {

    if (document.querySelector(".btnADD").innerHTML == "Add Product") {
        //add product
        let product={
            name: pn.value,
            price: Number(pp.value),
            category: pc.value,
            Description: pd.value,
        }
        AllProducts.push(product)
        localStorage.setItem("allproducts",JSON.stringify(AllProducts));
        // console.log(product);
        ClearProduct()
        DisplayProduct()
      }
      else{
        //Update
        AllProducts[updateIndex].name =pn.value;
        AllProducts[updateIndex].price =Number(pp.value);
        AllProducts[updateIndex].category =pc.value;
        AllProducts[updateIndex].Description =pd.value;
        DisplayProduct()
        localStorage.setItem('allProducts',JSON.stringify(AllProducts));
        ClearProduct()
        document.querySelector(".btnADD").innerHTML = "Add Product"
      }
 }
 else{

    if (nameValidathion()) {
        document.querySelector(".Product-Name").classList.add("is-valid")
    }else{
        document.querySelector(".Product-Name").classList.remove("is-valid")
        document.querySelector(".Product-Name").classList.add("is-invalid")
    }


    if (CtegValidathion()) {
        document.querySelector(".category").classList.add("is-valid")
    }else{
        document.querySelector(".category").classList.remove("is-valid")
        document.querySelector(".category").classList.add("is-invalid")
    }

    if (DescriptionValidathion()) {
        document.querySelector(".Description").classList.add("is-valid")
    }else{
        document.querySelector(".Description").classList.remove("is-valid")
        document.querySelector(".Description").classList.add("is-invalid")
    }
    if (pp.value !="") {
        document.querySelector(".Product-price").classList.add("is-valid")
    }else{
        document.querySelector(".Product-price").classList.remove("is-valid")
        document.querySelector(".Product-price").classList.add("is-invalid")
    }


 }
 
    
}

function ClearProduct() {
    pn.value="";
    pp.value="";
    pc.value="";
    pd.value="";

    document.querySelector(".Product-Name").classList.remove("is-valid");
    document.querySelector(".Product-Name").classList.remove("is-invalid");
    document.querySelector(".Product-price").classList.remove("is-valid");
    document.querySelector(".Product-price").classList.remove("is-invalid");
    document.querySelector(".category").classList.remove("is-valid");
    document.querySelector(".category").classList.remove("is-invalid");
    document.querySelector(".Description").classList.remove("is-valid");
    document.querySelector(".Description").classList.remove("is-invalid");
}

function DisplayProduct() {
    let boxOfProducts='';
    for (let i = 0; i < AllProducts.length; i++) {
        boxOfProducts +=`<tr>
        <td> ${i+1}</td>
        <td> ${AllProducts[i].name}</td>
        <td> ${AllProducts[i].price}</td>
        <td> ${AllProducts[i].category}</td>
        <td> ${AllProducts[i].Description}</td>
        <td> <button onclick='update(${i})' class="btn btn-outline-primary">Update</button> </td>
        <td> <button onclick='DeleteBtn(${i})' class="btn btn-outline-danger">Delete</button> </td>
    </tr>`
    }
    document.querySelector("tbody").innerHTML=boxOfProducts
}

function DeleteBtn(index) {
    AllProducts.splice(index,1)
    localStorage.setItem("allproducts",JSON.stringify(AllProducts));
    DisplayProduct()
}

function Search(search) {

    let boxOfProducts='';

    for (let i = 0; i < AllProducts.length; i++) {
        if (AllProducts[i].name.toLowerCase().indexOf(search.toLowerCase()) == 0) {
            boxOfProducts +=`<tr>
            <td> ${i+1}</td>
            <td> ${AllProducts[i].name}</td>
            <td> ${AllProducts[i].price}</td>
            <td> ${AllProducts[i].category}</td>
            <td> ${AllProducts[i].Description}</td>
            <td> <button onclick='update(${i})' class="btn btn-outline-primary">Update</button> </td>
            <td> <button onclick='DeleteBtn(${i})' class="btn btn-outline-danger">Delete</button> </td>
        </tr>`
        }
            
    }
    document.querySelector("tbody").innerHTML=boxOfProducts;
   
}

function update(idx) {
    updateIndex= idx;
//    console.log(idx);
   pn.value = AllProducts[idx].name;
   pp.value = AllProducts[idx].price;
   pc.value = AllProducts[idx].category;
   pd.value = AllProducts[idx].Description;

   document.querySelector('.btnADD').innerHTML="Update";
}

function nameValidathion() {
    let Regex= /^[A-Z][a-z]{3,15}$/i;
    // console.log(Regex.test(pn.value));
    return Regex.test(pn.value);
}

function CtegValidathion() {
    let Regex= /^[A-Z][a-z]{3,15}$/i;
    // console.log(Regex.test(pn.value));
    return Regex.test(pn.value);
}

function DescriptionValidathion() {
    let Regex= /^[A-Z][a-z]{3,100}$/i;
    // console.log(Regex.test(pn.value));
    return Regex.test(pn.value);
}
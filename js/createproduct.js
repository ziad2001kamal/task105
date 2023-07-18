let proudcts = JSON.parse(localStorage.getItem("products"));

let createProductImage = document.getElementById("createProductImage");
let createProductname = document.getElementById("createProductname");
let price = document.getElementById("price");
let productDesc = document.getElementById("product-desc");
let create = document.getElementById("create");
create.addEventListener("submit", createproject);
createProductImage.addEventListener("change", uploadImage);
let productImage;

// console.log(ProductUI)
//     })
// }  let ProductUI = proudcts.map((item) => {
function createproject(e) {
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) || CardsProduct;

    let obj = {
        id: proudcts.length + 1,
        title: createProductname.value,
        parag: productDesc.value,
        imgUrl: productImage,
        salary: price.value
    }
    let newProducts = allProducts ? [...allProducts, obj] : [obj];
    localStorage.setItem("products", JSON.stringify(newProducts));
    createProductname.value = "";
    productDesc.value = "";
    price.value = "";
    setTimeout(() => {
        window.location = "index.html";
    }, 500);
}


// uploadImage
function uploadImage() {
    let file = this.files[0];
    let types = ["image/jpeg", "image/png"];

    if (types.indexOf(file.type) == -1) {
        alert("Type not Supported");
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert("Image not Exced 2MG");
        return;
    }

    getImageBase64(file);
    // productImage = URL.createObjectURL(file);
}

function getImageBase64(file) {
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = function () {
        productImage = reader.result;
    };

    reader.onerror = function () {
        alert("Error !!");
    };
}
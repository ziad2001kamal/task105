let addcart = document.getElementById("addCards");
let noproduct = document.getElementById("noproduct");


function drawProductUI(allProduct = []) {
    if ((JSON.parse(localStorage.getItem("favaritcard"))).length === 0) {
        noproduct.innerHTML = "no produts in cart"
    } else {
        let Products = JSON.parse(localStorage.getItem("favaritcard")) || allProduct;
        let ProductUI = Products.map((item) => {
            return `<div class="col-sm-10 col-md-5 col-lg-3 mt-4 ">
            <div class="card d-flex justify-content-center align-items-center" style="width: 18rem;">
            <div class="cardsmallicon ">
            <button ><i class="fa-solid fa-heart"></i></button>
                <button  onclick="removetocart(${item.id})"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <img src="${item.imgUrl}" class="card-img-top mt-3" alt="...">
            <div class="card-body text-center">
                <h3 class="card-title fw-bold">${item.title}</h3>
                <p class="card-text">${item.parag}</p>
                <h3 id="salary" class="salary ">${item.salary}</h3>
                <div class="m-2">
                <i class="fa-solid fa-star"><span class="a-icon-alt">
                    out of 5 stars</span></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn btn-primary" id="addcart">Add To Cart</a>
            </div>
            </div>
        </div> `
        });

        let z = document.createElement("div");
        z.setAttribute("class", "row mt-5 d-sm-flex justify-content-sm-center");
        z.innerHTML = ProductUI.join("");
        addcart.appendChild(z);

    }


}
drawProductUI();
function removetocart(id) {
    let favaritcard = localStorage.getItem('favaritcard');
    if (produtcincart) {
        let items = JSON.parse(favaritcard);
        let filteredItems = items.filter((item) => item.id !== id);
        localStorage.setItem("favaritcard", JSON.stringify(filteredItems));
        drawProductUI(filteredItems);
    }


}
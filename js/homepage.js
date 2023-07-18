
let imgsmall = document.querySelector(".aboutsmallimage");
let imgbig = document.querySelector(".aboutbigimage");
let stop = document.getElementById("stop");
let welcomeuser = document.getElementById("welcomeuser");
let nameuser = document.createElement("p");
let proudcts = JSON.parse(localStorage.getItem("products"));


let usernameText = document.createTextNode(`${localStorage.getItem("username")}`)
nameuser.setAttribute("class", "username-afterwelcome");
nameuser.appendChild(usernameText);
welcomeuser.appendChild(nameuser);
//card-product
let cards = document.getElementById("cards");

function drawProductUI() {
    let ProductUI = proudcts.map((item) => {
        return `<div class="col-sm-10 col-md-5 col-lg-3 mt-4 ">
            <div class="card d-flex justify-content-center align-items-center" style="width: 18rem;">
            <div class="cardsmallicon ">
            <button onclick="addedfav(${item.id})"><i class="fa-solid fa-heart "></i></button>
                <button  onclick="addedtocart(${item.id})"><i class="fa-solid fa-cart-shopping"></i></button>
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
    if (document.URL.includes("index.html")) {
        let z = document.createElement("div");
        z.setAttribute("class", "row mt-5 d-sm-flex justify-content-sm-center");
        z.innerHTML = ProductUI.join("");
        cards.appendChild(z);
    } else {
        console.log("first")
    }
    // myaddCart.innerHTML = ProductUI

}


drawProductUI();
let arrnew = localStorage.getItem("prouductcard") ? JSON.parse(localStorage.getItem("prouductcard")) : [];

let myaddCart = document.getElementById("addCards");

function addedtocart(id) {
    let choseitem = CardsProduct.find((item) => item.id === id);
    arrnew = [...arrnew, choseitem];
    let uniq = getUniqueArr(arrnew, "id")
    localStorage.setItem("prouductcard", JSON.stringify(uniq));
}

function checkuser() {
    if (localStorage.getItem("username")) {
        console.log("add to cart")
    } else {
        window.location.href = "/login.html"
    }
}
if (document.URL.includes("index.html")) {

    console.log(imgsmall.src)
    function onimge(small) {
        imgbig.src = small.src
    }
}
function getUniqueArr(arr, filterType) {
    let unique = arr
        .map((item) => item[filterType])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item]);
    return unique;
}

//Switch theme/add to local storage
const body = document.body;
const themeToggleBtn = document.querySelector("#theme-toggle-btn");
const currentTheme = localStorage.getItem('currentTheme');

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
if (currentTheme) {
    body.classList.add('light-theme');

}

themeToggleBtn.addEventListener('click', function () {
    // Add light theme on click
    body.classList.toggle('light-theme');


    // If the body has the class of light theme then add it to local Storage, if not remove it
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
        let myelment = document.querySelector(".landing");
        myelment.style.backgroundImage = "url('img/bg1dark.jpg')";
        let theme = document.querySelector("#theme-toggle-btn");
        theme.innerHTML = '<i class="fa-solid fa-moon text-dark"></i>'
    } else {
        localStorage.removeItem('currentTheme');
        let myelment = document.querySelector(".landing");
        myelment.style.backgroundImage = "url('img/bg1.png')";
        let theme = document.querySelector("#theme-toggle-btn");
        theme.innerHTML = '<i class="fa-solid fa-sun text-white"></i>'
    }
});
let arrnewfav = localStorage.getItem("favaritcard") ? JSON.parse(localStorage.getItem("favaritcard")) : [];

function addedfav(id) {
    let choseitem = CardsProduct.find((item) => item.id === id);
    arrnewfav = [...arrnewfav, choseitem];
    let uniq = getUniqueArr(arrnewfav, "id")
    localStorage.setItem("favaritcard", JSON.stringify(uniq));
}
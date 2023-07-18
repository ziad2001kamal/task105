let username = document.getElementById("username");
let pass = document.getElementById("Password");
let Email = document.getElementById("Email");
let confirm = document.getElementById("confirm");

confirm.onclick = function (e) {
    e.preventDefault();
    if (username.value === " " || Email.value === "" || pass.value === "") {
        console.log("faild");
        alert("pleas fill data");
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", Email.value);
        localStorage.setItem("pass", pass.value);

    }
    setTimeout(() => {
        window.location = "login.html";
    }, 1500);
}



let email = document.getElementById("Email");
let password = document.getElementById("Password");
let login = document.getElementById("login");
let getemail = localStorage.getItem("email");
let getpassword = localStorage.getItem("pass");

login.addEventListener("click", function (e) {
    e.preventDefault();
    if (Email.value === "" || password.value === "") {
        console.log("faild");
        alert("pleas fill data");
    } else {
        if (getemail && getemail.trim() === email.value && getpassword && getpassword === password.value) {
            setTimeout(() => {
                window.location = "index.html";
            }, 1500);
        }
    }
})

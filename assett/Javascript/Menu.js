// Ganti Gambar
const Gambar = document.getElementById("Gambar");
function GantiGambar(){   
      Gambar.src = "../assett/img/Logo Dark Mode.png";
}

// Nav Scroll
window.onscroll = function () { menu() };


function menu() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("header").classList.add("bg-white");
        document.getElementById("header").classList.add("shadow-lg")
    }

    else {
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("header").classList.remove("shadow-lg")
    }
}

// Darkmode Toggle
const darktoggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darktoggle.addEventListener("click", function(){
    if(darktoggle.checked){
html.classList.add("dark");
    }
    else {
        html.classList.remove("dark");
    }
})

// Validasi

const email = document.getElementById("email");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.querySelector("form");
const errormessage = document.getElementById("errormessage");

form.addEventListener("submit", (e) => {
 const error = [];
 if (email.value.trim() === ""){
 error.push("Alamat Email Anda Harus Diisi")
}

if (password.value.length < 4){
 error.push("Password Anda Kurang Dari 4")
}

if (password.value.trim() === ""){
 error.push("Password Anda Harus Diisi")
}

if(error.length > 0) {
 e.preventDefault();
 errormessage.toggleAttribute("hidden");
 errormessage.innerHTML = error.join(", ");
}
})

// Login Modal

function KlikModal(){
     document.getElementById("Modal").classList.add("flex");
     document.getElementById("Modal").classList.remove("hidden");
 
}

function TutupModal(){
 document.getElementById("Modal").classList.add("hidden");
 document.getElementById("Modal").classList.remove("flex");
}
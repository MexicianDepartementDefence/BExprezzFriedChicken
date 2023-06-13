// Darkmode Toggle
const darktoggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darktoggle.addEventListener("click", function(){
    if(darktoggle.checked){
html.classList.add("dark");
localStorage.theme = "dark";
    }
    else {
        html.classList.remove("dark");
        localStorage.theme = "light";
    }
});

let changeIcon = function(icon){
    if (darktoggle.checked){
       icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon"); 
    }

    else{
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");  
    }
    
}



// Login Modal

function KlikModal(){
     document.getElementById("Modal").classList.add("flex");
     document.getElementById("Modal").classList.remove("hidden");
 
}

function TutupModal(){
 document.getElementById("Modal").classList.add("hidden");
 document.getElementById("Modal").classList.remove("flex");
}

// Hamburger Menu

let ham = document.getElementById("hamm");
let xstatus = false;
function Open(){

console.log(xstatus)

    if(xstatus){
ham.classList.add("w-[75%]");
ham.classList.remove("w-0");
xstatus = false;
    }
    else{
ham.classList.add("w-0");
ham.classList.remove("w-[75%]");
xstatus = true;
    }
}


// Nav Scroll
window.onscroll = function () { menu() };
let ystatus = false;

function menu() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("header").classList.add("bg-white");
        document.getElementById("header").classList.add("shadow-lg");
    }

    else {
        document.getElementById("header").classList.remove("bg-white");
        document.getElementById("header").classList.remove("shadow-lg");
    }
}



// Validasi Login

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");
const errormessage = document.getElementById("errormessage")

form.addEventListener("submit", (e) => {
 const error = [];

 if(email.value.trim() === ""){
    error.push("Data Anda Harus Diisi")
 }

 if (email.value.trim() === ""){
 email.style.borderColor = "red"

}

if (password.value.length < 4){
 password.style.borderColor = "red"
}

if (password.value.trim() === ""){
    password.style.borderColor = "red"
}

if(error.length > 0){
    e.preventDefault();
    errormessage.toggleAttribute('hidden');
    errormessage.innerHTML = error.join(',')
}
});

// Register Modal

function Register(){
    document.getElementById("Login").classList.remove("flex");
    document.getElementById("Login").classList.add("hidden");
    document.getElementById("Register").classList.add("flex");
    document.getElementById("Register").classList.remove("hidden");
}


function TutupRegister(){
    document.getElementById("Login").classList.remove("hidden");
    document.getElementById("Login").classList.add("flex");
    document.getElementById("Register").classList.add("hidden");
    document.getElementById("Register").classList.remove("flex");
};

// Validasi Register

const RegisterEmail = document.getElementById("AlamatEmail");
const Password1 = document.getElementById("KataSandi");
const Password2 = document.getElementById("KonfirmasiKataSandi");
const checkbox = document.getElementById("checkbox");
const Dokumen = document.getElementById("Dokumen");
const Alamat = document.getElementById("alamat");
const nama = document.getElementById("nama");
const pesanerror = document.getElementById("errormessage");

Dokumen.addEventListener("click", (e) => {
    const errors = [];

    if(RegisterEmail.value.trim() === ""){
        errors.push("Anda Harus Mengisi Datanya Dengan Benar")
    }

    if (RegisterEmail.value.trim() === ""){
        RegisterEmail.style.borderColor = "red"
    }

    if (Password1.value.trim() === ""){
        Password1.style.borderColor = "red"
    }

    if(Password2.value.trim() === ""){
    Password2.style.borderColor = "red"
    }

    if(Alamat.value.trim() === ""){
        Alamat.style.borderColor = "red"
    }

    if(nama.value.trim() === ""){
        nama.style.borderColor = "red"
    }

    if(errors.length > 0){
        e.preventDefault();
        pesanerror.toggleAttribute("hidden");
        pesanerror.innerHTML = errors.join(", ")

    }
})




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

// Modal Alamat

function BukaAlamat(){
    document.getElementById("Pembayaran").classList.remove("flex");
    document.getElementById("Pembayaran").classList.add("hidden");
    document.getElementById("Alamat").classList.add("flex");
    document.getElementById("Alamat").classList.remove("hidden");
}

// Modal Alat Pembayaran
function BukaAlat(){
    document.getElementById("AlatPembayaran").classList.add("flex");
    document.getElementById("AlatPembayaran").classList.remove("hidden");
    document.getElementById("Alamat").classList.add("hidden");
    document.getElementById("Alamat").classList.remove("flex");  
}


// Modal Gopay
function BukaGopay(){
    document.getElementById("Gopay").classList.add("flex");
    document.getElementById("Gopay").classList.remove("hidden");
    document.getElementById("AlatPembayaran").classList.add("hidden");
    document.getElementById("AlatPembayaran").classList.remove("flex");  
}

function BukaDana(){
    document.getElementById("Dana").classList.add("flex");
    document.getElementById("Dana").classList.remove("hidden");
    document.getElementById("AlatPembayaran").classList.add("hidden");
    document.getElementById("AlatPembayaran").classList.remove("flex");  
}

function BukaCard(){
    document.getElementById("KartuKredit").classList.add("flex");
    document.getElementById("KartuKredit").classList.remove("hidden");
    document.getElementById("AlatPembayaran").classList.add("hidden");
    document.getElementById("AlatPembayaran").classList.remove("flex");  
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

let xstatus = false;



function showHideMenu() {
  let menu = document.getElementById("daftarMenu");
  if(xstatus) {
    menu.classList.add("flex");
    menu.classList.remove("hidden");
    xstatus = false;
  }
  else {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
    xstatus = true;
  }
}


// Nav Scroll
window.onscroll = function () { menu() };
let ystatus = false;

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



// Validasi Login

const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
 const error = [];
 if (email.value.trim() === ""){
 email.style.borderColor = "red"
}

if (password.value.length < 4){
 password.style.borderColor = "red"
}

if (password.value.trim() === ""){
    password.style.borderColor = "red"
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

Dokumen.addEventListener("click", (e) => {
    const errors = []
    if (RegisterEmail.value.trim() === ""){
        RegisterEmail.style.borderColor = "red"
    }

    if (Password1.value.trim() === ""){
        Password1.style.borderColor = "red"
    }

    if(Password2.value.trim() === ""){
    Password2.style.borderColor = "red"
    }

    if(checkbox.value.trim() === ""){
        checkbox.style.borderColor = "red"
    }
});

// Modal Pembayaran
function KlikPembayaran(){
    document.getElementById("Payment").classList.add("flex");
    document.getElementById("Payment").classList.remove("hidden");
}

function TutupPembayaran(){
    document.getElementById("Payment").classList.add("hidden");
    document.getElementById("Payment").classList.remove("flex"); 
}

// Number Spinner

const counter = document.getElementById("counter");
const inpt = document.getElementById('inputCheckbox');
const input2 = document.getElementById("inputCheckbox2");
let countervalue = counter.value;



let totalQuantity = 0
const harga = document.getElementById("Harga");
harga.textContent = totalQuantity


inpt.addEventListener('click', (e) => {
    console.log(e.target.checked)
    console.log(e.target.value)

    if(e.target.checked) {
        totalQuantity += Number(e.target.value)
        harga.textContent = `${totalQuantity}.000,00`
    } else {
        totalQuantity -= Number(e.target.value)
        if(totalQuantity == 0) {
            harga.textContent = `${totalQuantity}`
        }
    }
})

function handleCounterPlus(){
    counter.value = ++countervalue
    totalQuantity = totalQuantity *= countervalue
    harga.textContent = `${totalQuantity}.000,00`
    console.log(countervalue)
    console.log(totalQuantity)
}

function handleCounterMinus(){
    counter.value = --countervalue
    totalQuantity = totalQuantity /= countervalue
    harga.textContent = `${totalQuantity}.000,00`
    console.log(countervalue)
    console.log(totalQuantity)
};

input2.addEventListener('click', (f) => {
if (f.target.checked) {
    totalQuantity += Number(f.target.value)
    harga.textContent = `${totalQuantity}.000,00`
}

else {
    totalQuantity -= Number(f.target.value)
    if(totalQuantity == 0) {
        harga.textContent = `${totalQuantity}`
    } 
}
})
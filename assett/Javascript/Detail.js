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

// Validation Pembayaran
const Lokasi = document.getElementById("Lokasi");
const Pilih = document.getElementById("Pilih");
const Mulih = document.querySelector("form");
const Pesan = document.getElementById("PesanError");
Mulih.addEventListener("submit", (j) => {
const elol = [];
if (Lokasi.value.trim() === ""){
    elol.push("Isilah Alamat Lokasi Dan Pilih Jasa Pembayaran Anda")
}

if (Pilih.value.trim() === ""){
    elol.push("Isilah Alamat Lokasi Dan Pilih Jasa Pembayaran Anda")
}
if(elol.length > 0){
    j.preventDefault();
    Pesan.toggleAttribute("hidden");
}
})


// Modal Login
function KlikModal(){
    document.getElementById("Modal").classList.add("flex");
    document.getElementById("Modal").classList.remove("hidden");

}

function TutupModal(){
document.getElementById("Modal").classList.add("hidden");
document.getElementById("Modal").classList.remove("flex");
}

// Modal Transcation
function KlikPembayaran(){
    document.getElementById("Pembayaran").classList.add("flex");
    document.getElementById("Pembayaran").classList.remove("hidden")
}

function TutupPembayaran(){
    document.getElementById("Pembayaran").classList.add("hidden");
    document.getElementById("Pembayaran").classList.remove("flex");
}

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

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
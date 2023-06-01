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

// Slider
// set the default active slide to the first one
let slideIndex = 1;
showSlide(slideIndex);

// change slide with the prev/next button
function moveSlide(moveStep) {
    showSlide(slideIndex += moveStep);
}

// change slide with the dots
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function showSlide(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.add('hidden');
    }


    // show the active slide
    slides[slideIndex - 1].classList.remove('hidden');

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
 email.style.borderColor = "red"
}

if (password.value.length < 4){
 password.style.borderColor = "red"
}

if (password.value.trim() === ""){
    password.style.borderColor = "red"
}
});


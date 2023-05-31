// Filter
const AyamGoreng = document.getElementById("AyamGoreng");
const Meenum = document.getElementById("Meenum");
const Dessert = document.getElementById("Desert");
const Meal = document.getElementById("Cemilan");
const SwipeAyam = document.getElementById("SwipeAyam");
const SwipeMinum = document.getElementById("SwipeMinum");
const SwipeDessert = document.getElementById("SwipeDessert");
const SwipeMeal = document.getElementById("SwipeNgemil");

AyamGoreng.addEventListener("click", function(){
    SwipeDessert.classList.remove("h-[500px]");
    SwipeDessert.classList.add("h-0");
    SwipeMinum.classList.remove("h-[500px]");
    SwipeMinum.classList.add("h-0");
})

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

/*==========================================
PRELOADER
==========================================*/

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});

/*==========================================
CUSTOM CURSOR
==========================================*/

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});

/*==========================================
SCROLL PROGRESS BAR
==========================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

/*==========================================
SCROLL TO TOP BUTTON
==========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

/*==========================================
STICKY HEADER
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(8,12,25,.92)";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.3)";

    } else {

        header.style.background = "rgba(10,10,30,.45)";

        header.style.boxShadow = "none";

    }

});

/*==========================================
ACTIVE NAVBAR
==========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==========================================
TYPING EFFECT
==========================================*/

const typing = document.getElementById("typing");

const words = [

    "Digital Marketing Expert",

    "Graphic Designer",

    "Sales Executive",

    "Video Editor",

    "Creative Thinker"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)

                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/*==========================================
MOBILE MENU
==========================================*/

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show-menu");
        menuBtn.classList.toggle("active");

    });

}

/*==========================================
CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show-menu");
        menuBtn.classList.remove("active");

    });

});

/*==========================================
THEME TOGGLE
==========================================*/

const themeBtn = document.getElementById("themeToggle");

let dark = true;

themeBtn.addEventListener("click", () => {

    dark = !dark;

    if (dark) {

        document.body.classList.remove("light");

        themeBtn.innerHTML = '<i class="ri-moon-fill"></i>';

    } else {

        document.body.classList.add("light");

        themeBtn.innerHTML = '<i class="ri-sun-fill"></i>';

    }

});

/*==========================================
BUTTON RIPPLE EFFECT
==========================================*/

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mousemove", function(e){

        const x = e.offsetX;
        const y = e.offsetY;

        this.style.setProperty("--x", x + "px");
        this.style.setProperty("--y", y + "px");

    });

});

/*==========================================
CARD HOVER
==========================================*/

const cards = document.querySelectorAll(

".skill-card,.service-card,.info-card,.contact-card,.timeline-content"

);

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

/*==========================================
SCROLL REVEAL
==========================================*/

const reveals=document.querySelectorAll(

".about,.skills,.experience,.services,.contact,.cta"

);

function revealSection(){

const trigger=window.innerHeight*0.85;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();

/*==========================================
IMAGE FLOAT
==========================================*/

const image=document.querySelector(".image-box");

let angle=0;

setInterval(()=>{

angle+=0.02;

image.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

},25);

/*==========================================
FLOATING CARDS
==========================================*/

const floatingCards=document.querySelectorAll(".floating-card");

floatingCards.forEach((card,index)=>{

let a=index;

setInterval(()=>{

a+=0.02;

card.style.transform=

`translateY(${Math.sin(a)*12}px)`;

},30);

});

/*==========================================
CONTACT FORM
==========================================*/

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const btn=form.querySelector("button");

btn.innerHTML="Sending...";

setTimeout(()=>{

btn.innerHTML="Message Sent ✓";

setTimeout(()=>{

btn.innerHTML="Send Message";

form.reset();

},2000);

},1200);

});

}

/*==========================================
SMOOTH HOVER GLOW
==========================================*/

document.querySelectorAll(

".skill-card,.service-card,.info-card"

).forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(0,229,255,.18),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});

/*==========================================
TEXT FADE
==========================================*/

const heroTitle=document.querySelector(".hero h1");

setInterval(()=>{

heroTitle.style.opacity=".96";

setTimeout(()=>{

heroTitle.style.opacity="1";

},400);

},4000);

/*==========================================
CONSOLE
==========================================*/

console.log(

"%cPortfolio Developed by Vinay",

"color:#00E5FF;font-size:18px;font-weight:bold"

);
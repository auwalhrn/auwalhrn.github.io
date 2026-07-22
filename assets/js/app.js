document.addEventListener("DOMContentLoaded", () => {

    /*==========================
    SMOOTH SCROLL
    ==========================*/

   document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        hamburger.classList.remove("active");

        overlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    });

});

overlay.addEventListener("click", () => {

    nav.classList.remove("active");

    hamburger.classList.remove("active");

    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

});

    /*==========================
    STICKY HEADER
    ==========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 30){

            header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.08)";

        }else{

            header.style.boxShadow = "none";

        }

    });


    /*==========================
    BACK TO TOP
    ==========================*/

    const topBtn = document.createElement("button");

    topBtn.id = "topBtn";

    topBtn.innerHTML =
    '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(topBtn);

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });


    /*==========================
    SCROLL REVEAL
    ==========================*/

    const reveals = document.querySelectorAll(".reveal");

    function revealSections(){

        reveals.forEach(section=>{

            const revealTop =
            section.getBoundingClientRect().top;

            const revealPoint = 120;

            if(revealTop < window.innerHeight - revealPoint){

                section.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", revealSections);

    revealSections();

});
/*==========================
MOBILE MENU
==========================*/

const hamburger = document.querySelector(".hamburger");

const nav = document.querySelector("nav");

const overlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");

    hamburger.classList.toggle("active");

    overlay.classList.toggle("active");

    document.body.classList.toggle("menu-open");

});

/*==========================
DARK MODE
==========================*/

const themeBtn = document.getElementById("theme-toggle");

const themeIcon = themeBtn.querySelector("i");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark");

    themeIcon.className = "fa-solid fa-sun";

}

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeIcon.className="fa-solid fa-sun";

        localStorage.setItem("theme","dark");

    }

    else{

        themeIcon.className="fa-solid fa-moon";

        localStorage.setItem("theme","light");

    }

});

/*====================================
PREMIUM ANIMATED COUNTERS
====================================*/

const counters = document.querySelectorAll(".counter");

let countersPlayed = false;

function animateCounters() {

    if (countersPlayed) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 120) {

        countersPlayed = true;

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            const prefix = counter.dataset.prefix || "";

            const suffix = counter.dataset.suffix || "";

            let current = 0;

            const duration = 1800;

            const stepTime = 16;

            const increment = target / (duration / stepTime);

            function updateCounter() {

                current += increment;

                if (current >= target) {

                    counter.textContent =
                        prefix + target + suffix;

                } else {

                    counter.textContent =
                        prefix +
                        Math.floor(current) +
                        suffix;

                    requestAnimationFrame(updateCounter);

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", animateCounters);

animateCounters();
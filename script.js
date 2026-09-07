/* =========================================
   PASSWORD
========================================= */

function checkPassword(){

    const password =
        document.getElementById("passwordInput").value;

    if(password === "080910"){

        document.getElementById("passwordScreen")
            .style.display = "none";

        document.getElementById("websiteContent")
            .style.display = "block";

    }else{

        alert("Wrong Password 🤍");

    }

}


/* =========================================
   OPEN GIFT
========================================= */

function openGift(){

    const music =
        document.getElementById("music");

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });

    document.getElementById("giftSection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   ENTER KEY PASSWORD
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const passwordInput =
        document.getElementById("passwordInput");

    if(passwordInput){

        passwordInput.addEventListener("keypress", function(event){

            if(event.key === "Enter"){

                checkPassword();

            }

        });

    }

});


/* =========================================
   FLOATING HEARTS
========================================= */

function createHeart(){

    const heart =
        document.createElement("div");

    heart.innerHTML = "🤍";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.top = "-30px";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    heart.style.opacity =
        Math.random() * 0.7 + 0.3;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "5";

    heart.style.animation =
        `fall ${Math.random() * 4 + 6}s linear`;

    document.getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 400);


/* =========================================
   HEART ANIMATION
========================================= */

const style =
    document.createElement("style");

style.innerHTML = `

@keyframes fall{

    0%{
        transform:translateY(0) rotate(0deg);
        opacity:1;
    }

    100%{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }

}

.fade-in{

    opacity:0;

    transform:
    translateY(40px);

    transition:
    all 1s ease;

}

.fade-in.show{

    opacity:1;

    transform:
    translateY(0);

}

`;

document.head.appendChild(style);


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });


document.querySelectorAll(
    ".section,.polaroid,.reason-card,.final-section,.ending"
).forEach(el => {

    el.classList.add("fade-in");

    observer.observe(el);

});


/* =========================================
   POLAROID EFFECT
========================================= */

const polaroids =
    document.querySelectorAll(".polaroid");

polaroids.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "scale(1.08) rotate(0deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   PARALLAX HERO
========================================= */

window.addEventListener("scroll", () => {

    const hero =
        document.querySelector(".hero");

    if(!hero) return;

    const scroll =
        window.pageYOffset;

    hero.style.backgroundPositionY =
        scroll * 0.4 + "px";

});


/* =========================================
   RANDOM QUOTES
========================================= */

const quotes = [

    "Happy 16th Birthday, Keii 🤍",

    "Semoga tahun ke-16 jadi tahun yang indah ✨",

    "Elu lah bestie gw selamanya🫢",

    "Semoga urusannya selalu dilancarkan 🤍",

    "Semoga rezekinya selalu dilancarkan ✨",

    "The best is still ahead of you 📖",

    "Keep being the wonderful Keii you are 🤍"

];


const quoteElement =
    document.createElement("div");

quoteElement.className =
    "floating-quote";

quoteElement.innerText =
    quotes[0];

document.body.appendChild(
    quoteElement
);


let currentQuote = 0;


setInterval(() => {

    currentQuote++;

    if(currentQuote >= quotes.length){

        currentQuote = 0;

    }

    quoteElement.style.opacity = 0;

    setTimeout(() => {

        quoteElement.innerText =
            quotes[currentQuote];

        quoteElement.style.opacity = 1;

    }, 500);

}, 5000);


/* =========================================
   QUOTE STYLE
========================================= */

const quoteStyle =
    document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

    position:fixed;

    bottom:20px;

    left:50%;

    transform:
    translateX(-50%);

    background:
    rgba(255,255,255,.08);

    backdrop-filter:
    blur(10px);

    padding:
    12px 20px;

    border-radius:
    50px;

    font-size:
    14px;

    color:
    white;

    z-index:
    999;

    transition:
    .5s;

    text-align:
    center;

    white-space:
    nowrap;

}

@media(max-width:600px){

    .floating-quote{

        font-size:12px;

        max-width:90%;

        white-space:normal;

    }

}

`;

document.head.appendChild(
    quoteStyle
);

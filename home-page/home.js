import LocomotiveScroll from '/node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js';
// import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";


function defineStartAnimation(element, animName, duration, delay) {
    if (element) {
        if (animName) {
            element.style.animationName = animName;
        };

        if (duration) {
            element.style.animationDuration = duration;
        };

        element.style.animationIterationCount = "1";
        element.style.animationFillMode = 'both';

        if (delay) {
            element.style.animationDelay = delay;
        }

        element.addEventListener('animationend', (event) => {
            element.style.animation = 'unset';
        });
    };
}

window.addEventListener('load', (event) => {

    var welcome_words = document.querySelectorAll(".welcome-word");
    let waitTime = 0;
    Array.from(welcome_words).forEach( node =>{
        
            defineStartAnimation(node, "slideWelcomeWordsUp", '1s', waitTime + 's');

            waitTime += 0.2;
    });

    var menu_btn = document.getElementById("welcome-menu-btn");

    defineStartAnimation(menu_btn, "slideInMenuBtn", "3s", "0s")
});

const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1,
    multiplier: 0.9
    // touchMultiplier: 0.5
  });

let showElement = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.toggle('show', entry.isIntersecting);
            console.log(entry.target);
        };

    });
};

const observer = new IntersectionObserver(showElement);

const meProgHead = document.querySelector('#me-prog-head');
const helWelContainer = document.querySelector('#hel-wel-container');
const meProgDesc = document.querySelector('#me-prog-desc');
const learnMoreBtn = document.querySelector('#learn-more-btn');

observer.observe(meProgHead);
observer.observe(helWelContainer);
observer.observe(meProgDesc);
observer.observe(learnMoreBtn);
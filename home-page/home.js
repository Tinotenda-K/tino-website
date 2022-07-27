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


var menu_btn = document.getElementById("welcome-menu-btn");
var exit_menu_btn = document.querySelector("#menu-exit-btn");
var welcome_words = document.querySelectorAll(".welcome-word");
var navGrowingCircle = document.querySelector("#nav-growing-circle");
var sections = document.querySelectorAll("section");
var websiteNav = document.querySelector("#website-nav");
var welcomeSection = document.querySelector("#welcome-section");
var welcomeDescription = document.querySelector("#welcome-description");


window.addEventListener('load', (event) => {

    navGrowingCircle.classList.add("nav-bar-closed");

    // if (navGrowingCircle.classList.contains("nav-bar-closed")) {
    //     console.log(`navGrowingCircle contains the class .nav-bar-closed:  ${ navGrowingCircle }`)
    //     var welcomeSection = document.querySelector("#welcome-section");
    //     // var mutationRec = mutation.getBoundingClientRect();
    //     var diameter = Math.sqrt((welcomeSection.offsetHeight)**2 + (welcomeSection.offsetWidth)**2) * 2;
    //     console.log(`welcomeSection.style.height:  ${ welcomeSection.offsetHeight }`);
    //     console.log(`welcomeSection.style.width:  ${ welcomeSection.offsetWidth }`);
    //     console.log(`diameter:  ${ diameter.toString() + "px" }`);
    //     console.log(`welcomeSection:  ${ document.querySelector("#welcome-section") }`);
    //     navGrowingCircle.style.width = diameter.toString() + "px";
    //     navGrowingCircle.style.height = diameter.toString() + "px";

    //     var navCircleRect = navGrowingCircle.getBoundingClientRect();
    //     console.log(`navGrowingCircle.style.top:  ${ navCircleRect.top }`);
    //     console.log(`navGrowingCircle.style.right:  ${ navCircleRect.right }`);
    //     navGrowingCircle.style.top = (navCircleRect.top - diameter/2).toString() + "px";
    //     navGrowingCircle.style.right = (navCircleRect.right - welcomeSection.offsetWidth - diameter/2).toString() + "px";
    // }

    let waitTime = 0;
    Array.from(welcome_words).forEach( node =>{
        
            defineStartAnimation(node, "slideWelcomeWordsUp", '1s', waitTime + 's');

            waitTime += 0.2;
    });

    defineStartAnimation(menu_btn, "slideInMenuBtn", "3s", "0s");


    welcomeSection.addEventListener("animationend", (event) => {
        if (event.animationName == "fadeIn") {
            welcomeSection.style.animation = "unset";
        }       
    });
    
    welcomeDescription.addEventListener("animationend", (event) => {
        welcomeDescription.style.animation = "unset"
    });
});

const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1,
    multiplier: 0.8,
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

// // var navGrowingCircle = document.querySelector("#nav-growing-circle");

// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };
// console.log(`The element navGrowingCircle:   ${ navGrowingCircle }`)
// // Callback function to execute when mutations are observed
// const callback = function(mutationList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(const mutation of mutationList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log(`The ${mutation.attributeName} attribute was modified.`);
//             // if (mutation.target.classList.contains("nav-bar-closed")) {
//             //     console.log(`navGrowingCircle contains the class .nav-bar-closed:  ${ mutation.target }`)
//             //     var welcomeSection = document.querySelector("#welcome-section");
//             //     // var mutationRec = mutation.getBoundingClientRect();
//             //     var diameter = Math.sqrt((welcomeSection.offsetHeight)**2 + (welcomeSection.offsetWidth)**2);
//             //     console.log(`welcomeSection.style.height:  ${ welcomeSection.offsetHeight }`);
//             //     console.log(`welcomeSection.style.width:  ${ welcomeSection.offsetWidth }`);
//             //     console.log(`diameter:  ${ diameter.toString() + "px" }`);
//             //     console.log(`welcomeSection:  ${ document.querySelector("#welcome-section") }`);
//             //     navGrowingCircle.style.width = diameter.toString() + "px";
//             //     navGrowingCircle.style.height = diameter.toString() + "px";

//             //     // var navCircleRect = navGrowingCircle.getBoundingClientRect();
//             //     // navGrowingCircle.style.top = (navCircleRect.top - welcomeSection.offsetHeight/2).toString() + "px";
//             //     // navGrowingCircle.style.right = (navCircleRect.right - welcomeSection.offsetWidth/2).toString() + "px";
//             //     // console.log(`navGrowingCircle.style.top:  ${ navCircleRect.top }`);
//             // }
//         }
//     }
// };

// // Create an observer instance linked to the callback function
// const navCircleObserver = new MutationObserver(callback);

// // Start observing the target node for configured mutations
// navCircleObserver.observe(navGrowingCircle, config);


menu_btn.addEventListener("click", (event) => {

    var s = navGrowingCircle.style;
    s.display = "block";
    s.animationName = "growCircle";
    s.animationDuration = "0.5s";
    s.animationIterationCount = "1";
    s.animationFillMode = "both";
    s.animationTimingFunction = "linear";
});

exit_menu_btn.addEventListener("click", (event) => {

    websiteNav.style.display = 'none';
    
    var s = navGrowingCircle.style;
    s.display = "block";
    s.animationName = "shrinkCircle";
    s.animationDuration = "0.4s";
    s.animationIterationCount = "1";
    s.animationTimingFunction = "linear";
    s.animationFillMode = "both";
    
    sections.forEach((sect) => {
        sect.style.display = 'block';
    });
    console.log("Hello there this is exit menu button clicked");
})

navGrowingCircle.addEventListener("animationend", (event) => {

    if (event.animationName == "growCircle") {
        console.log("Hello there this is growCircle animation end");
        websiteNav.style.display = 'block';
        navGrowingCircle.style.display = 'none';
        sections.forEach((sect) => {
            sect.style.display = 'none';
        });
        navGrowingCircle.style.animation = 'unset';

    }else if (event.animationName == "shrinkCircle") {
        // navGrowingCircle.style.display = 'none';
        navGrowingCircle.style.animation = 'unset';
        console.log("Hello there this is shrinkCircle animation end");
    };
});


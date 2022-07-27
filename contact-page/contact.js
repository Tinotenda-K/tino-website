import LocomotiveScroll from '/node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js';
// import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";

const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.1,
    multiplier: 0.9
    // touchMultiplier: 0.5
  });
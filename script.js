// Header hide/show on scroll
let lastScrollTop = 0;
const header = document.querySelector(".main-header");

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px"; // hide
  } else {
    header.style.top = "0"; // show
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// GSAP Animations
gsap.from(".hero-content h1", {opacity:0, y:50, duration:1.5});
gsap.from(".cta-button", {opacity:0, scale:0, duration:1, delay:1});

gsap.utils.toArray("section").forEach((sec, i) => {
  gsap.from(sec, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: sec,
      start: "top 80%",
    }
  });
});

const toggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

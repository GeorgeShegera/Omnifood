// console.log("Hello world!");

// const myName = "Jonas Schmedtmann";
// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

// h1.addEventListener("click", () => {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "black";
//   h1.style.padding = "5rem";
// });

// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation toggle btn

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEL = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting)
      document.querySelector("body").classList.add("sticky");
    else {
      document.querySelector("body").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEL);

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*

*/

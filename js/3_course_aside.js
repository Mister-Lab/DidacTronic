
function openAsidenav() {
  document.getElementById("aside").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("nav").style.marginLeft = "0";
  document.getElementById("footer").style.marginLeft = "0";
  document.getElementById("header").style.marginLeft = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeAsidenav() {
  document.getElementById("aside").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("nav").style.marginLeft = "0px";
  document.getElementById("footer").style.marginLeft = "0px";
  document.getElementById("header").style.marginLeft = "0px";
  document.body.style.backgroundColor = "white";
}




/* ____ Scrollmenu __________________________________*/
var mainNavLinks = document.querySelectorAll("aside ul li a");
var mainSections = document.querySelectorAll("main section");

var lastId;
var cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
  var fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    var section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

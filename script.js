window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("Sticky", window.scrollY > 0);
});

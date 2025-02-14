// script.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".sticky-header");
    const heroSection = document.querySelector(".hero");

    function updateHeader() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        
        if (heroBottom < window.innerHeight / 2) {
            header.style.bottom = "0";
        } else {
            header.style.bottom = "-100px";
        }
    }

    window.addEventListener("scroll", updateHeader);
});

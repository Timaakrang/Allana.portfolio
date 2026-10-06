
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show-menu");
    });
}
const serviceItems = document.querySelectorAll(".service-list li");

const serviceObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-service");
        }
    });
});

serviceItems.forEach(function(item) {
    serviceObserver.observe(item);
});
;

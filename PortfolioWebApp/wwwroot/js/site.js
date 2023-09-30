// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var typed = new Typed(".typing-text", {
    strings: ["Frontend development", "Frontend developer", "Backend developer", "Web developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

window.onload = function () {
    setThemeBasedOnSystemPreference();
    Particles.init({
        selector: '#particles-js',
        maxParticles: 200,
        connectParticles: true,
        minDistance: 70,
        sizeVariations: 4,
        color: '#6b6b6b',
        speed: 2,
    });
};



const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});


function setThemeBasedOnSystemPreference() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // User prefers dark mode
        document.body.classList.add('dark-theme');
    } else {
        // User prefers light mode
        document.body.classList.remove('dark-theme');
    }
}
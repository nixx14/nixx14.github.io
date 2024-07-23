"use strict";
function greet(name) {
    return "Hello, ".concat(name, "! Welcome to my TypeScript-powered website.");
}
function updateGreeting() {
    var nameInput = document.getElementById('nameInput');
    var greetingDiv = document.getElementById('greeting');
    if (greetingDiv && nameInput) {
        var name_1 = nameInput.value || 'World';
        greetingDiv.textContent = greet(name_1);
    }
}
function navigateToAboutMe() {
    window.location.href = 'https://nixx14.github.io/aboutme';
}
// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var greetButton = document.getElementById('greetButton');
    var aboutMeButton = document.getElementById('aboutMeButton');
    if (greetButton) {
        greetButton.addEventListener('click', updateGreeting);
    }
    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', navigateToAboutMe);
    }
    // Initial greeting
    updateGreeting();
});

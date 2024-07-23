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
// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('greetButton');
    if (button) {
        button.addEventListener('click', updateGreeting);
    }
    // Initial greeting
    updateGreeting();
});

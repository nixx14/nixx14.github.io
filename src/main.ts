function greet(name: string): string {
    return `Hello, ${name}! Welcome to my TypeScript-powered website.`;
}

function updateGreeting(): void {
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const greetingDiv = document.getElementById('greeting');
    
    if (greetingDiv && nameInput) {
        const name = nameInput.value || 'World';
        greetingDiv.textContent = greet(name);
    }
}

function navigateToAboutMe(): void {
    window.location.href = 'aboutme/';
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const greetButton = document.getElementById('greetButton');
    const aboutMeButton = document.getElementById('aboutMeButton');
    
    if (greetButton) {
        greetButton.addEventListener('click', updateGreeting);
    }
    
    if (aboutMeButton) {
        aboutMeButton.addEventListener('click', navigateToAboutMe);
    }
    
    // Initial greeting
    updateGreeting();
});
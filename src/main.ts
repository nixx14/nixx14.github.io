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

// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('greetButton');
    if (button) {
        button.addEventListener('click', updateGreeting);
    }
    // Initial greeting
    updateGreeting();
});
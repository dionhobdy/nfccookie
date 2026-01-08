async function loadFortune() {
    try {
        const response = await fetch('./fortunes/fortunes.txt');
        const text = await response.text();
        const fortunes = text.split('\n').filter(line => line.trim() !== '');

        const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        document.querySelector('.fortune').textContent = randomFortune;
    } catch (error) {
        console.error('Error loading fortunes:', error);
        document.querySelector('.fortune').textContent = 'A fortune is coming...';
    }
}

document.addEventListener('DOMContentLoaded', loadFortune);
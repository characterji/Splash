document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.getElementById('main-content');
    const splashAudio = document.getElementById('splash-audio');

    enterButton.addEventListener('click', () => {
        // Play the sound
        splashAudio.play();

        // Hide the splash screen
        splashScreen.style.display = 'none';

        // Show the main content
        mainContent.style.display = 'block';
    });
});
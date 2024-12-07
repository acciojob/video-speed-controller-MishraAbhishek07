// script.js
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fast-forward');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = video.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    const skipValue = parseFloat(this.dataset.skip);
    video.currentTime += skipValue;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
rewindButton.addEventListener('click', skip);
fastForwardButton.addEventListener('click', skip);

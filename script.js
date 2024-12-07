// script.js
const video = document.querySelector('.viewer');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

function handleSpeedChange(e) {
    const y = e.pageY - speed.offsetTop;
    const percent = y / speed.offsetHeight;
    const min = 0.5;
    const max = 2;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    speedBar.style.height = height;
    speedBar.textContent = playbackRate.toFixed(2) + '×';
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', (e) => {
    if (e.buttons === 1) {
        handleSpeedChange(e);
    }
});

speed.addEventListener('mousedown', handleSpeedChange);

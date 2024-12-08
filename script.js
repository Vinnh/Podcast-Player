const playButton = document.getElementById('playButton');
let isPlaying = false;
const audio = new Audio('podcast.mp3');

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playButton.classList.remove('playing');
  } else {
    audio.play();
    playButton.classList.add('playing');
  }
  isPlaying = !isPlaying;
});

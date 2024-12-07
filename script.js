const audio = document.getElementById('podcast-audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');

let isPlaying = false;

// Função para tocar ou pausar o áudio
playPauseButton.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playPauseButton.textContent = '▶';
  } else {
    audio.play();
    playPauseButton.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

// Atualizar a barra de progresso
audio.addEventListener('timeupdate', () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
});

// Permitir que o usuário ajuste o tempo
progressBar.addEventListener('input', () => {
  const time = (progressBar.value / 100) * audio.duration;
  audio.currentTime = time;
});

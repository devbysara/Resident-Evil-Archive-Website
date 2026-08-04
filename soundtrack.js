document.querySelectorAll('.audio-btn').forEach(btn => {
  const src = btn.dataset.audio;
  const audio = new Audio(src);
  audio.volume = 0.2;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.audio-btn').forEach(otherBtn => {
      if (otherBtn !== btn && otherBtn.classList.contains('playing')) {
        otherBtn._audio.pause();
        otherBtn._audio.currentTime = 0;
        otherBtn.classList.remove('playing');
        otherBtn.textContent = '▶';
      }
    });

    if (audio.paused) {
      audio.play();
      btn.classList.add('playing');
      btn.textContent = '⏸';
    } else {
      audio.pause();
      btn.classList.remove('playing');
      btn.textContent = '▶';
    }
  });

  audio.addEventListener('ended', () => {
    btn.classList.remove('playing');
    btn.textContent = '▶';
  });

  btn._audio = audio;
});

const tabs = document.querySelectorAll('.tab');
const trackSections = document.querySelectorAll('.re-tracks');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    trackSections.forEach(section => section.classList.remove('active'));

    tab.classList.add('active');

    const targetId = tab.dataset.tracks;
    const targetSection = document.querySelector(`.re-tracks[data-tracks="${targetId}"]`);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

if (tabs.length > 0) {
  tabs[0].classList.add('active');
  trackSections[0].classList.add('active');
}

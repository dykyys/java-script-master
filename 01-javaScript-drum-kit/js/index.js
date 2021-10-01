function playSound(event) {
  const code = event.keyCode || event.currentTarget.dataset.key;
  const audio = document.querySelector(`audio[data-key='${code}']`);
  const key = document.querySelector(`.key__item[data-key='${code}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}
function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key__item');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
keys.forEach(btn => {
  btn.addEventListener('click', playSound);
});

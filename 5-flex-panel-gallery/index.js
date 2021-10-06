const panels = document.querySelectorAll('.panel');
function toogleOpen() {
  const isOpen = document.querySelector('.open');
  this.classList.toggle('open');
  if (isOpen) {
    isOpen.classList.remove('open');
  }
}

panels.forEach(panel => panel.addEventListener('click', toogleOpen));

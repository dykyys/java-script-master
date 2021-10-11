const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastCheched;
checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('click', handleCheck);
});
function handleCheck(event) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;

  if (event.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkBoxes.forEach(checkBox => {
      if (checkBox === this || checkBox === lastCheched) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkBox.checked = true;
      }
    });
  }
  lastCheched = this;
}

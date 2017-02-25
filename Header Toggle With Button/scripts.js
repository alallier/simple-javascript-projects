var colorChangingButton = document.getElementById('colorChangingButton'),
    joshHeader = document.getElementById('joshHeader');

colorChangingButton.addEventListener('click', function() {
  console.log('Clicked');

  if (joshHeader.style.color === 'green') {
    joshHeader.style.color = 'black';
    joshHeader.style.fontSize = '14em';
  }
  else {
    joshHeader.style.color = 'green';
    joshHeader.style.fontSize = '2em';
  }
});
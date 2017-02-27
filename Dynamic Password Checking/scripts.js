// Store the values for the first password box and the second
var newPassword = document.getElementById('newPassword'),
    alert = document.getElementById('alert'),
    newPasswordCheck = document.getElementById('newPasswordCheck');

newPassword.addEventListener('keyup', passCheck);
newPasswordCheck.addEventListener('keyup', passCheck);

// Create a function that checks whether or not the passwords match
function passCheck() {
  // Passwords do not match, verify password box is red
  if (newPassword.value !== newPasswordCheck.value) {
    newPasswordCheck.style.backgroundColor = 'red';
    alert.style.color = 'red';
    alert.innerHTML = 'The passwords you entered do not match!';
  }
  // Passswords match, verify password box is green
  else if (newPasswordCheck.value === newPassword.value) {
    newPasswordCheck.style.backgroundColor = 'green';
    alert.style.color = 'green';
    alert.innerHTML = 'The passwords you entered match!';
  }
  // Password box is empty, verify pword box is yellow
  else if (newPasswordCheck.value === '') {
    newPasswordCheck.style.backgroundColor = 'yellow';
    alert.innerHTML = 'Please enter a password.'
  }
}

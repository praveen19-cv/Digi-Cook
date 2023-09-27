// Create an array of usernames and passwords   
var usernames = ["admin", "user1", "user2"];
var passwords = ["1234", "password2", "password3"];

// Validate the username and password fields
function validateUsername(username) {
  for (var i = 0; i < usernames.length; i++) {
    if (username === usernames[i]) {
      return true;
    }
  }
  return false;
}

function validatePassword(password) {
  for (var i = 0; i < passwords.length; i++) {
    if (password === passwords[i]) {
      return true;
    }
  }
  return false;
}

// Disable the "Sign In" button by default
var signinButton = document.getElementById("signin");
signinButton.disabled = true;

// Enable the "Sign In" button if the username and password fields are not empty
function enableSignInButton() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;

  if (username !== "" && password !== "") {
    signinButton.disabled = false;
  }
}

// On blur of the username field, enable the "Sign In" button
document.getElementById("username").addEventListener("blur", enableSignInButton);

// On blur of the password field, enable the "Sign In" button
document.getElementById("pwd").addEventListener("blur", enableSignInButton);

// Show an alert message if the username or password is invalid
function showError(message) {
  alert(message);
}

// Disable the "Sign In" button if the username or password is invalid
function disableSignInButton() {
  signinButton.disabled = true;
}

// Highlight the invalid fields
function highlightInvalidFields() {
  if (!validateUsername(document.getElementById("username").value)) {
    document.getElementById("username").style.border = "10px solid red";
  }
  if (!validatePassword(document.getElementById("pwd").value)) {
    document.getElementById("pwd").style.border = "10px solid red";
  }
}

// On click of the "Sign In" button
function signin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pwd").value;

  // Check if the username and password are valid
  if (!validateUsername(username) || !validatePassword(password)) {
    showError("Invalid username or password");
    disableSignInButton();
    highlightInvalidFields();
    return;
  }

  // The username and password are valid, so redirect to the home page
  window.location.href = "View.html";
}

// Attach the signin() function to the "signin" button
document.getElementById("signin").onclick = signin;
//auth state check
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});

// for signin button
function SignIn() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorCode + "\n" + errorMessage);
      // ...
    });
}

// for signup button
function SignUp() {
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorCode + "\n" + errorMessage);
      // ...
    });
}

// for signout button
function SignOut() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorCode + " " + errorMessage);
    });
  window.location.reload();
}

// for reset button
function ResetPass() {
  var userEmail = document.getElementById("email_field").value;

  firebase
    .auth()
    .sendPasswordResetEmail(userEmail)
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorCode + "\n" + errorMessage);
    });
}

function fcall() {
  window.location = "call/call.html";
}

function siren() {
  window.location = "siren/siren.html";
}

function loc() {
  window.location = "location/location.html";
}

function sos() {
  window.location = "sos/sos.html";
}

var snd = new Audio("police-siren-ringtone.mp3");
var check = 0;
function siren_call() {
  var siren_toggle = document.getElementById("siren_img");
  if (check == 0) {
    snd.play();
    siren_toggle.style.animation = "flashing 0.8s linear infinite";
    check = 1;
  } else {
    snd.pause();
    check = 0;
    snd.currentTime = 0;
    siren_toggle.style.animation = "none";
  }
}

function cross() {
  window.location = "../index.html";
}

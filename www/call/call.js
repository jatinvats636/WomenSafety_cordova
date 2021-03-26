document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  document.addEventListener(
    "backbutton",
    function (e) {
      e.preventDefault();
    },
    false
  );
}

var snd = new Audio("op_tune.mp3");
snd.play();

function pause_audio() {
  snd.pause();
}

function call_accept() {
  document.getElementById("accept").style.display = "none";
  var rej = document.getElementById("reject");
  rej.style.right = "40%";
  rej.style.animation = "none";
  rej.style.fontSize = "45px";
  rej.style.width = "80px";
  rej.style.height = "80px";
  document.getElementById("accept_i").style.animation = "none";
}

function call_reject() {
  window.location = "../index.html";
}

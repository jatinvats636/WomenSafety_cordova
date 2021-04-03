function getPosition() {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 3600000,
  };
  var watchID = navigator.geolocation.getCurrentPosition(
    onSuccess,
    onError,
    options
  );

  function onSuccess(position) {
    document.getElementById("logs").innerHTML =
      "<u><b>POSITION</b></u><br>" +
      "<br><b>Latitude:</b> " +
      position.coords.latitude +
      "\n" +
      "<br><b>Longitude:</b> " +
      position.coords.longitude +
      "\n" +
      "<br><b>Altitude:</b> " +
      position.coords.altitude +
      "\n" +
      "<br><b>Accuracy:</b> " +
      position.coords.accuracy +
      "\n" +
      "<br><b>Altitude Accuracy:</b> " +
      position.coords.altitudeAccuracy +
      "\n" +
      "<br><b>Heading:</b> " +
      position.coords.heading +
      "\n" +
      "<br><b>Speed:</b> " +
      position.coords.speed +
      "\n" +
      "<br><b>Timestamp:</b> " +
      position.timestamp +
      "\n";
  }

  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}

function watchPosition() {
  var options = {
    maximumAge: 3600000,
    timeout: 3000,
    enableHighAccuracy: true,
  };
  var watchID = navigator.geolocation.watchPosition(
    onSuccess,
    onError,
    options
  );

  function onSuccess(position) {
    document.getElementById("logs").innerHTML =
      "<u><b>POSITION</b></u><br>" +
      "<br><b>Latitude:</b> " +
      position.coords.latitude +
      "\n" +
      "<br><b>Longitude:</b> " +
      position.coords.longitude +
      "\n" +
      "<br><b>Altitude:</b> " +
      position.coords.altitude +
      "\n" +
      "<br><b>Accuracy:</b> " +
      position.coords.accuracy +
      "\n" +
      "<br><b>Altitude Accuracy:</b> " +
      position.coords.altitudeAccuracy +
      "\n" +
      "<br><b>Heading:</b> " +
      position.coords.heading +
      "\n" +
      "<br><b>Speed:</b> " +
      position.coords.speed +
      "\n" +
      "<br><b>Timestamp:</b> " +
      position.timestamp +
      "\n";
  }

  function onError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}

function cross() {
  window.location = "../index.html";
}

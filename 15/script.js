
function berechneWert() {
    var budget = document.getElementById("budget").value;
    var wetter = document.getElementById("wetter").value;
    var freunde = document.getElementById("freunde").value;
  
    var request = new XMLHttpRequest();
    request.open('GET', 'daten.json');
    request.responseType = 'json';
    request.send();
  
    request.onload = function() {
      var daten = request.response;
      var unternehmungen = daten[budget][wetter][freunde];
      var randomIndex = Math.floor(Math.random() * unternehmungen.length);
      var wert = unternehmungen[randomIndex];
      document.getElementById("wert").innerHTML = wert + "? ";
    }
  }
  
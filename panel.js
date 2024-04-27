function panelSettingsClose() {
    let settings = document.getElementById("settings_panel");
    settings.className = "settings hidden"
}

function panelSearchClose() {
    let search = document.getElementById("outer_search_container");
    search.className = "search_outer_container hidden"
}

function startSearch() {
    var q = document.getElementById("search_box").value
    if (q.startsWith("->") {
        window.location.replace(q.replace("->", "");
    } else {
        window.open('http://google.com/search?q='+q);
    };
}

var variable;

function weatherDisplay() {
    navigator.geolocation.getCurrentPosition(function(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var url_hourly = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&hourly=temperature_2m";
        fetch(url_hourly)
        .then(response => response.json())
        .then(data => {
          var hour = new Date().getUTCHours();
          var temp = data.hourly.temperature_2m[hour];
          temp = Math.round(temp * 10) / 10;
          document.getElementById("temp_display").innerHTML = temp + " °C";
        });
    });
}

document.addEventListener("DOMContentLoaded", weatherDisplay)

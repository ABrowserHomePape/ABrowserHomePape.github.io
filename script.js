let body = document.body;
let html = document.getElementById("main");

// let settings_panel;

var images = ["1", "2", "3", "4", "5", "6"];

function pickRandomItem() {
    let randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

html.style.backgroundImage = "url(bg/" + pickRandomItem() + ".png)"
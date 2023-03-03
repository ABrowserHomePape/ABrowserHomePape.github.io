document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
        let settings = document.getElementById("settings_panel");
        let search = document.getElementById("outer_search_container");
        console.log("You pressed the left arrow!");
        if (search.className === "search_outer_container hidden") {
            settings.className = "settings"
        }
    } else if (event.key === "ArrowUp") {
        let settings = document.getElementById("settings_panel");
        let search = document.getElementById("outer_search_container");
        console.log("You pressed the up arrow!");
        search.className = "search_outer_container"
        settings.className = "settings hidden"
    }
});
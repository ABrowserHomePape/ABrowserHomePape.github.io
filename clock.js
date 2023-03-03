// Get the text object by its ID
//var timeDisplay = document.getElementById("time_display");

// Define a function to update the time
window.addEventListener('DOMContentLoaded', updateTime)
function updateTime() {
    document.getElementById("time_display").innerText = new Date().toLocaleTimeString()
    setTimeout(updateTime, 1000)
}
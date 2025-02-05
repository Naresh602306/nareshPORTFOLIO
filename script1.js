// Get the popup and buttons
var popup = document.getElementById("contactPopup");
var openBtn = document.getElementById("contactPopupBtn");
var closeBtn = document.getElementById("closePopupBtn");

// Open the popup when the user clicks the button
openBtn.onclick = function() {
    popup.style.display = "block";
}

// Close the popup when the user clicks the close button
closeBtn.onclick = function() {
    popup.style.display = "none";
}

// Close the popup if the user clicks outside of the popup content
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

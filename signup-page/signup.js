const Username = document.getElementById("username");

Username.addEventListener("invalid", function() {
    if (Username.validity.patternMismatch) {
        Username.setCustomValidity("Please enter a valid username (only letters, numbers, and underscores are allowed).");
    }
});

Username.addEventListener("input", function() {
    Username.setCustomValidity("");
});
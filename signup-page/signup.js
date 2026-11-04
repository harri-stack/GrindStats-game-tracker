const Username = document.getElementById("username");
const signupButton = document.getElementById("signup-button");
const signupMessage = document.getElementById("signup-message");
Username.addEventListener("invalid", function() {
    if (Username.validity.patternMismatch) {
        Username.setCustomValidity("Please enter a valid username (only letters, numbers, and underscores are allowed).");
    }
});

Username.addEventListener("input", function() {
    Username.setCustomValidity("");
});

async function sendData() {
    if (!Username.validity.patternMismatch) {
        
        var data = username.value;
        const response = await fetch('http://localhost:5000/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: data })
        });

        const result = await response.json();
        signupMessage.textContent = result.message;
    }
}

signupButton.addEventListener("click", function() {
    event.preventDefault();
    sendData();
    console.log("Data sent to backend");
});
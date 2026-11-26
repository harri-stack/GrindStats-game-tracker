const Username = document.getElementById("username");
const signupButton = document.getElementById("signup-button");
const signupMessage = document.getElementById("signup-message");

Username.addEventListener("input", function() {
    Username.setCustomValidity("")
});

async function sendData() {
    if (Username.checkValidity()) {
        
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

        if (response.ok) {
            console.log("Signup successful");
            sessionStorage.setItem("username", data);
            window.location.href = "../main-dashboard/index.html";
        }
    }
    else {
        if (Username.validity.patternMismatch) {
            console.log("Incorrect format entered");
            Username.setCustomValidity("Please enter a valid username (only letters, numbers, and underscores are allowed).");
            Username.reportValidity();
        }
    }
}

signupButton.addEventListener("click", function() {
    Username.reportValidity();
    event.preventDefault();
    sendData();
    console.log("Data sent to backend");
});
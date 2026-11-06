const Username = document.getElementById("username");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

async function sendData() {
        var data = username.value;
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: data })
        });

        const result = await response.json();
        loginMessage.textContent = result.message;
}

loginButton.addEventListener("click", function() {
    event.preventDefault();
    sendData();
    console.log("Data sent to backend");
});
const username = sessionStorage.getItem("username");
console.log("Logged in user:", username);

const welcomeMessage = document.querySelector(".welcome-message");
if (username) {
    welcomeMessage.textContent = `Welcome, ${username}!`;
}

function logoutButton(event) {
    event.preventDefault();
    console.log("Event fired")
    window.location.replace("../login-page/index.html")
}
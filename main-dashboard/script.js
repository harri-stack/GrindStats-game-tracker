const username = sessionStorage.getItem("username");
console.log("Logged in user:", username);

const welcomeMessage = document.querySelector(".welcome-message");
if (username) {
    welcomeMessage.textContent = `Welcome, ${username}!`;
}
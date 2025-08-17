function startCountdown() {
    sessionStorage.setItem("countdownDone", "true"); // mark that user already saw countdown

    document.getElementById("main-content").style.display = "none";
    document.getElementById("countdown-box").style.display = "block";

    let count = 3;
    let interval = setInterval(() => {
        count--;
        document.getElementById("countdown").textContent = count;
        if (count === 0) {
            clearInterval(interval);
            window.location.href = "/playlist";
        }
    }, 1000);
}

// On page load, check if countdown was already done
window.addEventListener("load", () => {
    if (sessionStorage.getItem("countdownDone") === "true") {
        // show main content directly, skip countdown
        document.getElementById("main-content").style.display = "block";
        document.getElementById("countdown-box").style.display = "none";
    }
});

const messages = [
    "You’re the best part of my day ❤️",
    "Forever my masala soda 🥤",
    "Every love song reminds me of you 🎶",
    "With you, even Mondays feel magical ✨",
    "You’re my safe place 💕",
    "You're my first thought of the day ❤️",
    "You're my kakdi",
    "You are my chowmin",
    "You're my jalebi",
    "You are my chhoti si pyari si bacchi",
    "I Love You Avni 💕❤️"
];

function showLoveNote() {
    const messageBox = document.getElementById("loveMessage");
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.innerText = randomMessage;
    messageBox.style.display = "block";

    // Hide after 3 seconds
    setTimeout(() => {
        messageBox.style.display = "none";
    }, 3000);
}

document.getElementById('surpriseButton').addEventListener('click', function() {
    const loveLetter = document.getElementById('loveLetter');
    loveLetter.classList.toggle('hidden');
    document.getElementById('message').innerText = "EHHEHE here is little something to make you smile!";
});

const targetDate = new Date("2024-11-01T00:00:00").getTime(); // Set this to your next visit date
const countdownElement = document.getElementById('countdownTimer');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "We're together again!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
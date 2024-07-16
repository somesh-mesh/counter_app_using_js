function countdown() {
    const now = new Date();
    const nextYear = new Date('January 1, 2025 00:00:00');
    const diff = nextYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (diff < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown').innerHTML = "<h2>Happy New Year 2025!</h2>";
    }
}

// Initial call to display immediately
countdown();

// Update every second
const timerInterval = setInterval(countdown, 1000);
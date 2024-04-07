// Set the timer duration in seconds
const duration = 30;

// Display dynamic timer
const timerElement = document.getElementById('timer');
let timeLeft = duration;
timerElement.innerText = 'Please Wait ' + timeLeft + ' seconds...';

// Start countdown
const countdown = setInterval(() => {
  timeLeft--;
  timerElement.innerText = 'Please Wait ' + timeLeft + ' seconds...';

  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById('timerPassed').value = "done11";
    document.getElementById('submitAdButton').style.display = 'block';
    document.getElementById('timer').style.display = 'none';
  }
}, 1000);
// Disable right-click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Disable inspect element
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 123) { // 123 is the keycode for F12 key
        e.preventDefault();
    }
});
 
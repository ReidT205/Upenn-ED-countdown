'use strict';



// Dec 19th, 2024 4:00 PM pacific time


function updateCountdown(days, hours, minutes, seconds) {
    let currentTime = new Date();
    // 4:00 PM pacific time Dec 19th.
    let targetTime = new Date("Dec 19, 2024 16:00:00").getTime();
    let timeDifference = targetTime - currentTime;
    
    let daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    days.innerHTML = daysLeft + (daysLeft === 1 ? " day" : " days");
    hours.innerHTML = hoursLeft + (hoursLeft === 1 ? " hour" : " hours");
    minutes.innerHTML = minutesLeft + (minutesLeft === 1 ? " minute" : " minutes");
    seconds.innerHTML = secondsLeft + (secondsLeft === 1 ? " second" : " seconds");
}

// Update countdown every second
window.onload = function() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    updateCountdown(days, hours, minutes, seconds);
    setInterval(updateCountdown, 1000, days, hours, minutes, seconds);
}

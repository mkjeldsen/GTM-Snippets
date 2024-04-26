// Insert as Custom HTML in GTM. Pushes a "%sec_active_time" to the dataLayer (e.g. "10sec_active_time") when the timer reaches 0.
// Timer count down time is set in the variable "startTime".

(function() {
    'use strict';

    var startTime = 10000; // Initial countdown time in milliseconds, customizable
    var timer; // Variable to store the timeout function
    var endTime; // Variable to store the computed end time

    function scheduleCountdown() {
        var remainingTime = endTime - new Date().getTime(); // Calculate remaining time dynamically
        timer = setTimeout(fireEvent, remainingTime);
    }

    function fireEvent() {
        try {
            // Ensure dataLayer exists or initialize it
            var dataLayer = window.dataLayer = window.dataLayer || [];

            var seconds = parseInt(startTime / 1000);
            dataLayer.push({'event': seconds + 'sec_active_time'});
        } catch (e) {
            console.error("Error in fireEvent:", e.message);
        } finally {
            cleanUp(); // Ensure clean up occurs regardless of errors
        }
    }

    function cleanUp() {
        clearTimeout(timer); // Clear the timeout
        document.removeEventListener("visibilitychange", handleVisibilityChange);
    }

    function handleVisibilityChange() {
        if (document.hidden) {
            clearTimeout(timer); // Pause countdown
        } else {
            if (!timer) {
                scheduleCountdown(); // Resume countdown only if it was previously paused
            }
        }
    }

    function startCountdown() {
        try {
            endTime = new Date().getTime() + startTime; // Compute end time on start
            scheduleCountdown(); // Schedule the initial countdown
            document.addEventListener("visibilitychange", handleVisibilityChange);
        } catch (e) {
            console.error("Error starting countdown:", e.message);
        }
    }

    startCountdown(); // Initial call to start the countdown process
})();

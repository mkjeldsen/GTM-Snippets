// Insert as Custom HTML in GTM. Pushes a "%sec_active_time" to the dataLayer (e.g. "10sec_active_time") when the timer reaches 0.
// Timer count down time is set in the variable "startTime".

(function() {
    'use strict';

    var startTime = 10000; // Initial countdown time in milliseconds
    var endTime; // Variable to store the end time
    var timer; // Variable to store the timeout function
    var hasStarted = false; // Flag to check if the countdown has started

    // Function to start or continue the countdown
    function startCountdown() {
        if (document.hidden) {
            // If the document is hidden, do not start the countdown
            console.log("Tab is inactive, countdown will start when tab becomes active.");
            return;
        }
        hasStarted = true;
        var currentDate = new Date().getTime(); // Get the current time
        endTime = currentDate + startTime; // Set the end time based on remaining time

        // Set the timeout to count down
        timer = setTimeout(function() {
            var s = parseInt(startTime / 1000);
            dataLayer.push({'event': s + 'sec_active_time'});
            startTime = startTime; // Reset the countdown after finishing
            hasStarted = false; // Reset start flag after countdown finishes
        }, startTime);
    }

    // Function to pause the countdown
    function pauseCountdown() {
        if (!hasStarted) {
            // If the countdown hasn't started yet, no need to pause
            return;
        }
        clearTimeout(timer); // Clear the countdown timer
        var currentDate = new Date().getTime(); // Get the current time
        startTime = endTime - currentDate; // Calculate the remaining time
    }

    // Event listener to check if the document is visible or hidden
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            pauseCountdown(); // Pause the countdown when the tab is inactive
//            dataLayer.push({'event':'tab_inactive'});
        } else {
            startCountdown(); // Continue the countdown when the tab is active
//            dataLayer.push({'event':'tab_active'});
        }
    });

    // Check if the tab is initially active and start the countdown accordingly
    startCountdown();
})();
</script>

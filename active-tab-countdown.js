// Insert as Custom HTML in GTM. Pushes a "%sec_active_time" to the dataLayer (e.g. "10sec_active_time") when the timer reaches 0.
// Timer count down time is set in the variable "startTime".

(function() {
    var sessionActiveTime = parseInt(sessionStorage.getItem('sessionActiveTime'), 10) || 0;
    var sessionTimeExceeded = sessionStorage.getItem('45sec_active_time') === 'true';
    var highIntentUser = sessionStorage.getItem('high_intent_user') === 'true';
    var heavyBrowser = sessionStorage.getItem('heavy_browser') === 'true';
    var lastActiveTime = new Date().getTime();

    // Function to check and update the session active time
    var updateSessionActiveTime = function() {
        if (document.visibilityState === 'visible') {
            var currentTime = new Date().getTime();
            var elapsedTime = (currentTime - lastActiveTime) / 1000; // convert to seconds

            sessionActiveTime += elapsedTime;
            sessionStorage.setItem('sessionActiveTime', sessionActiveTime);
            lastActiveTime = currentTime;

            if (sessionActiveTime >= 45) {
                sessionStorage.setItem('45sec_active_time', 'true');
                dataLayer.push({'event': '45sec_active_time'});
                if (highIntentUser && heavyBrowser !== 'true') {
                  dataLayer.push({'event': 'heavy_browser'});
                  sessionStorage.setItem('heavy_browser', 'true');
                }
                clearInterval(timer); // Stop the timer
//                console.debug('Session active time exceeded 45 seconds.');
            } else {
//                console.debug('Session active time: ' + sessionActiveTime + ' seconds.');
            }
        } else {
            lastActiveTime = new Date().getTime(); // Update last active time when the tab becomes inactive
        }
    };

    // Event listener to detect tab visibility changes (active/inactive)
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            lastActiveTime = new Date().getTime();
        }
    });

    // Run the update every second
    var timer = setInterval(updateSessionActiveTime, 1000);

    // If session time has already exceeded 45 seconds, clear the interval immediately
    if (sessionTimeExceeded) {
        clearInterval(timer);
    }
})();

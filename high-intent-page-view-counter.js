var hipc_count = parseInt(sessionStorage.getItem('highIntentPageViewCount'), 10) || 0;

if ({{Lookup - High intent pages}}) { // GTM Lookup Table variable. [Input] is `page_path`, [Output] is `true`.
  hipc_count++;
  sessionStorage.setItem('highIntentPageViewCount', hipc_count);
}

console.debug('hipc_count:', hipc_count); // Debugging: Log the hipc_count
console.debug('45sec_active_time:', sessionStorage.getItem("45sec_active_time")); // Debugging: Log the 45sec_active_time value

// Check if hipc_count >= 2 and 45sec_active_time is true
if (hipc_count >= 2 && sessionStorage.getItem("45sec_active_time") === 'true') {
  sessionStorage.setItem('heavy_browser', 'true');
  dataLayer.push({'event': 'heavy_browser'});
  console.debug('Heavy browser detected.');
} else {
  console.debug('Heavy browser condition not met.'); // Debugging: Log when condition is not met
}

// Check if hipc_count >= 2 and high_intent_user is not set to true
if (hipc_count >= 2 && sessionStorage.getItem('high_intent_user') !== 'true') {
  sessionStorage.setItem('high_intent_user', 'true');
  dataLayer.push({'event': 'high_intent_user'});
  clearInterval(timer); // Stop the timer
  console.debug('High intent user detected.');
} else {
  console.debug('High intent user condition not met.'); // Debugging: Log when condition is not met
}

console.debug('hipc: ' + hipc_count); // Debugging: Log the final hipc_count

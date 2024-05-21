window.addEventListener('message', function(event) {
      console.debug('hs init');
  setTimeout(function() {
    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormReady') {
      window.dataLayer.push({
        event: 'hubspotFormLoaded',
        hsFormGuid: event.data.id,
        currentUrl: window.location.href,
      });
    }

    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
      window.dataLayer.push({
        event: 'hubspotFormSubmitting',
        hsFormGuid: event.data.id,
        currentUrl: window.location.href,
      });
    }

    if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
      window.dataLayer.push({
        event: 'hubspotFormSubmitted',
        hsFormGuid: event.data.id,
        currentUrl: window.location.href,
      });
    }
  }, 2000); // Delay set to 2000 milliseconds
  console.debug('hs ready');
});

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
        hs_form_guid: event.data.id,                              // logs the form unique identifier
        hs_form_conversionid : event.data.data.conversionId,      // logs the form submit id (unique for the specific form submit)
        hs_form_url: window.location.href,                        // logs the current url the form is submitted from
      });
    }
  }, 2000); // Delay set to 2000 milliseconds
  console.debug('hs ready');
});

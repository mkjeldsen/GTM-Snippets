# Suppress Hubspot Analytics tracking in Hubspot CMS until user consent to statistics cookies via CMP solution (like Cookiebot)

Hubspot does not provide a good way to work with GDPR compliance in their CMS, unless you actually use their own cookie banner soliution. Which you shouldn't, 'cause it is really bad. Like for real, don't use it.

The immediate solution is to suppress (disable) tracking until the user consent to statistics (via your CMP of choice) and then enable tracking upon consent.

Note that this solution will ensure that Hubspot's chatbot/chat solution is still working.

## TURN OFF TRACKING VIA HUBSPOT CMS:
Insert in `Hubspot > Content > Pages > Templates > Site Header`:

```
<script>
	var _hsq = (window._hsq = window._hsq || []);
	var _hsp = (window._hsp = window._hsp || []);
	_hsq.push(["doNotTrack"]);
	_hsp.push(["doNotTrack"]);
</script>
```

To be inserted as early as possible.

## TURN ON TRACKING
In Google Tag Manager, create a `Custom HTML` tag with this code:

```
<script>
  var _hsq = window._hsq = window._hsq || [];
  _hsp.push(["doNotTrack", { track: true }]);
  _hsq.push(["doNotTrack", { track: true }]);
  
  _hsq.push(['setPath', window.location.pathname]);
  _hsq.push(['trackPageView']);
</script>
```

The script is set to fire on `cookie_consent_update` (or similar from your CMP of choice). Under `Advanced Settings > Consent Settings > Require additional consent for tag to fire` add an `analytics_storage` dependency.
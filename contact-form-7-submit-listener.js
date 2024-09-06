<script>
document.addEventListener( 'wpcf7submit', function( event ) {
  dataLayer.push({
    'event': 'cf7.submit',
    'contactFormId': event.detail.contactFormId
  });
}, false );
</script>

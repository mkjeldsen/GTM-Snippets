// Category:	Tag
// Type:	Custom HTML tag
// Trigger:	All Pages
if(!window.jQuery) {
	// Create a "script" variable
	var script = document.createElement('script');
	// define the type
	script.type = "text/javascript";
	// define the source. We're pointing to the Google-hosted jQuery, but you can sub this out to reference your own self-hosted version.
	script.src = "//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
	// find the first element in the <head> and add the <script> tag there.
	document.getElementByTagName('head')[0].appendChild(script);
}

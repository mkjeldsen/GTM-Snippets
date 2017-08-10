// js-snippet for looking for an element that is being injected via ajax.
// Uses addEventListener to listen for "DOMNodeInserted", and if found,
// executes the embedded js code.
document.addEventListener("DOMNodeInserted", function() {
	var exist = document.querySelector("input[type='email']");
	if (exist) {
		console.log("element exists");
	} else {
		console.log("element does not exist");
	};
}, false);

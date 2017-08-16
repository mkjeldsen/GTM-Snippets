var p = {{ecommerce.purchase.products}};
for (var key in p) {
	if (p.hasOwnProperty(key)) {
		console.log(key + " -> " + p[key]['id']);
		console.log(key + " -> " + p[key]['name']);
		console.log(key + " -> " + p[key]['category']);
		console.log(key + " -> " + p[key]['price']);
		console.log(key + " -> " + p[key]['brand']);
		console.log(key + " -> " + p[key]['quantity']);
		console.log(key + " -> " + p[key]['variant']);

		// Do something to the data here...
		// E.g. Raptor Smart Advisor Buy Event:
		// rsa.trackEvent("buy",p[key]['id'],p[key]['name'],p[key]['category'],p[key]['price'],"DKK","",p[key]['brand'],"","","");
	}
}

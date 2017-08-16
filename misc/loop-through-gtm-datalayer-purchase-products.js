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
	}
}

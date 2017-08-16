function(){
	// https://www.upbuild.io/gtm/ - Tip #12: Strip out PII
	// Use variable to overwrite 'page' field i GA-tags
	var queryString = location.search.substring(1);
	queryString = queryString.length ? '&' + queryString : '';
	// US CC
		//var newQ = queryString.length ? '?' + queryString.replace(/&[^&@]+@[^&]+/g,'&emailRemoved').replace(/\b\d{13,16}\b/g,'&ccRemoved').substring(1) : '';
	// DK CPR
		//var newQ = queryString.length ? '?' + queryString.replace(/&[^&@]+@[^&]+/g,'&emailRemoved').replace(/\b[1-3][\d](0[1-9]|1[0-2])[\d]{2}\-[\d]{4}\b/g,'&cprRemoved').substring(1) : '';
	return newQ.length <= 1 ? '' : newQ;
}

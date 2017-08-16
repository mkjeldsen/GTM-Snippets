function(){
	// https://www.upbuild.io/gtm/ - Tip #12: Strip out PII
	// Use variable to overwrite 'page' field i GA-tags
	var queryString = location.search.substring(1);
	queryString = queryString.length ? '&' + queryString : '';
	var newQ = queryString.length ? '?' + queryString.replace(/&[^&@]+@[^&]+/g,'&emailRemoved').replace(/\b\d{13,16}\b/g,'&ccRemoved').substring(1) : '';
	return newQ.length <= 1 ? '' : newQ;
}

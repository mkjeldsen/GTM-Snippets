- Opret tilpasset HTML tag.
- Klik + under udløsningsregler.
- Vælg opret nye regel.
- Giv reglen et sigende navn, fx "404-side".
- Under betingelser vælger du "Ny makro...".
- Giv makroen et sigende navn, fx 404 title tag".
- Makrotype sættes til "Tilpasset javascript".
- Nedenstående javascript-kode indsættes i kodefeltet:
```javascript
// Denne kode returnerer værdien "true"hvis title-tag'et indeholder "404",
// og "false" hvis den ikke gør.
// Tilpas indexOf('unik-streng-fra-din-404-sides-title') efter behov
function () {
	return (document.title.indexOf('404')!=-1)?'true':'false';
}
```
- Gem makroen, som ny gerne skulle optræde i dropdownlisten hvor du er i gang med at oprette din regel.
- Sæt operatoren i dropdown-listen til "er lig med" og indtast "true" (uden anførselstegn!)
- Gem reglen, gem dit tag, test og udgiv.

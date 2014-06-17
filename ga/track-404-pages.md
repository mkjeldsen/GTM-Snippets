1. Opret tilpasset HTML tag.
2. Klik + under udløsningsregler.
3. Vælg opret nye regel.
4. Giv reglen et sigende navn, fx "404-side".
5. Under betingelser vælger du "Ny makro...".
6. Giv makroen et sigende navn, fx 404 title tag".
7. Makrotype sættes til "Tilpasset javascript".
8. Følgende javascript indsættes i kodefeltet:
function () {
  return (document.title.indexOf('404')!=-1)?'true':'false';
}
 - Denne kode returnerer værdien "true"hvis title-tag'et indeholder "404", og "false" hvis den ikke gør. Tilpas indexOf('unik-streng-fra-din-404-sides-title') efter behov.
9. Gem makroen, som ny gerne skulle optræde i dropdownlisten hvor du er i gang med at oprette din regel.
10. Sæt operatoren i dropdown-listen til "er lig med" og indtast "true" (uden anførselstegn!)
11. Gem reglen, gem dit tag, test og udgiv.

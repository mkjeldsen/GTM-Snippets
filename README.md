# GTM-Snippets


Kodestumper til Google Tag Manager

## VWO

### Custom Conversion installationsnoter

1. Opret en regel, der udløses på kvitteringssiden (fx "konvertering").
2. Opret et "Tilpasset HTML tag", og indsæt nedenstående javascript (inkl <script>-tags).
 - Sæt udløsningsregel til at være din nyoprettede regel.
3. Opret en Custom Conversion i Visual Website Optimizer.
4. Find goalID'et for din conversion (ses i kodestumpen i VWO - fanen "Code Snippet") og opdatér variablen nedenfor.
5. Find testID'et for din test (kan ses i URL'en når du kigger på den enkelte test i VWO's interface) og opdatér variablen nedenfor.
6. Test og udgiv.

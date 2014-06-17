/*
	1. Opret en regel, der udløses på kvitteringssiden (fx "konvertering").
	2. Opret et "Tilpasset HTML tag", og indsæt nedenstående javascript (inkl <script>-tags).
		2.1 Sæt udløsningsregel til at være din nyoprettede regel.
	3. Opret en Custom Conversion i Visual Website Optimizer.
	4. Find goalID'et for din conversion (ses i kodestumpen i VWO - fanen "Code Snippet") og opdatér variablen nedenfor.
	5. Find testID'et for din test (kan ses i URL'en når du kigger på den enkelte test i VWO's interface) og opdatér variablen nedenfor.
	6. Test og udgiv.
*/


<script type="text/javascript">// <![CDATA[
if(typeof(_vis_opt_top_initialize) == "function") {
	var goalID = 202;
	var testID = 51;
	// Code for Custom Goal: Goal #1
	_vis_opt_goal_conversion(goalID);
	// uncomment the following line to introduce a half second pause to ensure goal always registers with the server
	// _vis_opt_pause(500);

	window._vis_opt_queue = window._vis_opt_queue || [];
	//Do change the Goal ID below AND the Test ID to the one shown in the Code snippet tab of the test.
	window._vis_opt_queue.push(function() {_vis_opt_register_conversion(goalID, testID);});
}
// ]]></script>

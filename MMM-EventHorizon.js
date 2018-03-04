/* Magic Mirror
 * Module: MMM-EventHorizon
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-EventHorizon",{
		
	defaults: {
			height:"90px",
			width:"200px"
	},
	
	getStyles: function() {
        return ["MMM-EventHorizon.css"];
    },


	
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
		iframe.src = "http://free.timeanddate.com/countdown/i64zeztz/n179/cf100/cm0/cu4/ct5/cs0/ca0/cr0/ss0/cac33d9ff/cpc000/pct/tcfff/fs100/szw192/szh81/tatTime%20left%20until%20/tac33d9ff/tptWhen%20the%20timer%20runs%20out/tpc33d9ff/matWe%20party%20like%20a%20mofo!/mac33d9ff/mptSay%20whatever%20you%20want/mpc33d9ff/iso2018-03-04T17:05:00/bo2/pd2";
		return iframe;
	}

});

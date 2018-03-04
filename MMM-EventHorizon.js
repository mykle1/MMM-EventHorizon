/* Magic Mirror
 * Module: MMM-EventHorizon
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-EventHorizon",{
		
	defaults: {
        date: "2018-03-04",                   // (YYYY-MM-DD)  Date timer will end
        time: "17:05:00",                     // (HH:MM:SS)    Exact time you want timer to end
        text1: "Describe event here",         // 2 lines of text during timer
        text2: "And here too!",               // 2 lines of text during timer
        endText1: "When timer ends",          // 2 lines of text when timer ends
        endText2: "Say something here",       // 2 lines of text when timer ends
        height:"90px",                        // DO NOT CHANGE
        width:"200px"                         // DO NOT CHANGE
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
		iframe.src = "http://free.timeanddate.com/countdown/i64zeztz/n179/cf100/cm0/cu4/ct5/cs0/ca0/cr0/ss0/cac33d9ff/cpc000/pct/tcfff/fs100/szw192/szh81/tat" + this.config.text1 + "/tac33d9ff/tpt" + this.config.endText1 + "/tpc33d9ff/mat" + this.config.text2 + "/mac33d9ff/mpt" + this.config.endText2 + "/mpc33d9ff/iso" + this.config.date + "T" + this.config.time + "/bo2/pd2";
		return iframe;
	}

});

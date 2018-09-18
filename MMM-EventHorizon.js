/* Magic Mirror
 * Module: MMM-EventHorizon
 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-EventHorizon",{

	defaults: {
        size: "small",                        // small, medium or large
				countUp: "yes",                       // Count up after timer ends
				date: "2018-07-04",
        time: "00:00:01",                     // (HH:MM:SS)    Exact time you want timer to end
        text1: "Describe event here",         // 2 lines of text during timer
        text2: "And here too!",               // 2 lines of text during timer
        endText1: "When timer ends",          // 2 lines of text when timer ends
        endText2: "Say something here",       // 2 lines of text when timer ends
	},

	getStyles: function() {
        return ["MMM-EventHorizon.css"];
    },


	getDom: function() {


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
//		iframe.width = this.config.width;
//		iframe.height = this.config.height;
		type="text/javascript";

					if (this.config.countUp == "yes" && this.config.size == "small"){
						// small
						iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/n179/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac0ff/cpc0ff/pc000/tcfff/fs100/szw256/szh108/tat" + this.config.text1 + "/tac0ff/tpt" + this.config.endText1 + "/tpc0ff/mat" + this.config.text2 + "/mac0ff/mpt" + this.config.endText2 + "/mpc0ff/iso" + this.config.date + "T" + this.config.time;
					} else if (this.config.countUp == "yes" && this.config.size == "medium") {
						// medium
						iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/n179/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac0ff/cpc0ff/pc000/tcfff/fs100/szw320/szh135/tat" + this.config.text1 + "/tac0ff/tpt" + this.config.endText1 + "/tpc0ff/mat" + this.config.text2 + "/mac0ff/mpt" + this.config.endText2 + "/mpc0ff/iso" + this.config.date + "T" + this.config.time;
					} else if (this.config.countUp == "yes" && this.config.size == "large") {
					  // large
						iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/n179/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac0ff/cpc0ff/pc000/tcfff/fs100/szw576/szh243/tat" + this.config.text1 + "/tac0ff/tpt" + this.config.endText1 + "/tpc0ff/mat" + this.config.text2 + "/mac0ff/mpt" + this.config.endText2 + "/mpc0ff/iso" + this.config.date + "T" + this.config.time;
					}



        if (this.config.countUp != "yes" && this.config.size == "small"){
            iframe.src = "http://free.timeanddate.com/countdown/i64zeztz/n179/cf100/cm0/cu4/ct5/cs0/ca0/cr0/ss0/cac33d9ff/cpc000/pct/tcfff/fs100/szw192/szh81/tat" + this.config.text1 + "/tac33d9ff/tpt" + this.config.endText1 + "/tpc33d9ff/mat" + this.config.text2 + "/mac33d9ff/mpt" + this.config.endText2 + "/mpc33d9ff/iso" + this.config.date + "T" + this.config.time + "/bo2/pd2";
        } else if (this.config.countUp != "yes" && this.config.size == "medium") {
            iframe.src = "http://free.timeanddate.com/countdown/i67bgd3d/n179/cf12/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cac0ff/cpc0ff/pct/tcfff/fs100/szw448/szh189/tat" + this.config.text1 + "/tac0ff/tpt" + this.config.endText1 + "/tpc0ff/mat" + this.config.text2 + "/mac0ff/mpt" + this.config.endText2 + "/mpc0ff/iso" + this.config.date + "T" + this.config.time + "/bo2/pd2";
        } else if (this.config.countUp != "yes" && this.config.size == "large") {
            iframe.src = "http://free.timeanddate.com/countdown/i67bgd3d/n179/cf12/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cac0ff/cpc0ff/pct/tcfff/fs100/szw576/szh243/tat" + this.config.text1 + "/tac0ff/tpt" + this.config.endText1 + "/tpc0ff/mat" + this.config.text2 + "/mac0ff/mpt" + this.config.endText2 + "/mpc0ff/iso" + this.config.date + "T" + this.config.time + "/bo2/pd2";
        }



		return iframe;
	},

	/////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_TIMER') {
            this.hide(1000);
        }  else if (notification === 'SHOW_TIMER') {
            this.show(1000);
        }

    },

});

/* Magic Mirror
 * Module: MMM-EventHorizon
 *
 * By Mykle1 - MIT Licensed
 *
 * extended by time zone and colors
 * by @spitzlbergerj January 14, 2019
 *
 */
Module.register("MMM-EventHorizon", {

    defaults: {
        timezone: "n37", // See Timezone chart at bottom
        size: "medium", // small, medium or large
        countUp: "yes", // Count up after timer ends
        date: "2019-07-04", // YYYY-MM-DD format ONLY
        time: "00:00:01", // (HH:MM:SS)    Exact time you want timer to end
        text1: "Describe event here", // 2 lines of text during timer
        text2: "And here too!", // 2 lines of text during timer
        text1Color: "FFFFFF", // Hex color codes.	Default = white
        text2Color: "FFFFFF", // Hex color codes.	Default = white
        timerColor: "FFFFFF", // Hex color codes.	Default = white
        endText1: "When timer ends", // 2 lines of text when timer ends
        endText2: "Say something here", // 2 lines of text when timer ends
        endText1Color: "FFFFFF", // Hex color codes.	Default = white
        endText2Color: "FFFFFF", // Hex color codes.	Default = white
        timerUpColor: "FFFFFF", // Hex color codes.	Default = white
        colorpc: "000", // color of the background 000 = black, t = transparent
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
        type = "text/javascript";

        if (this.config.countUp == "yes" && this.config.size == "small") {
            // small
            iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/" + this.config.timezone + "/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw256/szh108/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time;
        } else if (this.config.countUp == "yes" && this.config.size == "medium") {
            // medium
            iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/" + this.config.timezone + "/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw320/szh135/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time;
        } else if (this.config.countUp == "yes" && this.config.size == "large") {
            // large
            iframe.src = "http://free.timeanddate.com/countdown/i6f519yg/" + this.config.timezone + "/cf12/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw576/szh243/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time;
        }



        if (this.config.countUp != "yes" && this.config.size == "small") {
            iframe.src = "http://free.timeanddate.com/countdown/i64zeztz/" + this.config.timezone + "/cf100/cm0/cu4/ct5/cs0/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw192/szh81/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time; // + "/bo2/pd2";
        } else if (this.config.countUp != "yes" && this.config.size == "medium") {
            iframe.src = "http://free.timeanddate.com/countdown/i67bgd3d/" + this.config.timezone + "/cf12/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw448/szh189/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time; // + "/bo2/pd2";
        } else if (this.config.countUp != "yes" && this.config.size == "large") {
            iframe.src = "http://free.timeanddate.com/countdown/i67bgd3d/" + this.config.timezone + "/cf12/cm0/cu4/ct0/cs1/ca0/cr0/ss0/cac" + this.config.timerColor + "/cpc" + this.config.timerUpColor + "/pc" + this.config.colorpc + "/tcfff/fs100/szw576/szh243/tat" + this.config.text1 + "/tac" + this.config.text1Color + "/tpt" + this.config.endText1 + "/tpc" + this.config.endText1Color + "/mat" + this.config.text2 + "/mac" + this.config.text2Color + "/mpt" + this.config.endText2 + "/mpc" + this.config.endText2Color + "/iso" + this.config.date + "T" + this.config.time; // + "/bo2/pd2";
        }



        return iframe;
    },

    /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_TIMER') {
            this.hide(1000);
        } else if (notification === 'SHOW_TIMER') {
            this.show(1000);
        }

    },

});

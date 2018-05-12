## MMM-EventHorizon

Simple countdown timer for events. Birthdays, weddings, anniversaries, vacations, etc.

## Examples

* Small, medium and large options

![](images/1.png) ![](images/2.png)

![](images/3.png) ![](images/4.png)

## Installation

* `git clone https://github.com/mykle1/MMM-EventHorizon` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

    {
        disabled: false,
        module: 'MMM-EventHorizon',
        position: 'bottom_center',
	    config: {
            size: "large",                       // small, medium or large
            date: "2018-07-04",                  // (YYYY-MM-DD)  Date timer will end
            time: "00:00:01",                    // (HH:MM:SS)    Exact time you want timer to end
	        text1: "Open the damn pool",         // 1st line of text during timer. About 18 characters total.
            text2: "Winter sucked ass",          // 2nd line of text during timer. About 18 characters total.
            endText1: "It's gonna be fun",          // 1st line of text when timer ends. About 18 characters total.
            endText2: "Where's my bikini",          // 2nd line of text when timer ends. About 18 characters total.
    }
},



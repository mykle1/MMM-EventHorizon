## MMM-EventHorizon

Simple countdown timer for events.

## Examples

![](images/1.png) ![](images/2.png)

## Installation

* `git clone https://github.com/mykle1/MMM-EventHorizon` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

    {
            disabled: false,
            module: 'MMM-EventHorizon',
            position: 'top_right',
			config: {
                date: "2018-03-04",                   // (YYYY-MM-DD)  Date timer will end
                time: "17:47:00",                     // (HH:MM:SS)    Exact time you want timer to end
				text1: "Describe event here",         // 2 lines of text during timer
                text2: "And here too!",               // 2 lines of text during timer
                endText1: "When timer ends",          // 2 lines of text when timer ends
                endText2: "Say something here",       // 2 lines of text when timer ends
			}
        },

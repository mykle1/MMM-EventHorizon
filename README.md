## MMM-EventHorizon

Simple countdown timer for events.

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
            timezone: "n179",                     // See Timezone chart at bottom
            size: "large",                        // small, medium or large
            countUp: "yes",                       // Count up after timer ends
            date: "2019-01-15",                   // YYYY-MM-DD format ONLY
            time: "00:00:01",                     // (HH:MM:SS)    Exact time you want timer to end
            text1: "Describe event here",         // 2 lines of text during timer
            text2: "And here too!",               // 2 lines of text during timer
            text1Color: "FFFFFF",                 // Hex color codes
            text2Color: "62FF00",                 // Hex color codes
            timerColor: "FFFFFF",                 // Hex color codes
            endText1: "When timer ends",          // 2 lines of text when timer ends
            endText2: "Say something here",       // 2 lines of text when timer ends
            endText1Color: "FFFFFF",              // Hex color codes
            endText2Color: "62FF00",              // Hex color codes
            timerUpColor: "FFFFFF",               // Hex color codes
            colorpc: "000",                       // color of the background 000 = black, t = transparent
    }
},

## Timezone codes - Added as needed. Please ask at the MagicMirror forum

* France, Paris = n195

* Germany, Berlin = n37

* Norway, Oslo = n187

* Sweden, Stockholm = n239

* Switzerland, Geneva = n87

* UK, London = n136

* USA, CA = n137
* USA, NY = n179
* USA, IL = n64
* USA TX = n70

## Special thanks to @spitzlbergerj

For going out of his way and making some nice additions to the module,

Even if he made it work ONLY for Berlin Germany! I kid you not! :-)

## MMM-EventHorizon

Simple countdown timer for events.

## Examples

* Small, medium and large options

![](images/1.png) ![](images/2.png)

![](images/3.png) ![](images/4.png)

## Installation

* `git clone https://github.com/mykle1/MMM-EventHorizon` into the `~/MagicMirror/modules` directory.

## Config.js entry and options

```
{
disabled: false,
module: 'MMM-EventHorizon',
position: 'bottom_center',
config: {
    timezone: "n179",                     // See Timezone chart at bottom
    units: "1",          // 1=no units, 2=units initial only, 3=units abbr singular, 4= units abbr plural, 5= units full name
    justDays: "",                         //  yes or no // For longer countdowns. Displays ONLY days remaining
    size: "large",                        // small, medium or large
    countUp: "yes",                       // Count up after timer ends
    date: "2019-07-04",                   // YYYY-MM-DD format ONLY
    time: "00:00:01",                     // (HH:MM:SS)    Exact time you want timer to end
    text1: "Describe event",              // 2 lines of text during timer
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
```

Go to this page and obtain your timezone code 
https://forum.magicmirror.builders/topic/9514/contribute-to-a-module-volunteers-wanted-easy

Or choose from the list below!

Or choose from the text file "Timezone codes" included with this module.

## Timezone codes

The time codes can be taken from the corresponding file. The file is sorted by countries and cities. Please send any additions via the MagicMirror forum in the correct format (<country>, <city>, <code>) to me. I will then add the table and sort your entries.

## Special thanks to @spitzlbergerj,

who made some nice additions to the module.

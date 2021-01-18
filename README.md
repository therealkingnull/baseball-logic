# @thereallkingnull/baseball-logic

[![npm (scoped)](https://img.shields.io/npm/v/@therealkingnull/baseball-logic.svg)](https://www.npmjs.com/package/@therealkingnull/baseball-logic)
![issues](https://img.shields.io/github/issues/therealkingnull/baseball-logic) 
![forks](	https://img.shields.io/github/forks/therealkingnull/baseball-logic) 
![stars](https://img.shields.io/github/stars/therealkingnull/baseball-logic) 
![license](https://img.shields.io/github/license/therealkingnull/baseball-logic) 

A package that figures out where the ball should be thrown in baseball.

## Installation

```
$ npm install @therealkingnull/baseball-logic
```

## Example

```js
const baseball = require("@therealkingnull/baseball-logic");

var play = baseball.outfield("LF", "1", "1&3", "GB");
```

## Documentation
## Outfield
### Base Runners
* 0 - No men on 
* 1 - Man on first
* 2 - Man on second
* 3 - Man on third
* 1&3 - Men on first and third
* 1&2 - Men on first and second
* 2&3 - Men on second and third
* 1&2&3 - Bases loaded (Men on first, second, and third)
---
### Supported Positions
* LF - Left Field
---
### Supported Plays
* GB - Ground Ball
---
### Calling Functions
When calling for new logic, you will need to pass in the following strings:
* Position - (See above) - String
* Number of outs - (0, 1, 2, or 3) - String
* Runners - (See above) - String
* Play - (See above) - String
---
### Understanding Data
If you make a sucessful attempt, you should recieve data that looks something like this:
```js
"throw 2 via SS"
```
This means that you would throw the ball to your cutoff (which would be shortstop in this case), and they would then throw it to the initial base (2, or second base)

---
## Trivia
The trivia part of the package gives you fun questions and facts about a certain position.
### Example
```js
const baseball = require("@therealkingnull/baseball-logic");

var trivia = baseball.trivia("LF", "1");
```
This example would return data that looks like the following:
```js
[
  {
    id: '1',
    question: 'Is left field good',
    answer: 'Very good',
    level: '1',
    position: 'lf'
  }
]
```
---
### Levels of Difficulty
* 1 - Easy
* 2 - A little hard, but not that bad
* 3 - Hard
* 4 - Very hard
---
### Calling the Function
When calling for new trivia, you will need to pass the following strings:
* Position - View Positions Above - String
* Difficulty - View above - String

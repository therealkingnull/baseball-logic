    //IMPORTS
const { lf } = require('./src/trivia');

//OUTFIELD
const outfield = (pos, outs, runners, play) => {
   var base = ["0", "1", "2", "3", "1&3", "1&2", "2&3", "1&2&3"];
   var arrPos = base.indexOf(runners);
  if(pos.toLowerCase() === "lf") {
    if(play.includes("GB")) {
      let lfCut = ['SS', '3', '3B', 'SS', '3', '3', '3B']

    if(runners.includes("&")) {
      let split = runners.split("");
      let toThrow = Number(split[0]) + 2;
      return "throw " + toThrow + " via " + lfCut[arrPos];
    }
    else {
    let toThrow = Number(runners) + 2;
    if(toThrow == 5) {
      return "throw 2 via SS";
    }
    else {
return "throw " + toThrow + " via " + lfCut[arrPos];
    }
    }
    }
  }
};

//INFIELD
const infield = () => {
  throw new Error("Not released");
};


//TRIVIA
const trivia = (pos, level) => {
if(!pos || !level) throw new TypeError("Missing required fields");

if(pos === "LF") return lf(level)
};

//EXPORTS
module.exports = {
  outfield,
  infield,
  trivia
};

const data = require('./../data/trivia.json');

//RANDOM JSON TRIVIA
const randomN = (dataArray, n) => {
    const limit = dataArray.length < n ? dataArray.length : n;
    const randomIndicesSet = new Set();
  
    while (randomIndicesSet.size < limit) {
      const randomIndex = Math.floor(Math.random() * dataArray.length);
      if (!randomIndicesSet.has(randomIndex)) {
        randomIndicesSet.add(randomIndex);
      }
    }
  
    return Array.from(randomIndicesSet).map(randomIndex => {
      return dataArray[randomIndex];
    });
  };

//LF TRIVIA
const lf = (level) => {
  return randomN(data.filter(data => data.level === level && data.position === "lf"), 1);
}

module.exports = { randomN, lf };

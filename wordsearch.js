const transpose = require('./transpose');

const wordSearch = (letters, word) => {

  const solvePuzzle = function(input) {
    for (let letter of input) {
      if (letter.includes(word) || letter.includes(word.split('').reverse().join(''))) {
        return true;
      }
    }
    return false;
  };

  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
  
  return solvePuzzle(horizontalJoin) || solvePuzzle(verticalJoin) || false;
};

module.exports = wordSearch;
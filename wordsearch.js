const transpose = require('./transpose');

const wordSearch = (letters, word) => {
  let wordFound = false;

  const looper = function(input) {
    for (letter of input) {
      if (letter.includes(word)) {
        wordFound = true;
      }
    }
  };

  const horizontalJoin = letters.map(ls => ls.join(''));
  looper(horizontalJoin);
 
  let transposed = transpose(letters);

  let verticalJoin = transposed.map(ls => ls.join(''));
  looper(verticalJoin);

  return wordFound;
};


module.exports = wordSearch;
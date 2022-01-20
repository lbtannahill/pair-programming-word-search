const transpose = require('./transpose');

const wordSearch = (letters, word) => {

  const looper = function(input) {
    for (let letter of input) {
      if (letter.includes(word) || letter.includes(word.split('').reverse().join(''))) {
        return true;
      }
    }
    return false;
  };

  const horizontalJoin = letters.map(ls => ls.join(''));
  let transposed = transpose(letters);
  let verticalJoin = transposed.map(ls => ls.join(''));
  
  return looper(horizontalJoin) || looper(verticalJoin) || false;
};




module.exports = wordSearch;
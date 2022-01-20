const transpose = function(matrix) {
  let newArray = [];
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === undefined) continue;
      if (newArray[j] === undefined) newArray[j] = [];
      newArray[j][i] = matrix[i][j];
    }
  }
  return (newArray);
  
};

module.exports = transpose;
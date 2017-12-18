

// https://www.glassdoor.com/Interview/Given-a-grid-of-characters-output-a-decoded-message-The-message-for-the-following-would-be-IROCKA-diagonally-down-right-QTN_970049.htm

const decodeArr = grid => {
  let retStr = '';
  const col = grid.length;
  if (col < 1) return retStr;
  const row = grid[0].length;
  let i = 0;
  let j = 0;
  let step = 1;
  while (j < row) {
    retStr += grid[i][j];
    j++;
    i += step;
    if (i === col - 1) step = -1;
    else if (i === 0) step = 1;
  }
  return retStr;
};

console.log(decodeArr([
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]));

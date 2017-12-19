

// | X |     | O |
// | O | O | X |
// | O | X | X |

const TicTacToe = (user1, user2) => {
  this.board = Array(3).fill(0).map(val => Array(3).fill(undefined));
  this.users = { user1: 0, user2: 1 };
  this.count = 0;
  this.currentPlayer = null; // user1, user2
};

const checkBoard = board => {
  let pre;

  // check row
  for (let i = 0; i < 3; i++) {
    pre = board[i][0];
    if (pre === undefined) break;
    for (let j = 1; j < 3; j++) {
      if (pre !== board[i][j]) break;
      pre = board[i][j];
    }
    return true;
  }

  // check col
  for (let i = 0; i < 3; i++) {
    pre = board[0][i];
    if (pre === undefined) break;
    for (let j = 1; j < 3; j++) {
      if (pre !== board[j][i]) break;
      pre = board[j][i];
    }
    return true;
  }

  // check diagnol
  pre = board[0][0];
  if (pre) {
    if (pre === board[1][1] && pre === board[2][2]) return true;
  }
  pre = board[0][2];
  if (pre) {
    if (pre === board[1][1] && pre === board[2][0]) return true;

  }

  return false;

};

TicTacToe.prototype.play = (user, row, col) => {
  if (this.users[user] === undefined) return;

  const userVal = this.users[user];
  this.board[row][col] = userVal;

  if (checkBoard(this.board)) return 1;
  else if (++this.count === 9) return -1;
  else return 0;
}

// 1
// 0
// -1

const newBoard = new TicTacToe(user1, user2);
newBoard.play(user1, 0, 0);
newBoard.play(user2, 1, 1);

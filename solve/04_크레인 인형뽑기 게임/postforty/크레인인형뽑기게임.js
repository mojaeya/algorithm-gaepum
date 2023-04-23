function solution(board, moves) {
  var answer = 0;

  const tempArr = [];

  for (let i of moves) {
    const idx = i - 1;
    for (let j of board) {
      if (j[idx] !== 0) {
        if (tempArr[tempArr.length - 1] === j[idx]) {
          tempArr.pop();
          answer += 2;
        } else {
          tempArr.push(j[idx]);
        }
        j[idx] = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);

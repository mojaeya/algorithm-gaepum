function solution(participant, completion) {
  var answer = "";
  const board = {};
  participant.forEach((name) => {
    board[name] = board[name] + 1 || 1;
  });
  completion.forEach((name) => {
    board[name] -= 1;
  });
  for (const [name, count] of Object.entries(board)) {
    if (count === 1) answer = name;
  }
  return answer;
}

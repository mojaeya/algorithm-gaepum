// https://school.programmers.co.kr/learn/courses/30/lessons/138477
function solution(k, score) {
  var answer = [score[0]];
  let scoreBoard = [score[0]];
  score = [...score.slice(1, score.length)];
  score.forEach((v) => {
    scoreBoard.push(v);
    scoreBoard.sort((a, b) => a - b);
    if (scoreBoard.length > k) {
      scoreBoard = scoreBoard.slice(1, scoreBoard.length);
    }
    answer.push(scoreBoard[0]);
  });

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]

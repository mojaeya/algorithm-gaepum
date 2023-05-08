function solution(k, m, score) {
  var answer = 0;
  const boxCount = Math.floor(score.length / m);
  const sortedArr = score.sort((a, b) => b - a);
  for (let i = m - 1; i < boxCount * m; i += m) {
    answer += sortedArr[i] * m;
  }

  return answer;
}

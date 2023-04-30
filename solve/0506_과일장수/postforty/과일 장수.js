function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => b - a);
  console.log(score);
  answer = score.reduce((a, b, i) => {
    if (i % m === m - 1) {
      a += b * m;
    }
    return a;
  }, 0);
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));

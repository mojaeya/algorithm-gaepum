// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript
function solution(s) {
  var answer = 0;
  let x = s[0];
  let countX = 0;
  let countNotX = 0;

  for (let c in s) {
    if (countX !== 0 && countX === countNotX) {
      answer++;
      countX = 0;
      countNotX = 0;
      x = s[c];
    }

    countX += x === s[c] && 1;
    countNotX += x !== s[c] && 1;
  }

  answer += (countX !== 0 || countNotX !== 0) && 1;
  return answer;
}

console.log(solution("abracadabra")); // 6

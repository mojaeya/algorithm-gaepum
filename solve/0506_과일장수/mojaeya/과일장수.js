let k = 3;
let m = 4;
let score = [1, 2, 3, 1, 2, 3, 1];

console.log(solution(k, m, score));

// 시간 초과
// function solution(k, m, score) {
//   let answer = 0;

//   score.sort((a, b) => b - a);

//   while (score.length >= m) {
//     let box = score.splice(0, m);
//     console.log(box);
//     answer += box[m - 1] * m;
//   }

//   return answer;
// }

// 오름차순으로 정렬해서 하니 성공
function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => a - b);

  while (score.length >= m) {
    let box = score.splice(score.length - m, m);
    answer += box[0] * m;
  }

  return answer;
}

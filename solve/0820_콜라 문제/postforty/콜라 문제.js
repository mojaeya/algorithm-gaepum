// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
function solution(a, b, n) {
  var answer = 0;

  function func(a, b, n) {
    if (n < a) return;
    let r = n % a;
    n = Math.floor(n / a);
    n = n * b;
    answer += n;
    n += r;
    return func(a, b, n);
  }

  func(a, b, n);

  return answer;
}

console.log(solution(5, 3, 21));

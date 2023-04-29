function solution(ingredient) {
  var answer = 0;
  let i = 0;

  // * 배열 비교방법간 성능은 별 차이 없었음
  // 1. every를 이용한 배열 비교
  const equals = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  while (i < ingredient.length) {
    // 2. stringify를 이용한 배열 비교
    // if (JSON.stringify(ingredient.slice(i, i + 4)) === "[1,2,3,1]") {
    if (equals(ingredient.slice(i, i + 4), [1, 2, 3, 1])) {
      ingredient.splice(i, 4);
      answer++;
      i -= 3;
    } else {
      i++;
    }
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
console.log(solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1])); // 2
console.log(solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1])); // 3
console.log(solution([1, 1, 2, 3, 1, 1])); // 1

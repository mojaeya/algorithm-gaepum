function solution(n, arr1, arr2) {
  var answer = [];

  arr1.forEach((_, i) => {
    const temp = (arr1[i] | arr2[i])
      .toString(2)
      .replaceAll("1", "#")
      .replaceAll("0", " ");

    const result = n > temp.length ? " ".repeat(n - temp.length) + temp : temp;
    answer.push(result);
  });
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));

function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let zeroCount = 0;

  for (let i of lottos) {
    if (win_nums.includes(i)) {
      count++;
    }
    if (i === 0) {
      zeroCount++;
    }
  }

  const level = (value) =>
    value === 6
      ? 1
      : value === 5
      ? 2
      : value === 4
      ? 3
      : value === 3
      ? 4
      : value === 2
      ? 5
      : 6;

  answer = [level(count + zeroCount), level(count)];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

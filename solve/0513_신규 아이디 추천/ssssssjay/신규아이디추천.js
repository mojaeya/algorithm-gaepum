function solution(new_id) {
  let answer = [];
  // possible : a-z 0-9, -, _, .
  const possible = "abcdefghijklmnopqrstuvwxyz0123456789-_.".split("");

  // 1) upper => lower
  answer = new_id.toLowerCase().split("");

  // 2) delete impossible
  answer = answer.filter((str) => possible.includes(str));

  // 3) .. => .
  const stack = [];
  answer.forEach((str) => {
    // CAUTION 코드를 짜면서 에러나지 않을까 고민한 부분은 여기!
    if (str === "." && stack[stack.length - 1] === ".") {
      stack.pop();
    }
    stack.push(str);
  });
  answer = stack;

  // 4) delete first, last .
  // shift or slice?
  // if (answer[0] === ".") answer.shift();
  if (answer[0] === ".") answer = answer.slice(1);
  if (answer[answer.length - 1] === ".") answer.pop();

  // 5) if ('') 'a'
  if (answer.length === 0) answer.push("a");

  // 6) if (length >= 16) slice. then last . delete
  if (answer.length >= 16) {
    // [0]부터 [15]인덱스_실질적 16번쨰 앞에까지!
    answer = answer.slice(0, 15);
    // 0부터 15개!
    // answer = answer.splice(0, 15);
  }
  if (answer[14] === ".") answer.pop();

  // 7) if (length <= 2) last string until 3
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer.push(answer[answer.length - 1]);
    }
  }

  return answer.join("");
}

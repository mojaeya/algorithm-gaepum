function solution(ingredient) {
  let answer = 0;
  const stack = [];
  // 목적은 '1231'을 제거하는것
  for (const i of ingredient) {
    stack.push(i);
    if (stack[stack.length - 1] === 1 && stack.length >= 4) {
      if (
        stack[stack.length - 2] === 3 &&
        stack[stack.length - 3] === 2 &&
        stack[stack.length - 4] === 1
      ) {
        for (let j = 0; j < 4; j++) {
          stack.pop();
        }
        // stack.splice(stack.length - 4, 4);
        // stack.splice(-4);
        answer += 1;
      }
    }
  }
  return answer;
}
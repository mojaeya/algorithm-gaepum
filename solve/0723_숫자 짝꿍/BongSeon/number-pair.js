function solution(X, Y) {
  // console.log(X, Y);

  const countX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const countY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < X.length; i++) {
    countX[X[i]]++;
  }
  for (let i = 0; i < Y.length; i++) {
    countY[Y[i]]++;
  }

  // console.log(countX); // console.log(countY);
  let answer = "";
  let m = [];
  // 9부터 0까지를 카운트
  for (let i = 9; i >= 0; i--) {
    const acc = Math.min(countX[i], countY[i]);
    m.push(acc);
    for (let k = 0; k < acc; k++) {
      answer += i.toString();
    }
  }
  // console.log(answer); // console.log(m);

  if (
    m.every((el) => {
      return el === 0;
    })
  )
    return "-1";

  return answer[0] === "0" ? "0" : answer;
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));

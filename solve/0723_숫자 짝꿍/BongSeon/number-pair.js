// prettier-ignore
function solution(X, Y) {
  const countX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const countY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  for (let i = 0; i < X.length; i++) {
    countX[X[i]]++
  }
  for (let i = 0; i < Y.length; i++) {
    countY[Y[i]]++
  }

  let answer = ''
  for (let i = 9; i >= 0; i--) { // 9부터 0까지를 카운트
    const acc = Math.min(countX[i], countY[i])
    answer+= i.toString().repeat(acc)
  }
  return !answer ? '-1' : answer[0] === '0' ? '0' : answer
}
console.log(solution('100', '2345')) // -1
console.log(solution('100', '203045')) // 0
console.log(solution('100', '123450')) // 10
console.log(solution('12321', '42531')) // 321
console.log(solution('5525', '1255')) // 552

// for (let k = 0; k < acc; k++) {
//   answer += i.toString()
// }
// -> answer+= i.toString().repeat(acc)

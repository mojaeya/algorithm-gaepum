function solution(numbers, hand) {
  var answer = "";
  const l = ["1", "4", "7", "*"];
  const m = ["2", "5", "8", "0"];
  const r = ["3", "6", "9", "#"];

  let curL = "*";
  let curR = "#";

  function calcDistance(num, cur, m, lr) {
    let numIdx = m.indexOf(num);
    let curIdx = 0;
    if (lr.includes(cur) > 0) {
      curIdx = lr.indexOf(cur);
      return numIdx < curIdx
        ? m.slice(numIdx, curIdx).length + 1
        : m.slice(curIdx, numIdx).length + 1;
    } else {
      curIdx = m.indexOf(cur);
      return numIdx < curIdx
        ? m.slice(numIdx, curIdx).length
        : m.slice(curIdx, numIdx).length;
    }
  }

  numbers.forEach((v) => {
    let strNum = v.toString();
    if (l.includes(strNum) > 0) {
      answer += "L";
      curL = strNum;
    } else if (r.includes(strNum) > 0) {
      answer += "R";
      curR = strNum;
    } else {
      let locL = calcDistance(strNum, curL, m, l);
      let locR = calcDistance(strNum, curR, m, r);
      if (locL === locR) {
        if (hand === "left") {
          answer += "L";
          curL = strNum;
        } else {
          answer += "R";
          curR = strNum;
        }
      } else if (locL < locR) {
        answer += "L";
        curL = strNum;
      } else {
        answer += "R";
        curR = strNum;
      }
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// "13458214595"
// "LRLLLRLLRRL"

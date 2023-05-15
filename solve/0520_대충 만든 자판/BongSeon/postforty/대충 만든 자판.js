function solution(keymap, targets) {
  function func(k, t) {
    const result = [];
    [...t].forEach((v, i) =>
      result.push(k.indexOf(v) >= 0 ? k.indexOf(v) + 1 : -1)
    );
    return result;
  }

  const tArr = [];
  targets.forEach((t) => {
    const kArr = keymap.map((k) => func(k, t));
    let rst = 0;
    // map 메소드를 이용한 파이썬의 for x in zip(*k_lst)와 유사한 코드
    const rstArr = kArr[0].map((_, index) => kArr.map((arr) => arr[index]));
    for (let x of rstArr) {
      if (x.includes(-1) && new Set(x).size === 1) {
        rst = -1;
        break;
      } else {
        rst += Math.min(...x.filter((el) => el !== -1));
      }
    }
    tArr.push(rst);
  });
  return tArr;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["BC"], ["AC", "BC"])); // [-1,3]

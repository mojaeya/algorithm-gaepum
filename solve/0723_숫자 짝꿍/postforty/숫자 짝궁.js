// function solution(X, Y) {
//   let xArr = [...X];
//   let yArr = [...Y];
//   const xObj = xArr.reduce((acc, curr) => {
//     acc[curr] === undefined ? (acc[curr] = 1) : (acc[curr] += 1);
//     return acc;
//   }, {});
//   const yObj = yArr.reduce((acc, curr) => {
//     acc[curr] === undefined ? (acc[curr] = 1) : (acc[curr] += 1);
//     return acc;
//   }, {});

//   const set1 = new Set(xArr);
//   const set2 = new Set(yArr);
//   const intersection = [...set2].filter((v) => set1.has(v));

//   let answer = "";
//   intersection.forEach((key) => {
//     const count = Math.min(xObj[key], yObj[key]);
//     for (let i = 0; i < count; i++) {
//       answer += key;
//     }
//   });

//   if (!answer) return "-1";

//   answer = [...answer].sort((a, b) => b - a).join("");

//   return answer.slice(0, 1) === "0" ? "0" : answer;
// }

// 리팩토링
function solution(X, Y) {
  const countOccurrences = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
  };
  const xObj = countOccurrences([...X]);
  const yObj = countOccurrences([...Y]);

  const findIntersection = (obj1, obj2) => {
    return Object.keys(obj1).filter((key) => obj2[key]);
  };

  const intersection = findIntersection(xObj, yObj);

  let answer = "";
  intersection.forEach((key) => {
    const count = Math.min(xObj[key], yObj[key]);
    answer += key.repeat(count);
  });

  if (!answer) return "-1";

  answer = [...answer].sort((a, b) => b - a).join("");

  return answer.startsWith("0") ? "0" : answer;
}

// console.log(solution("100", "203045")); // "0"
console.log(solution("5525", "1255")); // "552"

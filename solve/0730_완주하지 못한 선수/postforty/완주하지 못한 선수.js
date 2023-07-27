// 1차 시도 - 시간 초과
// function solution(participant, completion) {
//   pObj = participant.reduce((acc, curr) => {
//     !acc[curr] ? (acc[curr] = 1) : acc[curr]++;
//     return acc;
//   }, {});

//   cObj = completion.reduce((acc, curr) => {
//     !acc[curr] ? (acc[curr] = 1) : acc[curr]++;
//     return acc;
//   }, {});

//   for (key in pObj) {
//     if (!Object.keys(cObj).includes(key) || pObj[key] !== cObj[key]) return key;
//   }
// }

// 2차 시도 - 성공
// includes() → hasOwnProperty()
function solution(participant, completion) {
  pObj = participant.reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : acc[curr]++;
    return acc;
  }, {});

  cObj = completion.reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 1) : acc[curr]++;
    return acc;
  }, {});

  for (key in pObj) {
    if (!cObj.hasOwnProperty(key) || pObj[key] !== cObj[key]) return key;
  }

  return "";
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"

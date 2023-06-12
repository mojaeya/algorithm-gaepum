function solution(id_list, report, k) {
  const reportSet = Array.from(new Set(report));

  const reportObj = reportSet.reduce((acc, item) => {
    const [_, b] = item.split(" ");
    acc[b] = acc[b] ? acc[b] + 1 : 1;
    return acc;
  }, {});

  const resultArr = Object.keys(reportObj).filter((v) => reportObj[v] >= k);

  const idObj = id_list.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {});

  // reportSet을 순회해야하는데 report를 순회하는 실수를 저질러 저주에 걸림 ㅠ
  reportSet.forEach((v) => {
    const [a, b] = v.split(" ");
    if (resultArr.includes(b)) {
      idObj[a]++;
    }
  });

  const answer = id_list.map((v) => idObj[v]);
  return answer;
}

// console.log(
//   solution(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
//     2
//   )
// );
// 이 테스트 케이스가 저주에서 풀려나게 해주었음!
console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    [
      "muzi frodo",
      "apeach frodo",
      "frodo neo",
      "muzi neo",
      "apeach muzi",
      "muzi neo",
    ],
    2
  )
); // [2, 1, 2, 0]
// console.log(
//   solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
// );
// console.log(
//   solution(
//     ["muzi", "frodo", "apeach", "neo"],
//     ["muzi frodo", "apeach frodo", "apeach neo", "muzi neo"],
//     1
//   )
// );

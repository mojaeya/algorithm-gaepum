const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;

// const id_list = ["con", "ryan"];
// const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
// const k = 3;

console.log(solution(id_list, report, k));

function solution(id_list, report, k) {
  const result = new Array(id_list.length);
  result.fill(0);
  const reportedList = {};

  console.log("result", result);

  id_list.map((user) => {
    reportedList[user] = [];
  });

  console.log("reportedList", reportedList);

  report.map((user) => {
    const [reporter, reported] = user.split(" ");
    if (!reportedList[reported].includes(reporter)) {
      reportedList[reported].push(reporter);
    }
  });

  console.log("reportedList", reportedList);

  for (const report in reportedList) {
    if (reportedList[report].length >= k) {
      reportedList[report].map((user) => {
        console.log(result);
        result[id_list.indexOf(user)] += 1;
      });
    }
  }
  return result;
}

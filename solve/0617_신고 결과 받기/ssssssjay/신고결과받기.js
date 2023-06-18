function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  const BOARD = {};
  id_list.forEach((id) => {
    BOARD[id] = new Set();
  });
  report.forEach((str) => {
    const [report, reported] = str.split(" ");
    BOARD[reported].add(report);
  });
  for (const reporters of Object.values(BOARD)) {
    if (reporters.size >= k) {
      reporters.forEach((reporter) => {
        answer[id_list.indexOf(reporter)] += 1;
      });
    }
  }

  return answer;
}

function solution(id_list, report, k) {
  const answer = Array(id_list.length).fill(0);
  // key: 신고받은 사람(string), value: 해당 유저를 신고한 사람들(Set)
  const BOARD = {};
  // 보드 초기화
  id_list.forEach((id) => {
    BOARD[id] = new Set();
  });
  // 신고건수들을 순회하며, 신고한 사람들(Set)에다가 추가
  report.forEach((str) => {
    const [report, reported] = str.split(" ");
    BOARD[reported].add(report);
  });
  // 신고한 사람들의 길이가 k이상이면 그 신고자들에게 알림 건수를 1씩 증가한다
  for (const reporters of Object.values(BOARD)) {
    if (reporters.size >= k) {
      reporters.forEach((reporter) => {
        answer[id_list.indexOf(reporter)] += 1;
      });
    }
  }

  return answer;
}

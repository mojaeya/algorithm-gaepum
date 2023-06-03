function solution(today, terms, privacies) {
  const answer = [];

  // 1년: 12달, 1달: 28일, 입력값의 제한사항: 2000년부터
  const MONTHS_PER_YEAR = 12;
  const DAYS_PER_MONTH = 28;
  const BEGINNING_YEAR = 2000;

  // 약관종류별 유효기간을 담은 객체
  const TERM_BOARD = {};
  terms.forEach((data) => {
    // data예시: "A 6"
    const [type, term] = data.split(" ");
    TERM_BOARD[type] = term;
  });

  console.log(TERM_BOARD);

  // 2000년 1월 1일 부터 입력날까지 일수를 구하는 함수
  // date예시: "2022.05.19"
  function calcDaysFrom(date) {
    const [y, m, d] = date.split(".").map(Number);
    return ((y - BEGINNING_YEAR) * MONTHS_PER_YEAR + m) * DAYS_PER_MONTH + d;
  }

  // 2000년부터 오늘까지의 일수
  const daysUntilToday = calcDaysFrom(today);

  privacies.forEach((privacy, idx) => {
    const [collectionDate, type] = privacy.split(" ");
    // 유효일수예시: 2022.06.02에서 6달이라고 치면, 2022.12.01(하루가빠짐)
    const expirationPeriod = TERM_BOARD[type] * DAYS_PER_MONTH - 1;
    // 2000부터 수집일까지의 일수
    const daysUntilCollection = calcDaysFrom(collectionDate);
    // 2000부터 만료일까지의 일수
    const daysUnillExpiration = daysUntilCollection + expirationPeriod;
    // 만료일까지의 일수가 오늘까지의 일수보다 작다면 유효기간이 지난 것이다
    // 2000 -----------------오늘 (이거는 지난거_정답에 넣어야함)
    // 2000 ---------- 만료일
    // 2000 ------ 오늘 (이거는 유효한거)
    if (daysUnillExpiration < daysUntilToday) answer.push(idx + 1);
  });

  console.log(answer);

  return answer;
}

// prettier-ignore
solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]); // [1, 3]
// prettier-ignore
solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]); // [1, 4, 5]

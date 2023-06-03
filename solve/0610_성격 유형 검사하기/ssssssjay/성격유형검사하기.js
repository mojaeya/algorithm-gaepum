function solution(survey, choices) {
  const types = ["RT", "CF", "JM", "AN"];
  const scoreBoard = {};
  // 유형별 점수 초기화
  types.forEach((type) => type.split("").forEach((t) => (scoreBoard[t] = 0)));

  survey.forEach((q, i) => {
    const [typeOne, typeTwo] = q.split("");
    // 4를 기준으로 떨어진 만큼 점수가 됨
    // 4보다 크면 뒤에가 점수를 받고, 아니면 앞에가 점수를 받음
    const score = Math.abs(4 - choices[i]);
    // prettier-ignore
    choices[i] < 4 ? (scoreBoard[typeOne] += score) : (scoreBoard[typeTwo] += score);
  });

  // prettier-ignore
  return types.map((str) => {
      // str후보: "RT", "CF", "JM", "AN"
    const [one, two] = str.split("");
    // 사전상의 뒤에 알파벳이 더 크다면 걔가 성격이 되지만, 그렇지 않다면 앞에가 성격이 됨
      return scoreBoard[two] > scoreBoard[one] ? two : one;
    }).join("");
}

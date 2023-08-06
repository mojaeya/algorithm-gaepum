function solution(players, callings) {
  const rankingName = {}; // 키: 등수, 밸류: 이름
  const nameRanking = {}; // 키: 이름, 밸류: 등수
  players.forEach((name, idx) => {
    rankingName[idx] = name;
    nameRanking[name] = idx;
  });
  callings.forEach((overtaker) => {
    const curIdx = nameRanking[overtaker]; // 추월할 자의 현재 등숟
    const nextIdx = curIdx - 1; // 추월하고 나서의 등수(한명 제치므로 마이너스 1)
    const loser = rankingName[nextIdx]; // 추월당하는 사람의 이름

    // prettier-ignore
    [nameRanking[overtaker], nameRanking[loser]] = [nameRanking[loser], nameRanking[overtaker]];
    // prettier-ignore
    [rankingName[curIdx], rankingName[nextIdx]] = [rankingName[nextIdx], rankingName[curIdx]];
  });

  // 미리 길이만큼 배열선언을 해주지 않아도 자바스크립트의 특성 상 작동한다
  const result = Array(players.length);

  // 인덱스 차례대로 배열에 이름이 할당된다(0부터 담기는 것을 보장하지 않음!)
  for (const [name, idx] of Object.entries(nameRanking)) {
    result[idx] = name;
  }
  return result;
}

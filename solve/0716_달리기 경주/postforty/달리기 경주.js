// https://school.programmers.co.kr/learn/courses/30/lessons/178871
function solution(players, callings) {
  // 객체 생성 코드 유의
  const playersObj = players.reduce((acc, curr, idx) => {
    acc[curr] = idx;
    return acc;
  }, {});
  callings.forEach((v) => {
    let a = playersObj[v] - 1;
    let b = playersObj[v];
    // 배열을 이용해 스왑
    [players[a], players[b]] = [players[b], players[a]];
    [playersObj[players[a]], playersObj[players[b]]] = [a, b];
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]

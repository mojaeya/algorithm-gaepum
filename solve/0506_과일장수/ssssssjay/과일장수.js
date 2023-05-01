function solution(k, m, score) {
  // k점이 최상품의 사과점수입니다
  // 한 상자에 m개씩 담아 포장합니다
  // 사과들의 점수가 score에 담깁니다
  // 제일 비사게 사과를 팔고싶고, 사과 한상자의 가격은 상자의 최소점수 * 사과갯수입니다
  // 문제점 1) m의 배수로 사과가 들어오지 않는다
  // 문제점 2) 가장 점수가 낮은 사과를 기준으로 가격이 책정되기 때문에 한상자에 비싼걸 우선으로 밀어넣는다
  var answer = 0;

  // 팔수있는 상자의 갯수
  const boxCount = Math.floor(score.length / m);
  // 사과점수 기준으로 내림차순 정렬
  const sortedArr = score.sort((a, b) => b - a);

  // 순회를 상자갯수 * 사과갯수 만큼 돌면서,
  for (let i = 0; i < boxCount * m; i++) {
    // 한상자만큼의 단위가 되면, 그상자의 가격을 더한다
    // 3개씩 들어간다 치면, 인덱스 기준 2 5 8 ...
    if (i % m === m - 1) answer += sortedArr[i] * m;
  }

  return answer;
}

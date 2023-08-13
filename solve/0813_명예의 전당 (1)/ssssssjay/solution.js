function solution(k, score) {
  const answer = [];
  // 명예의 전당 점수 배열: 내림차순으로 정렬되게 만들어진다
  const HallOfFame = Array(k).fill(0);

  // 로직에서 몇일째인지를 써서 for .. in 활용
  for (const day in score) {
    const dayScore = score[day];
    // 명예의전당 하루마다 바꿔주기
    for (let i = 0; i < k; i++) {
      // 만일 상위권의 누군가의 점수보다 높으면 갈아끼우는 로직실행 후 반복문 탈출
      if (dayScore > HallOfFame[i]) {
        HallOfFame.splice(i, 0, dayScore);
        HallOfFame.pop();
        break;
      }
    }
    // 꼴찌 점수 넣기, k일까지는 조금 특수하므로 코드추가
    // [0, 0, 0, 0]에서 [10, 0, 0 ,0] => [10, 10, 0 ,0] => [20, 10, 10, 0] 이런식으로 생성되므로
    answer.push(day < k ? HallOfFame[day] : HallOfFame[k - 1]);
  }
  return answer;
}

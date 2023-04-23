let park = ["SOO", "OOO", "OOO"];
let routes = ["E 2", "S 2", "W 1"];

console.log(solution(park, routes));

function solution(park, routes) {
  // 공원 크기 저장
  const rows = park.length;
  const cols = park[0].length;

  let start;
  // 시작 위치 찾기
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (park[i][j] == "S") start = [i, j];
    }
  }

  // 이동 방향 저장
  const dirDict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 주어진 route에 따라 이동하기
  for (const route of routes) {
    const [dir, distanceStr] = route.split(" ");
    let distance = parseInt(distanceStr);
    let [nx, ny] = start;

    let step = 0;
    // 주어진 거리만큼 이동하기
    while (step < distance) {
      nx += dirDict[dir][0];
      ny += dirDict[dir][1];

      // 범위를 벗어나거나 장애물(X)을 만나면 중단
      if (nx < 0 || rows <= nx || ny < 0 || cols <= ny || park[nx][ny] === "X")
        break;
      step++;
    }

    // 거리만큼 이동한 경우, 새로운 시작 위치를 업데이트
    if (step === distance) start = [nx, ny];
  }

  // 최종 위치 반환
  return start;
}

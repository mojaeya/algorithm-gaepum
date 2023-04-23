function solution(park, routes) {
  const start = [];
  x = [];
  wSize = park[0].length;
  hSize = park.length;

  // 인덱스와 값을 함께 이용하기 위해 for in 이용
  for (let i in park) {
    const str = [...park[i]];
    for (let j in str) {
      if (str[j] === "S") {
        start.push(parseInt(i));
        start.push(parseInt(j));
      }
      if (str[j] === "X") {
        x.push([parseInt(i), parseInt(j)]);
      }
    }
  }

  const move = (route) => {
    temp = [...start];
    route[1] = parseInt(route[1]);
    for (let i = 0; i < route[1]; i++) {
      switch (route[0]) {
        case "W":
          temp[1]--;
          break;
        case "E":
          temp[1]++;
          break;
        case "N":
          temp[0]--;
          break;
        case "S":
          temp[0]++;
          break;
      }
      if (temp[0] < 0 || temp[0] >= hSize || temp[1] < 0 || temp[1] >= wSize) {
        return;
      }
      // 이중 배열 요소 비교를 위해 안쪽 배열을 문자열로 변경하여 비교함'
      // console.log("x::", x);
      // console.log("temp::", temp);
      // if (x.map((arr) => JSON.stringify(arr)).includes(JSON.stringify(temp))) {
      if (
        x
          .map((arr) => JSON.stringify(arr))
          .some((x) => x === JSON.stringify(temp))
      ) {
        return;
      }
    }
    return temp;
  };

  for (let route of routes) {
    r = route.split(" ");
    const coord = move(r);
    if (coord) {
      start.splice(0, 2, coord[0], coord[1]);
    }
  }

  return start;
}

// W - 좌, E - 우, N - 상, S - 하
console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]

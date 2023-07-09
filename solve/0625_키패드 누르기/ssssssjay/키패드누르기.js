function solution(numbers, hand) {
  let answer = "";
  let leftPos = "*";
  let rightPos = "#";

  // 0,1   1,1   2,1   3,1
  // 0,2   1,2   2,2   3,2
  const KEY = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  const findCoord = (v) => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 3; c++) {
        if (KEY[r][c] === v) return [r, c];
      }
    }
  };

  const calcDist = (coord1, coord2) => {
    return Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]);
  };

  numbers.forEach((num) => {
    if (num % 3 === 1 || num === "*") {
      leftPos = num;
      answer += "L";
    } else if ((num !== 0 && num % 3 === 0) || num === "#") {
      rightPos = num;
      answer += "R";
    } else {
      // 거리 계산
      const numCoord = findCoord(num);
      const leftCoord = findCoord(leftPos);
      const rightCoord = findCoord(rightPos);
      const Ldist = calcDist(numCoord, leftCoord);
      const Rdist = calcDist(numCoord, rightCoord);

      if (Ldist < Rdist) {
        leftPos = num;
        answer += "L";
      } else if (Rdist < Ldist) {
        rightPos = num;
        answer += "R";
      } else {
        hand[0] === "l" ? (leftPos = num) : (rightPos = num);
        answer += hand[0].toUpperCase();
      }
    }
  });

  return answer;
}

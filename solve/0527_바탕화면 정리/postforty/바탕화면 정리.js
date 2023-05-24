function solution(wallpaper) {
  const answer = [];

  let { lux, luy } = {
    lux: wallpaper.length - 1,
    luy: wallpaper[0].length - 1,
  };
  let rdx = (rdy = 0);

  wallpaper.forEach((v, x) =>
    [...v].forEach((w, y) => {
      if (w === "#") {
        if (x < lux) {
          lux = x;
        }
        if (y < luy) {
          luy = y;
        }
        if (x > rdx) {
          rdx = x;
        }
        if (y > rdy) {
          rdy = y;
        }
      }
    })
  );

  answer.push(lux);
  answer.push(luy);
  answer.push(rdx + 1);
  answer.push(rdy + 1);

  return answer;
}

// console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
// console.log(solution(["..", "#."])); // [1, 0, 2, 1]
console.log(solution(["...#"]));

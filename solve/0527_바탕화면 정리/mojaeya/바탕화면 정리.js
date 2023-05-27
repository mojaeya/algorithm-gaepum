const wallpaper = [".#...", "..#..", "...#."];
// const wallpaper = [
//   "..........",
//   ".....#....",
//   "......##..",
//   "...##.....",
//   "....#.....",
// ];

console.log(solution(wallpaper));

function solution(wallpaper) {
  const X = [];
  const Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      if (wallpaper[i][j] === "#") {
        X.push(i);
        Y.push(j);
      }
    }
  }

  console.log(X);
  console.log(Y);

  return [
    Math.min(...X),
    Math.min(...Y),
    Math.max(...X) + 1,
    Math.max(...Y) + 1,
  ];
}

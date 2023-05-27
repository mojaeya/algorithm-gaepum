/**
 * 결국 2중 배열의 min max를 구하면 되는 문제?
 * 심플하게 풀어보았습니다
 */
function solution(wallpaper) {
  let answer = []

  const MAX = { x: wallpaper.length, y: wallpaper[0].length }
  let min = { x: wallpaper.length, y: wallpaper[0].length }
  let max = { x: 0, y: 0 }

  for (let i = 0; i < MAX.x; i++) {
    for (let j = 0; j < MAX.y; j++) {
      if (wallpaper[i][j] === '#') {
        min.y = Math.min(min.y, j)
        max.y = Math.max(max.y, j + 1)
        min.x = Math.min(min.x, i)
        max.x = Math.max(max.x, i + 1)
      }
    }
  }

  answer = [min.x, min.y, max.x, max.y]
  return answer
}

const res2 = solution([
  '..........',
  '.....#....',
  '......##..',
  '...##.....',
  '....#.....',
])
console.log(res2)

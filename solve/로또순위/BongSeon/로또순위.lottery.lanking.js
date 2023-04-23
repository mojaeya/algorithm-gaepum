// C30L77484

function solution(lottos, win_nums) {
  // console.log(lottos)
  // console.log(win_nums)

  let zeros = lottos.filter((num) => {
    return num === 0
  })
  lottos = lottos.filter((num) => {
    return !(num === 0)
  })
  // console.log('zeros ', zeros)

  // A - B 차집합 : 당첨 안된 번호
  let fails = lottos.filter((num) => {
    return !win_nums.includes(num)
  })
  // A X B 교집합 : 당첨된 번호
  let hits = lottos.filter((num) => {
    return !fails.includes(num)
  })
  // console.log('hits ', hits)
  // console.log('fails ', fails)

  // B - A 차 : 당첨 번호 중 매칭 안된 번호
  let ramains = win_nums.filter((num) => {
    return !lottos.includes(num)
  })
  // console.log('ramains ', ramains)

  const max = Math.min(6 - hits.length - zeros.length + 1, 6)
  const min = Math.min(6 - hits.length + 1, 6)

  var answer = [max, min]
  return answer
}

const r1 = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])
console.log(r1)

const r3 = solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])
console.log(r3)

const r2 = solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])
console.log(r2)

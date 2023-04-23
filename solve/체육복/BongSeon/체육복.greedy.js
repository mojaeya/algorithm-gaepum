function solution(n, lost, reserve) {
  var answer = n - lost.length
  var loster = new Set(lost.sort())
  var set = new Set(reserve.sort())

  loster.forEach((wanner) => {
    if (set.has(wanner)) {
      loster.delete(wanner)
      set.delete(wanner)
      console.log(`${wanner}는 체육복 ${wanner}를 입었다`)
      answer++
    }
  })

  loster.forEach((wanner) => {
    const findOrder = [-1, 1] // [0, -1, 1]
    for (let i = 0; i <= 1; i++) {
      if (set.has(wanner + findOrder[i])) {
        set.delete(wanner + findOrder[i])
        console.log(`${wanner}는 체육복 ${wanner + findOrder[i]}를 입었다`)
        answer++
        break
      }
    }
  })
  return answer
}

let res = solution(5, [2, 4], [1, 3, 5])
console.log('return ', res)

res = solution(5, [2, 4], [3])
console.log('return ', res)

res = solution(3, [3], [1])
console.log('return ', res)

res = solution(5, [4, 1, 5], [1, 5])
console.log('return ', res)

// https://school.programmers.co.kr/learn/courses/30/lessons/42862

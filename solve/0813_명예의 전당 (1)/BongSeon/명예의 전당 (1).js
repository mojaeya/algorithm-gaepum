function solution(k, score) {
  var answer = []
  let hof = []
  score.forEach((v, i) => {
    if (i < k) hof.unshift(v)
    else {
      if (v > hof[0]) hof[0] = v
      else {
        answer.push(hof[0])
        return
      }
    }
    answer.push(hof.sort((a, b) => a - b)[0])
  })
  return answer
}

// console.log('hof: ', hof)

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))

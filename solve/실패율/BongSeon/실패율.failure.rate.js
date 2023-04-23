// C30L42889

function solution(N, stages) {
  var answer = []
  let remainer = stages.length
  let temp = []
  for (let s = 1; s <= N; s++) {
    let peoples = stages.filter((p) => {
      return p === s
    }).length

    const fr = peoples / remainer
    console.log(
      `stage:${s} peoples in here:${peoples} fr:(${peoples}/${remainer}) ${fr}`
    )
    remainer -= peoples
    temp.push({ stage: s, fr })
  }
  temp.sort((a, b) => {
    return b.fr - a.fr
  })
  console.log(temp)
  temp.forEach((t) => {
    answer.push(t.stage)
  })
  return answer
}

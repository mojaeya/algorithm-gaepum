function solution(_today, _terms, privacies) {
  let terms = new Map()
  const today = convDateToNum(_today)
  _terms.forEach((term) => {
    terms.set(term.split(' ')[0], term.split(' ')[1] * 28)
  })
  let answer = []
  privacies.forEach((prv, i) => {
    const prvDateNum = convDateToNum(prv.split(' ')[0])
    const prvTermDateNum = terms.get(prv.split(' ')[1])

    if (today >= prvDateNum + prvTermDateNum) answer.push(i + 1)
  })
  return answer
}

function convDateToNum(date) {
  const temp = date.split('.')
  return (temp[0] - 2000) * 336 + temp[1] * 28 + +temp[2]
}

const res1 = solution(
  '2022.05.19',
  ['A 6', 'B 12', 'C 3'],
  ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
)
console.log('res1 ', res1)

const res2 = solution(
  '2020.01.01',
  ['Z 3', 'D 5'],
  [
    '2019.01.01 D',
    '2019.11.15 Z',
    '2019.08.02 D',
    '2019.07.01 D',
    '2018.12.28 Z',
  ]
)
console.log('res2 ', res2)

// console.log('today ', today)
// console.log(terms)
// console.log(today, ' ', prvDateNum, '+', prvTermDateNum, '=',  prvDateNum + prvTermDateNum )

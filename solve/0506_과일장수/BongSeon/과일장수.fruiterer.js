// 3 ≤ k ≤ 9
// 3 ≤ m ≤ 10
// 7 ≤ score의 길이 ≤ 1,000,000
// 1 ≤ score[i] ≤ k
// 이익이 발생하지 않는 경우에는 0을 return 해주세요.

/**
 * @param {*} k : 졈수 상한
 * @param {*} m : 박스 크기 (한 상자의 과일 수)
 * @param {*} score : 과일 배열
 */
function solution(k, m, score) {
  if (score.length < m) return 0

  const fruits = [0, 0, 0, 0, 0, 0, 0, 0, 0].splice(0, k)

  for (let i = 1; i <= k; i++) {
    fruits[i - 1] = score.filter((s) => {
      return s === i
    }).length
  }
  extract(fruits, sum(fruits) % m) // 쓸모 없는 과일 빼줌 (나머지 만큼)

  const total = sum(fruits) / m
  let answer = 0
  for (let i = 0; i < total; i++) {
    const min = extract(fruits, m)
    answer += min * m
  }
  return answer
}

// fruits의 총 합
function sum(fruits) {
  return fruits.reduce((cum, n) => {
    return cum + n
  })
}
// fruits에서 num 만큼 빼고 뺀 과일중 최소 값을 리턴
function extract(fruits, num) {
  let min = 0
  for (let k = 0; k < num; k++) {
    for (let j = 0; j < fruits.length; j++) {
      if (fruits[j] > 0) {
        if (!min) min = j + 1
        fruits[j]--
        break
      }
    }
  }
  return min
}

// 풀이 과정
// [0,0,0]
// [3,2,2]  // 1원 과일 3개, 2원 과일 2개, 3원 과일 2개
// [0,2,2] m 4
// [0,0,0] min = 2
// 2(min) * 4(m) = 8 -> answer에 더해짐

// const res = solution(3, 4, [1, 2, 3, 1, 2, 3, 1])
const res = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])
console.log('res ', res)

// 1
// k : 3
// m : 4
// score [1, 2, 3, 1, 2, 3, 1]
// 가능한 박스 1
// 최대 점수 [3, 3, 2, 2]

// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// function solution(k, m, score) {
//   var answer = 0
//   if (score.length < m) return answer

//   const fruits = [0, 0, 0, 0, 0, 0, 0, 0, 0].splice(0, k)

//   for (let i = 1; i <= k; i++) {
//     const temp = score.filter((s) => {
//       return s === i
//     }).length
//     fruits[i - 1] = temp
//   }

//   const discard = sum(fruits) % m

//   for (let i = 0; i < discard; i++) {
//     for (let k = 0; k < fruits.length; k++) {
//       if (fruits[k] > 0) {
//         fruits[k]--
//         break
//       }
//     }
//   }
//   const total = sum(fruits) / m
//   for (let i = 0; i < total; i++) {
//     let price = 0
//     for (let k = 0; k < m; k++) {
//       for (let j = 0; j < fruits.length; j++) {
//         if (fruits[j] > 0) {
//           if (!price) price = j + 1
//           fruits[j]--
//           break
//         }
//       }
//     }
//     answer += price * m
//   }

//   return answer
// }
// function sum(fruits) {
//   return fruits.reduce((cum, n) => {
//     return cum + n
//   })
// }

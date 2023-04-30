// const ingredient_name = ['', '빵', '야채', '고기']
// 1,2,3,1 일때 => 햄버거 완성

// [2, 1, 1, 2, 3, 1, 2, 3, 1]
// [2, 1,             2, 3, 1]
// [2,                       ]
function solution(ingredient) {
  let answer = 0

  let i = 0
  while (i < ingredient.length) {
    if (check(i, ingredient)) {
      ingredient.splice(i, 4)
      i = Math.max(i - 3, 0)
      answer++
      if (ingredient.length < 4) break
    } else {
      i++
    }
  }

  return answer
}

function check(k, ingredient) {
  const sample = ingredient.slice(k, k + 4)
  if (sample.length !== 4) return false
  const burger = [1, 2, 3, 1]
  return sample.every((v, i) => v === burger[i])
}

let res1 = solution([2, 1, 1, 2, 3, 1, 2, 3, 1])
console.log('res1: ', res1)

let res2 = solution([1, 3, 2, 1, 2, 1, 3, 1, 2])
console.log('res2: ', res2)

// 실패한 방법 1.
// replace를 이용한 방법 (시간 초과)
// function solution(ingredient) {
//   let answer = 0
//   ingredient = ingredient.toString().replaceAll(',', '')
//   while (true) {
//     const last = ingredient
//     ingredient = ingredient.replace('1231', '')
//     if (last.length === ingredient.length) break
//     answer++
//     if (ingredient.length < 4) break
//   }
//   return answer
// }

// 실패한 방법 2.
// indexOf를 이용한 방법 (시간 초과)
// function solution(ingredient) {
//   let answer = 0
//   ingredient = ingredient.toString().replaceAll(',', '')
//   while (true) {
//     if (ingredient.length < 4) {
//       break
//     }
//     let i = ingredient.indexOf('1231')
//     if (i < 0) {
//       break
//     }
//     answer++
//     ingredient =
//       ingredient.substring(0, i) +
//       ingredient.substring(i + 4, ingredient.length)
//   }

//   return answer
// }

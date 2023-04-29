// const ingredient_name = ['', '빵', '야채', '고기']
// 1,2,3,1 일때 => 햄버거 완성

// 3.
function solution(ingredient) {
  let answer = 0
  return answer
}

let ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]
let res = solution(ingredient)
// console.debug('res 1: ', res)

// ingredient = [1, 3, 2, 1, 2, 1, 3, 1, 2]
// res = solution(ingredient)

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

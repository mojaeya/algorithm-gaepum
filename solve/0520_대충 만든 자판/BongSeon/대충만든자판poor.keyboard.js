/**
 * 2. 두번째 풀이 (속도가 개선됨)
 *    worst 테스트 18 (13.05ms, 37.9MB)
 */
function solution(keymap, targets) {
  let nkey = new Map()

  for (let j = 65; j < 91; j++) {
    const c = String.fromCharCode(j)
    // * -  알파벳을 먼저 순회하며 keymap에서 최단 입력을
    // * -  찾아서 nkey(Map)을 생성

    for (let i = 0; i < 100; i++) {
      let m = 0 // 모든 keymap의 i번째 인덱스가 없다면 종료
      for (let k = 0; k < keymap.length; k++) {
        if (keymap[k][i]) {
          m++
          if (keymap[k][i] === c) {
            m = 0 // 찾으면 종료
            nkey.set(c, i + 1)
            // console.log('nkey.set() ', c, i + 1)
            break
          }
        }
      }
      if (m === 0) break
    }
  }
  // console.log(nkey)

  let answer = []
  targets.forEach((target) => {
    let acc = 0
    for (let i = 0; i < target.length; i++) {
      const n = nkey.get(target[i])
      if (!n) {
        acc = -1
        break
      }
      acc += n
    }
    answer.push(acc)
  })
  return answer
}

// 이번 keymap에서 해당키를 누르기 위해 몇번을
// 입력해야하는지 밝혀진 항목들을 저장
// nkey Map(5) {
// 'A' => 1, 'B' => 1, 'F' => 3, 'C' => 3, 'G' => 4
// }

let res = solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB'])
console.log('return ', res) // [ 9, 4 ]

res = solution(['AA'], ['B'])
console.log('return ', res) // [ -1 ]

res = solution(['AGZ', 'BSSS'], ['ASA', 'BGZ'])
console.log('return ', res) // [ 4, 6 ]

//
//
// 이전 풀이
//
//
/// 1. 첫번째 풀이
/// -  keymap자체를 순회하며 nkey(Map)을 생성하는 방식
///  worst 테스트 16 〉	통과 (59.94ms, 40MB)

// function solution(keymap, targets) {
//   let nkey = new Map()
//   for (let i = 0; i < 100; i++) {
//     let m = 0
//     keymap.forEach((key) => {
//       if (key[i]) {
//         m++
//         if (!nkey.get(key[i])) nkey.set(key[i], i + 1)
//       }
//       // console.log('k: ', key[i])
//     })
//     if (m === 0) break
//   }
//   console.log(nkey)
//   let answer = []
//   targets.forEach((target) => {
//     let acc = 0
//     for (let i = 0; i < target.length; i++) {
//       const n = nkey.get(target[i])
//       if (!n) {
//         acc = -1
//         break
//       }
//       acc += n
//     }
//     answer.push(acc)
//   })
//   return answer
// }

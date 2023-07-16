function solution(players, callings) {
  var arr = []
  players.forEach((player, i) => {
    arr[player] = i
  })

  // players [ 'mumu', 'soe', 'poe', 'kai', 'mine' ]
  // arr [ mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 ]
  callings.forEach((call) => {
    const front = players[arr[call] - 1]
    players[arr[call]] = front
    players[arr[call]-- - 1] = call
    arr[front]++
    console.log(players)
    console.log(arr)
  })
  // [ 'mumu', 'soe', 'kai', 'poe', 'mine' ]
  // [ mumu: 0, soe: 1, poe: 3, kai: 2, mine: 4 ]
  // [ 'mumu', 'kai', 'soe', 'poe', 'mine' ]
  // [ mumu: 0, soe: 2, poe: 3, kai: 1, mine: 4 ]
  // [ 'mumu', 'kai', 'soe', 'mine', 'poe' ]
  // [ mumu: 0, soe: 2, poe: 4, kai: 1, mine: 3 ]
  // [ 'mumu', 'kai', 'mine', 'soe', 'poe' ]
  // [ mumu: 0, soe: 3, poe: 4, kai: 1, mine: 2 ]
  // [ 'mumu', 'kai', 'mine', 'soe', 'poe' ]

  return players
}

const res = solution(
  ['mumu', 'soe', 'poe', 'kai', 'mine'],
  ['kai', 'kai', 'mine', 'mine']
)
console.log(res)

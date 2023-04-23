function getStartPosition(park) {
  for (let i = 0; i < park.length; i++) {
    for (let k = 0; k < park.length; k++) {
      if (park[i][k] === 'S') {
        return [i, k]
      }
    }
  }
}

function move(park, route, p) {
  const op = route[0]
  const d = parseInt(route[2])
  let next = p
  if (op === 'E') {
    if (p[1] + d >= park[0].length) return p

    for (let i = 1; i <= d; i++) {
      next = park[p[0]][p[1] + i]
      if (next === 'X') {
        return p
      }
    }
    return [p[0], p[1] + d]
  } else if (op === 'W') {
    if (p[1] - d < 0) return p

    for (let i = 1; i <= d; i++) {
      next = park[p[0]][p[1] - i]
      if (next === 'X') {
        return p
      }
    }
    return [p[0], p[1] - d]
  } else if (op === 'N') {
    if (p[0] - d < 0) return p

    for (let i = 1; i <= d; i++) {
      next = park[p[0] - i][p[1]]
      if (next === 'X') {
        return p
      }
    }
    return [p[0] - d, p[1]]
  } else if (op === 'S') {
    if (p[0] + d >= park.length) return p

    for (let i = 1; i <= d; i++) {
      next = park[p[0] + i][p[1]]
      if (next === 'X') {
        return p
      }
    }
    return [p[0] + d, p[1]]
  }

  return p
}

function solution(park, routes) {
  let p = getStartPosition(park) // current position
  routes.forEach((route) => {
    p = move(park, route, p)
  })
  return p
}

// const r1 = solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1'])
// console.log('r1 p', r1)
// const r2 = solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1'])
// console.log('r2 p', r2)
const r3 = solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1'])
console.log('r3 p', r3)

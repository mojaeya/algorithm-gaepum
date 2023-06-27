function solution(cards1, cards2, goal) {
  const tempArr = [];

  for (let g of goal) {
    if (g === cards1[0]) {
      tempArr.push(cards1.shift());
    } else if (g === cards2[0]) {
      tempArr.push(cards2.shift());
    } else {
      return "No";
    }
  }

  if (JSON.stringify(goal) === JSON.stringify(tempArr)) {
    return "Yes";
  }
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

// console.log(
//   solution(
//     ["i", "water", "drink"],
//     ["want", "to"],
//     ["i", "want", "to", "drink", "water"]
//   )
// ); // "Yes"

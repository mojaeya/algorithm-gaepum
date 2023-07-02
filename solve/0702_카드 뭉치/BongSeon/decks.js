function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;

  let answer = "Yes";
  for (let i = 0; i < goal.length; i++) {
    if (cards1[j] === goal[i]) {
      j++;
    } else if (cards2[k] === goal[i]) {
      k++;
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}

const res1 = solution(
  ["i", "drink", "water"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
console.log(res1);

const res2 = solution(
  ["i", "water", "drink"],
  ["want", "to"],
  ["i", "want", "to", "drink", "water"]
);
console.log(res2);

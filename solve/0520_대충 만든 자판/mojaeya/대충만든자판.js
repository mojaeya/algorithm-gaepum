const keymap = ["ABACD", "BCEFD"];
const target = ["ABCD", "AABB"];

// const keymap = ["AA"];
// const target = ["B"];

// const keymap = ["BC"];
// const target = ["AC", "BC"];

console.log(solution(keymap, target));

function solution(keymap, target) {
  const answer = [];

  for (const targetItem of target) {
    let count = 0;

    for (const targetKey of targetItem) {
      const compare = [];

      for (const keymapItem of keymap) {
        const targetIdx = keymapItem.indexOf(targetKey);

        if (targetIdx !== -1) {
          compare.push(targetIdx);
        }
      }

      if (compare.length === 0) {
        count = -1;
        break;
      } else {
        compare.sort((a, b) => a - b);
        count += compare[0] + 1;
      }
    }

    answer.push(count);
  }

  return answer;
}

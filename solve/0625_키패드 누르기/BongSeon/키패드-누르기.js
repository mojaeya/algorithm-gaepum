function solution(numbers, hand) {
  let answer = "";
  hand = hand === "right" ? "R" : "L";
  let curL = 10;
  let curR = 12;

  numbers.forEach((_target) => {
    const target = _target === 0 ? 11 : _target;
    let shortHand;
    if (target === 1 || target === 4 || target === 7) {
      shortHand = "L";
    } else if (target === 3 || target === 6 || target === 9) {
      shortHand = "R";
    }

    if (!shortHand) {
      const distL = dist(target, curL);
      const distR = dist(target, curR);
      shortHand = distL == distR ? hand : distL < distR ? "L" : "R";
      console.log(target, curL, curR, distL, distR, shortHand);
    }
    console.log(target, shortHand);

    if (shortHand === "L") {
      curL = target;
    } else {
      curR = target;
    }
    answer += shortHand;
  });

  return answer;
}

function dist(_target, cur) {
  const target = _target === 0 ? 11 : _target;
  const sub = Math.abs(target - cur);

  const a = Math.floor(sub / 3);
  const b = sub % 3;

  return a + b;
}

// const res1 = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
// console.log(res1);
// const res2 = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// console.log(res2);

// tests
// console.log("-1-");
// console.log(dist(2, 1));
// console.log(dist(2, 3));

// console.log("-2-");
// console.log(dist(8, 11));
// console.log(dist(2, 4));
// console.log(dist(2, 6));
// console.log(dist(5, 1));
// console.log(dist(5, 3));
// console.log(dist(5, 7));
// console.log(dist(5, 9));
// console.log(dist(8, 4));
// console.log(dist(8, 6));

// console.log("-3-");
// console.log(dist(0, 2));
// console.log(dist(0, 4));
// console.log(dist(0, 6));

// console.log("-4-");
// console.log(dist(0, 1));
// console.log(dist(0, 3));

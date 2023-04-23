function solution(N, stages) {
  var answer = [];

  let count = stages.length;

  const stageObj = {};
  for (let i = 1; i <= N; i++) {
    stageObj[i] = 0;
  }

  for (let i of stages) {
    stageObj[String(i)] += 1;
  }

  tempArr = [];

  let stageArr = Object.entries(stageObj);

  for (let i = 0; i < N; i++) {
    tempArr.push(
      isNaN(stageArr[i][1] / count)
        ? [stageArr[i][0], 0]
        : [stageArr[i][0], stageArr[i][1] / count]
    );
    count -= stageArr[i][1];
  }

  tempArr.sort((a, b) => b[1] - a[1]);

  answer = tempArr.map((el) => Number(el[0]));

  return answer;
}

console.log(solution(4, [5, 5, 5, 5, 5]));

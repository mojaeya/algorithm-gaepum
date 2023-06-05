function solution(survey, choices) {
  var answer = "";
  const score = [
    [0, 0],
    [0, 3],
    [0, 2],
    [0, 1],
    [0, 0],
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  const result = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach(
    (v, i) => (result[v[score[choices[i]][0]]] += score[choices[i]][1])
  );

  answer = result["R"] >= result["T"] ? answer + "R" : answer + "T";
  answer = result["C"] >= result["F"] ? answer + "C" : answer + "F";
  answer = result["J"] >= result["M"] ? answer + "J" : answer + "M";
  answer = result["A"] >= result["N"] ? answer + "A" : answer + "N";

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"

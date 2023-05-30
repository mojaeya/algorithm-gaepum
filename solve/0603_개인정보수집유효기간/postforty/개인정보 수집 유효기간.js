function solution(today, terms, privacies) {
  var answer = [];

  const termsObj = terms.reduce((acc, cur) => {
    const [key, value] = cur.split(" ");
    acc[key] = parseInt(value, 10);
    return acc;
  }, {});

  const [orgYear, orgMonth, orgDay] = today
    .split(".")
    .map((v) => parseInt(v, 10));

  privacies.forEach((v, i) => {
    let [pDate, pLabel] = v.split(" ");
    let [copyYear, copyMonth, copyDay] = [orgYear, orgMonth, orgDay];
    let [pYear, pMonth, pDay] = pDate.split(".").map((v) => parseInt(v, 10));
    let rstYear = (rstMonth = rstDay = 0);
    if (copyDay >= pDay) {
      rstDay = copyDay - pDay;
    } else {
      rstDay = 28 + copyDay - pDay;
      copyMonth--;
    }
    if (copyMonth >= pMonth) {
      rstMonth = copyMonth - pMonth;
    } else {
      rstMonth = 12 + copyMonth - pMonth;
      copyYear--;
    }
    rstYear = copyYear - pYear;
    let totalDays = rstYear * 12 * 28 + rstMonth * 28 + rstDay;

    if (Math.floor(totalDays / 28) >= termsObj[pLabel]) answer.push(i + 1);
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]

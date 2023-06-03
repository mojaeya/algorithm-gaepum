const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];

console.log(solution(today, terms, privacies));

function solution(today, terms, privacies) {
  const expired = [];

  for (let i = 0; i < privacies.length; i++) {
    let [date, pCert] = privacies[i].split(" ");
    let formattedPdate = date.replace(/\./g, "-");

    const formattedToday = today.replace(/\./g, "-");

    let privaciesDate = new Date(formattedPdate);

    terms.forEach((term) => {
      let [tCert, month] = term.split(" ");
      if (tCert === pCert) {
        privaciesDate.setMonth(privaciesDate.getMonth() + Number(month));
      }
    });

    const todayDate = new Date(formattedToday);

    if (privaciesDate <= todayDate) {
      expired.push(i + 1);
    }
  }

  return expired;
}

function solution(new_id) {
  let answer = "";
  answer = new_id.toLowerCase();
  answer = answer.replace(/[^a-z0-9\-_.]/g, "");
  answer = answer.replace(/\.+/g, ".");
  answer = answer[0] === "." ? answer.slice(1, answer.length) : answer;
  answer = answer.slice(0, 15);
  answer =
    answer[answer.length - 1] === "."
      ? answer.slice(0, answer.length - 1)
      : answer;
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }
  console.log("answer :: ", typeof answer);
  return answer === "undefined" ? "aaa" : answer;
  //   return (answer === "undefined" ? undefined : answer) ?? "aaa";
}

console.log(solution("...!@BaT#*..y.abcdefghijklm."));
// console.log(solution("=.="));
// console.log(solution("aa"));

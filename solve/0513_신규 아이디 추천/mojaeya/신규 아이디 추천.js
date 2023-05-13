const new_id = "...!@BaT#*..y.abcdefghijklm";
// const new_id = "=.=";

console.log("최종 결과\n", solution(new_id));

function solution(new_id) {
  let answer = "";
  answer = new_id.toLowerCase(); // 소문자로 치환
  console.log("1단계\n", answer);
  answer = answer.replace(/[^\w.-]/g, ""); // 특수문자 제거
  console.log("2단계\n", answer);
  answer = answer.replace(/\.+/g, "."); // .이 2개 이상이면 .으로 치환
  console.log("3단계\n", answer);
  answer = answer.replace(/^\.|\.$/g, ""); // 처음과 끝의 . 제거
  console.log("4단계\n", answer);

  if (answer.length === 0) {
    answer = "a"; // 빈 문자열이면 a 대입
  } else if (answer.length >= 16) {
    answer = answer.substring(0, 15); // 16자 이상이면 15자까지만 남기기
    answer = answer.replace(/\.$/, ""); // 끝에 .이 있으면 제거
  }

  if (answer.length <= 2) {
    // 2자 이하면 마지막 문자를 길이가 3이 될 때까지 반복
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }

  return answer;
}

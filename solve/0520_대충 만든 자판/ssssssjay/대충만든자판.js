function solution(keymap, targets) {
  var answer = [];
  // 어떤 문자가 되었건, 최소로 눌러야한다 === 그 최소값만 알고있으면 된다
  const uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const dictionary = {};

  for (let i = 0; i < 26; i++) {
    // 초기화를 101로 하여, 나중에 연산시 101일 경우 연산을 멈추게한다
    dictionary[uppers[i]] = 101;
  }

  keymap.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      const alphabet = str[i];
      dictionary[alphabet] = Math.min(i + 1, dictionary[alphabet]);
    }
  });

  targets.forEach((str) => {
    let temp = 0;
    for (let i = 0; i < str.length; i++) {
      const target = str[i];
      if (dictionary[target] === 101) {
        temp = -1;
        break;
      } else {
        temp += dictionary[target];
      }
    }
    answer.push(temp);
  });

  return answer;
}

solution(["NABCD", "XABCD", "MABCD"], ["ABCD"]);

function solution(n, arr1, arr2) {
  /**
   * 숫자를 넘겨주면 배열을 반환하는 함수
   * @param {number} num 이진수로 변환할 숫자
   * @returns n자릿수에 맞게 변환된 이진수 배열
   */
  const convertBinary = (num) => {
    const arr = [];
    while (num > 0) {
      arr.push(num % 2);
      num = Math.floor(num / 2);
    }
    while (arr.length < n) {
      arr.push(0);
    }
    return arr.reverse();
  };
  const result = [];
  for (let i = 0; i < n; i++) {
    const row1 = convertBinary(arr1[i]);
    const row2 = convertBinary(arr2[i]);
    let str = "";
    for (let j = 0; j < n; j++) {
      // 하나라도 1이라면 #(벽)으로 만든다
      if (row1[j] || row2[j]) str += "#";
      else str += " ";
    }
    result.push(str);
  }
  return result;
}

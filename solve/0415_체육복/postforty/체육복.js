function solution(n, lost, reserve) {
  var answer = 0;

  let count = n - lost.length;

  // 배열 요소를 삭제하기 위한 remove 함수 정의
  const remove = (arr, rm) => {
    let idx = arr.indexOf(rm);
    arr.splice(idx, 1);
    return arr;
  };

  const sortedLost = lost.sort((a, b) => a - b);
  // count++시 중복 count를 막기 위해 한번 사용한 요소는 제거하기 위한 배열(불변성 유지 위함)
  let sortedLostRemove = [...sortedLost];
  let sortedReserve = reserve.sort((a, b) => a - b);

  // 여벌을 가지고 있는데 분실한 경우
  for (let i of sortedLost) {
    if (sortedReserve.includes(i)) {
      sortedLostRemove = remove(sortedLostRemove, i);
      sortedReserve = remove(sortedReserve, i);
      count++;
    }
  }

  for (let i of sortedLostRemove) {
    // 좌 처리
    if (sortedReserve.includes(i - 1)) {
      sortedReserve = remove(sortedReserve, i - 1);
      count++;
      continue;
    }
    //우 처리
    if (sortedReserve.includes(i + 1)) {
      sortedReserve = remove(sortedReserve, i + 1);
      count++;
    }
  }

  answer = count;
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [4, 2], [3, 5]));
console.log(solution(4, [2, 3], [3, 4]));
console.log(solution(4, [3, 2], [3, 4, 2]));

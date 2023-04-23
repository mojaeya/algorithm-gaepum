function solution(nums) {
  var answer = 0;
  N = nums.length / 2;

  // 폰켓몬의 중복을 제거하여 최대로 선택할 수 있는 폰켓몬 종류를 파악함
  const set = new Set(nums);
  answer = [...set];

  if (answer.length > N) {
    return N;
  } else {
    return answer.length;
  }
}

console.log(solution([3, 3, 3, 2, 2, 2]));

# https://school.programmers.co.kr/learn/courses/30/lessons/132267

import sys

sys.setrecursionlimit(10**6)  # 재귀의 최대 깊이 제한을 늘림

def solution(a, b, n):
    answer = 0
    r = 0
    
    def func(a, b, n):
        if n < a:
            return
        n, r = divmod(n, a)
        nonlocal answer
        n = n * b
        answer += n
        n += r
        return func(a, b, n)

    func(a, b, n)
    
    return answer


print(solution(5, 3, 21)) # 27
# print(solution(2, 1, 20))  # 19
# print(solution(3, 1, 20))  # 9








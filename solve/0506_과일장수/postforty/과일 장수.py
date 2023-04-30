def solution(k, m, score):
    answer = 0
    score.sort(reverse=True)
    n = len(score)
    answer = sum([score[i] * m for i in range(m-1, n, m)])
    return answer

print(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))
# print(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
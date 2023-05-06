def solution(k, m, score):
    # score.sort(reverse=True)
    # answer = sum([score[i] * m for i in range(m-1, len(score), m)])
    answer = (lambda _, m, s: sum(sorted(s)[-m::-m]) * m)(k, m, score)
    return answer

print(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]))
# print(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]))
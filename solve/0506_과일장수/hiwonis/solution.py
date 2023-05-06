def solution(k, m, score):
    score.sort(reverse=True)
    answer = [n for i, n in enumerate(score) if i%m == m-1]

    return sum(answer)*m

    
q1 = solution(3, 4, [1, 2, 3, 1, 2, 3, 1])
q2 = solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])


if q1 == 8:
    pass
else:
    print(f'your answer for q1: {q1} \n right answer: 8')

if q2 == 33:
    pass
else:
    print(f'your answer for q2: {q2} \n right answer: 33')

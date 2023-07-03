# https://school.programmers.co.kr/learn/courses/30/lessons/17681
def solution(n, arr1, arr2):
    answer = []
    for i, _ in enumerate(arr1):
        answer.append(
            f"{bin(arr1[i] | arr2[i])[2:]:0>{n}}".replace("1", "#").replace("0", " ")
        )
    return answer


print(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))

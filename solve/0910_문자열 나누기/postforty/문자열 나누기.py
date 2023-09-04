# https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=python3
def solution(s):
    answer = 0
    x = s[0]
    count_x = 0
    count_not_x = 0

    for c in s:
        if count_x != 0 and count_x == count_not_x:
            answer += 1
            count_x = 0
            count_not_x = 0
            x = c

        count_x += 1 if x == c else 0
        count_not_x += 1 if x != c else 0

    answer += 1 if count_x != 0 or count_not_x != 0 else 0

    return answer


print(solution("abracadabra"))  # 6

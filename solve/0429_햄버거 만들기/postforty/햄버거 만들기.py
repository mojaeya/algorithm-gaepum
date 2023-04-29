def solution(ingredient):
    answer = 0

    i = 0
    # 시간 초과 예방을 위해 순회를 최소화해야 함
    while i < len(ingredient)-3:
        if ingredient[i:i+4] == [1, 2, 3, 1]:
            del ingredient[i:i+4]
            answer += 1
            i -= 3
        else:
            i += 1
    return answer
            
print(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])) # 2
print(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])) # 0
print(solution([1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1])) # 2
print(solution([1,1,2,3,1,2,3,1,2,3,1,2,3,1])) # 3
print(solution([1,1,2,3,1,1])) # 1
def solution(lottos, win_nums):
    answer = []

    count = 0
    zeroCount = 0

    for i in lottos:
        if i in win_nums:
            count += 1
        if i == 0:
            zeroCount += 1

    level = lambda x : 1 if x == 6 else 2 if x == 5 else 3 if x == 4 else 4 if x == 3 else 5 if x == 2 else 6
            
    answer = [level(count+zeroCount), level(count)]
    
    return answer

print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
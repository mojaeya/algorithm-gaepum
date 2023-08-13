def solution(k, score):
    answer = []

    lowest = []
    for i in score:
        lowest.append(i)
        lowest.sort()

        if len(lowest) > k:
            lowest.pop(0) 

        answer.append(lowest[0])

    return answer
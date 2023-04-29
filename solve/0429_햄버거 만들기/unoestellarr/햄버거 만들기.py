def solution(ings):
    answer = 0

    #stack
    stack = []
    for ingre in ings:
        if ingre == 1 and stack[-3:] == [1,2,3]:
            del stack[-3:]
            answer += 1


        else:
            stack.append(ingre)

    return answer
            
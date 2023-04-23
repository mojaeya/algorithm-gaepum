def solution(N, stages):
    answer = []

    count = len(stages)

    stage_dict = {}

    for i in range(1, N+1):
        stage_dict[i] = 0
    
    for i in stages:
        try:
           stage_dict[i] += 1
        except:
            pass

    for i in range(1, N+1):
        temp = stage_dict[i]
        try:
            stage_dict[i] = stage_dict[i] / count
        except:
            stage_dict[i] = 0
        finally:
            count -= temp

    dic_to_list = stage_dict.items()
    result = sorted(dic_to_list, key=lambda x: x[1], reverse=True)

    answer = [i[0] for i in result]

    return answer

print(solution(4, [1, 1, 1, 1, 1]))
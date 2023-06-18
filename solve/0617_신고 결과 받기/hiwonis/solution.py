def solution(id_list, report, k):
    answer = []
    temp = {}
    report = list(set(report))
    for a in report:
        users = a.split()
        if not users[1] in temp:
            temp[users[1]] = [users[0]]
        else:
            temp[users[1]].append(users[0])
    for id in id_list:
        number = 0
        for  i in temp:
            temp_set = temp[i]
            if len(temp_set) >= k:
                if id in temp_set:
                    number += 1
        answer.append(number)
    return answer


print(solution(["muzi", "frodo", "apeach", "neo"],
          ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"],
          2))

print(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))


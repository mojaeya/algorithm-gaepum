def solution(id_list, report, k):
    answer = []
    report_set = list(set(report))
    temp_list = []
    result_list = []
    report_dict = {}
    for i in report_set:
        temp_list.append(i.split(" ")[1])
    for i in id_list:
        report_dict[i.split(" ")[0]] = 0
        if temp_list.count(i) >= k:
            result_list.append(i)
    for i in report_set:
        if i.split(" ")[1] in result_list:
            report_dict[i.split(" ")[0]] += 1
    for i in id_list:
        answer.append(report_dict[i])

    return answer


# print(
#     solution(
#         ["muzi", "frodo", "apeach", "neo"],
#         ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
#         2,
#     )
# )
# print(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))
print(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        [
            "muzi frodo",
            "apeach frodo",
            "frodo neo",
            "muzi neo",
            "apeach muzi",
            "muzi neo",
        ],
        2,
    )
)

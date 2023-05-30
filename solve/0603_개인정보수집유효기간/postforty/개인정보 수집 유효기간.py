def solution(today, terms, privacies):
    answer = []

    terms_dict = {t.split(" ")[0]: int(t.split(" ")[1]) for t in terms}
    org_year, org_month, org_day = map(int, today.split("."))

    for i, v in enumerate(privacies):
        p_day, p_label = v.split(" ")
        copy_year, copy_month, copy_day = org_year, org_month, org_day
        p_year, p_month, p_day = map(int, p_day.split("."))
        rst_year = rst_month = rst_day = 0
        if copy_day >= p_day:
            rst_day = copy_day - p_day
        else:
            rst_day = 28 + copy_day - p_day
            copy_month -= 1
        if copy_month >= p_month:
            rst_month = copy_month - p_month
        else:
            rst_month = 12 + copy_month - p_month
            copy_year -= 1
        rst_year = copy_year - p_year
        total_days = (rst_year * 12 * 28) + (rst_month * 28) + rst_day
        print(terms_dict[p_label])
        if total_days // 28 >= terms_dict[p_label]:
            answer.append(i + 1)

    return answer

print(
    solution(
        "2022.05.19",
        ["A 6", "B 12", "C 3"],
        ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"],
    )
)  # [1, 3]
# print(
#     solution(
#         "2020.01.01",
#         ["Z 3", "D 5"],
#         [
#             "2019.01.01 D",
#             "2019.11.15 Z",
#             "2019.08.02 D",
#             "2019.07.01 D",
#             "2018.12.28 Z",
#         ],
#     )
# )  # [1, 4, 5]

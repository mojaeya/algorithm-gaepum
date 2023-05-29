def solution(today, terms, privacies):
    answer = []

    terms_dict = {t.split(" ")[0]: int(t.split(" ")[1]) for t in terms}
    t_y, t_m, t_d = map(int, today.split("."))

    for i, v in enumerate(privacies):
        p, t = v.split(" ")
        c_y, c_m, c_d = t_y, t_m, t_d
        p_y, p_m, p_d = map(int, p.split("."))
        r_y = r_m = r_d = 0
        if c_d >= p_d:
            r_d = c_d - p_d
        else:
            r_d = 28 + c_d - p_d
            c_m -= 1
        if c_m >= p_m:
            r_m = c_m - p_m
        else:
            r_m = 12 + c_m - p_m
            c_y -= 1
        r_y = c_y - p_y
        dd = (r_y * 12 * 28) + (r_m * 28) + r_d
        if dd // 28 >= terms_dict[t]:
            answer.append(i + 1)

    return answer


print(
    solution(
        "2022.05.19",
        ["A 6", "B 12", "C 3"],
        ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"],
    )
)  # [1, 3]
print(
    solution(
        "2020.01.01",
        ["Z 3", "D 5"],
        [
            "2019.01.01 D",
            "2019.11.15 Z",
            "2019.08.02 D",
            "2019.07.01 D",
            "2018.12.28 Z",
        ],
    )
)  # [1, 4, 5]

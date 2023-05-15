def solution(keymap, targets):
    def func(k, t):
        result = []
        for i in t:
            result.append(k.find(i) + 1 if k.find(i) >= 0 else -1)
        return result

    t_lst = []
    for t in targets:
        k_lst = []
        for k in keymap:
            k_lst.append(func(k, t))
        rst = 0
        for x in zip(*k_lst):
            # keymap으로 targets을 구현할 수 없는 경우
            if -1 in x and len(set(x)) == 1:
                rst = -1
                break
            # keymap으로 targets을 구현할 수 있는 경우 -1을 제외 후 최소 클릭 값 누적
            else:
                rst += min(filter(lambda n: n != -1, x))
        t_lst.append(rst)

    return t_lst


print(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]))  # [9, 4]
print(solution(["AA"], ["B"]))  # [-1]
print(solution(["BC"], ["AC", "BC"]))  # [-1,3]

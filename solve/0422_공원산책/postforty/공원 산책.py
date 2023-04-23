def solution(park, routes):
    start = []
    x = []
    w_s = len(park[0])
    h_s = len(park)
    
    for h, s in enumerate(park):
        for w, v in enumerate(s):
            if v == "S":
                start = [h, w]
            if v == "X":
                x.append([h, w])
    
    def func(lst):
        temp = start[:]
        lst[1] = int(lst[1])
        for _ in range(lst[1]):
            if lst[0] == 'W':
                temp[1] -= 1
            if lst[0] == 'E':
                temp[1] += 1
            if lst[0] == 'N':
                temp[0] -= 1
            if lst[0] == 'S':
                temp[0] += 1
            if temp[0] < 0 or temp[0] >= h_s:
                return
            if temp[1] < 0 or temp[1] >= w_s:
                return
            if temp in x:
                return
        return temp

    for i in routes:
        r = i.split()
        coord = func(r)
        if coord:
            start = coord

    return start

# W - 좌, E - 우, N - 상, S - 하 
print(solution(["SOO","OOO","OOO"], ["E 2","S 2","W 1"])) # [2,1]
print(solution(["SOO","OXX","OOO"], ["E 2","S 2","W 1"])) # [0,1]
print(solution(["OSO","OOO","OXO","OOO"], ["E 2","S 3","W 1"])) # [0,0]

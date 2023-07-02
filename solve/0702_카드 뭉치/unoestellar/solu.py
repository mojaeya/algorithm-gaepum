def solution(cards1, cards2, goal):
    i, j, k = 0, 0, 0
    
    # 오직 다음 인덱스에서만 체킹    
    while i < len(goal):
        if j < len(cards1) and cards1[j] == goal[i]:
            j += 1
        elif k < len(cards2) and cards2[k] == goal[i]:
            k += 1
        # 걸리면 NO
        else:
            return "No"
        i += 1
    return "Yes"

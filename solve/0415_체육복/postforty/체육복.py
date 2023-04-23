def solution(n, lost, reserve):
    answer = 0

    count = n - len(lost)
    sorted_lost = sorted(lost)

    # 순회 중인 리스트의 요소를 제거하면 안되기 때문에 새로운 리스트 생성
    sorted_lost_remove = sorted(lost)
    sorted_reserve = sorted(reserve)

    # 여벌을 가지고 있는데 분실한 경우
    for i in sorted_lost:
        if i in sorted_reserve:
            sorted_lost_remove.remove(i)
            sorted_reserve.remove(i)
            count += 1
    for i in sorted_lost_remove:
        # 좌 처리
        if i-1 in sorted_reserve:
            sorted_reserve.remove(i-1)
            count += 1
            continue
        # 우 처리
        if i+1 in sorted_reserve:
            sorted_reserve.remove(i+1)
            count += 1

    answer = count

    return answer

# print(solution(5, [2,4], [1,3,5])) # 5
# print(solution(5, [2,4], [3])) # 4
# print(solution(3, [3], [1])) # 2
# print(solution(5, [4,2], [3,5])) # 5
print(solution(4, [2,3], [3,4])) # 3
# print(solution(4, [3, 2], [3, 4, 2])) #4

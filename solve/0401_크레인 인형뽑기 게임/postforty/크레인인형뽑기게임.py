def solution(board, moves):
    answer = 0

    temp_list = []

    for i in moves:
        idx = i - 1
        for j in board:
            if j[idx] != 0:
                if not temp_list:
                    temp_list.append(j[idx])
                    j[idx] = 0
                    break
                else:
                    if temp_list[-1] == j[idx]:
                        temp_list.pop()
                        answer += 2
                    else:
                        temp_list.append(j[idx])
                j[idx] = 0
                break
                # try:
                #     temp_list[-1]
                # except:
                #     temp_list.append(j[idx])
                #     j[idx] = 0
                #     break
                # else:
                #     if temp_list[-1] == j[idx]:
                #         temp_list.pop()
                #         answer += 2
                #     else:
                #         temp_list.append(j[idx])
                #     j[idx] = 0
                #     break
                    
    return answer

print(solution([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]))
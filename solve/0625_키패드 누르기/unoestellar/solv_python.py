def solution(numbers, hand):
    answer = ''
    
    # 판 짜두기 0 1~ * # 사이 위치 지정. 
    keypad = [[3,1], [0,0], [0,1],[0,2], [1,0], [1,1],[1,2], [2,0], [2,1],[2,2],  [3,0],[3,2]]
    
    # Initialize left and right hand positions
    left = [3, 0]
    right = [3, 2]

    for i in numbers:
        #1 기존위치 담는변수 
        prev_left, prev_right = left, right
        #2 길이 수치화
        target = keypad[i]
        left_dist = abs(target[0] - prev_left[0]) + abs(target[1] - prev_left[1])
        right_dist = abs(target[0] - prev_right[0]) + abs(target[1] - prev_right[1])
        
        #3 비교 및  새 위치로 할당 , 어떤손가락 움직였나 가져오기   
        if i in [1, 4, 7] or (i in [2, 5, 8, 0] and left_dist < right_dist):
            finger = 'L'
            left = target
        elif i in [3, 6, 9] or (i in [2, 5, 8, 0] and right_dist < left_dist):
            finger = 'R'
            right = target
        elif i in [2, 5, 8, 0] and right_dist == left_dist:
            if hand == "right":
                finger = 'R'
                right = target
            else:
                finger = 'L'
                left = target
        #4  문자열 이어주기
        answer += finger
    
    return answer
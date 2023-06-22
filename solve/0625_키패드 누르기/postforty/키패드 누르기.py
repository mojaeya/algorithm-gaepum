# https://school.programmers.co.kr/learn/courses/30/lessons/67256
def solution(numbers, hand):
    answer = ''
    l = ['1', '4', '7', '*']
    m = ['2', '5', '8', '0']
    r = ['3', '6', '9', '#']
    
    cur_l = '*'
    cur_r = '#'

    # 거리 계산 함수 정의
    def calc_distance(num, cur, m, lr):
        num_idx = m.index(num)
        if cur in lr:
            cur_idx = lr.index(cur)
            return len(m[num_idx: cur_idx]) + 1 if num_idx < cur_idx else len(m[cur_idx: num_idx]) + 1
        else:
            cur_idx = m.index(cur)
            return len(m[num_idx: cur_idx]) if num_idx < cur_idx else len(m[cur_idx: num_idx])
            
    for n in numbers:
        s_n = str(n)
        if s_n in l:
            answer += 'L'
            cur_l = s_n
        elif s_n in r:
            answer += 'R'
            cur_r = s_n
        else:
            loc_l = calc_distance(s_n, cur_l, m, l)
            loc_r = calc_distance(s_n, cur_r, m, r)
            if loc_l == loc_r:
                if hand == 'left':
                    answer += 'L'
                    cur_l = s_n
                else:
                    answer += 'R'
                    cur_r = s_n
            elif loc_l < loc_r:
                answer += 'L'
                cur_l = s_n
            else:
                answer += 'R'
                cur_r = s_n

    return answer

print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))
# "13458214595"
# "LRLLLRLLRRL"

print(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"))
# 70828315762
# LRLLRRLLLRR

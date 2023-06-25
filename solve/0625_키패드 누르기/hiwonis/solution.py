def distance(a, b):
    return sum([abs(i-j) for i, j in zip(a, b)])

def solution(numbers, hand):
    answer = ''
    l = (1, 4)
    r = (3, 4)
    coordinates = {1: (1, 1), 2: (2, 1), 3: (3, 1), 4: (1, 2), 5: (2,2), 6: (3, 2), 7: (1, 3), 8: (2, 3), 9: (3, 3), 0: (2, 4)}
    for n in numbers:
        if n in [1, 4, 7]:
            answer += 'L'
            l = coordinates[n]
        elif n in [3, 6, 9]:
            answer += 'R'
            r = coordinates[n]
        else:
            if distance(coordinates[n], l) > distance(coordinates[n], r):
                answer += 'R'
                r = coordinates[n]
            elif distance(coordinates[n], l) < distance(coordinates[n], r):
                answer += "L"
                l = coordinates[n]
            else:
                if hand == 'left':
                    answer += 'L'
                    l = coordinates[n]
                else:
                    answer += 'R'
                    r = coordinates[n]
                

        
    return answer


print(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'))

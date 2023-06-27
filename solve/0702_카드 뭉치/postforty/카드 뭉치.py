# https://school.programmers.co.kr/learn/courses/30/lessons/159994
def solution(cards1, cards2, goal):
    temp = []

    for g in goal:
        if len(cards1) != 0 and g == cards1[0]:
            temp.append(cards1.pop(0))
        elif len(cards2) != 0 and g == cards2[0]:
            temp.append(cards2.pop(0))
        else:
            return 'No'
    if goal == temp:
        return 'Yes'
        
# print(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"])) # "Yes"
print(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"])) # "Yes"
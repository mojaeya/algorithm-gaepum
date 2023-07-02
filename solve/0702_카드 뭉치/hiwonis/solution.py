def solution(cards1, cards2, goal):
    cards1.append(0)
    cards2.append(0)
    for word in goal:
        if word == cards1[0]:
            cards1.pop(0)
        elif word == cards2[0]:
            cards2.pop(0)
        else:
            return 'No'

    return 'Yes'
print(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
print(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]))
def solution(survey, choices):
    answer = ''
    score = [[0, 0], [0, 3], [0, 2], [0, 1], [0, 0], [1, 1], [1, 2], [1, 3]]
    result = {'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0}

    for i, v in enumerate(survey):
        result[v[score[choices[i]][0]]] += score[choices[i]][1]
    
    answer = answer + 'R' if result['R'] >= result['T'] else answer + 'T'
    answer = answer + 'C' if result['C'] >= result['F'] else answer + 'F'
    answer = answer + 'J' if result['J'] >= result['M'] else answer + 'M'
    answer = answer + 'A' if result['A'] >= result['N'] else answer + 'N'

    return answer

print(solution(["AN", "CF", "MJ", "RT", "NA"],	[5, 3, 2, 7, 5])) # "TCMA"
print(solution(["TR", "RT", "TR"], [7, 1, 3])) # "RCJA"

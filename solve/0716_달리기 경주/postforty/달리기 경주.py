# https://school.programmers.co.kr/learn/courses/30/lessons/178871
# 1차시도에서 리스트 슬라이싱 방식으로 풀이 → 시간초과 발생
# 2차시도에서 딕셔너리와 스와핑 이용하여 풀이 → 통과
def solution(players, callings):
    called = {v: i for i, v in enumerate(players)}
    # for i, v in enumerate(players):
    #     called[v] = i
    for key in callings:
        a, b = called[key] - 1, called[key]
        players[a], players[b] = players[b], players[a]
        called[players[a]], called[players[b]] = a, b

    return players


print(
    solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"])
)  # ["mumu", "kai", "mine", "soe", "poe"]

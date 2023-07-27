# 1차 시도 - 시간 초과
# count() 메소드의 시간 복잡도 O(N^2)
# def solution(participant, completion):
#     p_obj = {x:participant.count(x) for x in participant}
#     c_obj = {x:completion.count(x) for x in completion}

#     for key in p_obj:
#         try:
#             if p_obj[key] != c_obj[key]:
#                 raise Exception
#             else:
#                 continue
#         except:
#             return key

# 2차 시도 - 성공
# def solution(participant, completion):
#     p_obj = {}
#     c_obj = {}

#     for x in participant:
#         if x not in p_obj:
#             p_obj[x] = 1
#         else:
#             p_obj[x] += 1

#     for x in completion:
#         if x not in c_obj:
#             c_obj[x] = 1
#         else:
#             c_obj[x] += 1

#     for key in p_obj:
#         try:
#             if p_obj[key] != c_obj[key]:
#                 raise Exception
#             else:
#                 continue
#         except:
#             return key

# 리팩토링
def solution(participant, completion):
    p_obj = {}
    c_obj = {}

    for x in participant:
        p_obj[x] = 1 if x not in p_obj else p_obj[x] + 1

    for x in completion:
        c_obj[x] = 1 if x not in c_obj else c_obj[x] + 1

    for key in p_obj:
        if key not in c_obj or p_obj[key] != c_obj[key]:
            return key


# print(solution(["leo", "kiki", "eden"], ["eden", "kiki"])) # "leo"
print(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])) # "mislav"

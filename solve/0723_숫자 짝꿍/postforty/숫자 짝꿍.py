# https://school.programmers.co.kr/learn/courses/30/lessons/131128
# 1차 시도 - 문자열 슬라이싱 방식을 이용함 → 시간 초과 발생
# def solution(X, Y):
#     result_str = ""
#     for i in X:
#         target = Y.find(i)
#         if target > -1:
#             result_str += Y[target]
#             Y = Y[:target] + Y[target + 1 :]

#     if len(result_str) == 0:
#         return "-1"

#     answer = str(int("".join(sorted(result_str, reverse=True))))

#     return answer


# 2차 시도 - 리스트 변환 → 시간 초과 발생
# def solution(X, Y):
#     result_list = []

#     if len(X) > len(Y):
#         small_list = list(Y)
#         big_str = X
#     else:
#         small_list = list(X)
#         big_str = Y

#     for i in big_str:
#         if i in small_list:
#             result_list.append(i)
#             small_list.remove(i)

#     if len(result_list) == 0:
#         return "-1"

#     if result_list[0] == "0":
#         return "0"

#     return "".join(sorted(result_list, reverse=True))


# 3차 시도 - 딕셔너리 이용 → 성공
# def solution(X, Y):
#     X_dict = {}
#     for i, v in enumerate(X):
#         try:
#             X_dict[v] += 1
#         except:
#             X_dict[v] = 1
#     Y_dict = {}
#     for i, v in enumerate(Y):
#         try:
#             Y_dict[v] += 1
#         except:
#             Y_dict[v] = 1

#     answer = ""
#     for key in X_dict:
#         try:
#             Y_dict[key]
#         except:
#             continue
#         else:
#             if X_dict[key] > Y_dict[key]:
#                 answer += key * Y_dict[key]
#             else:
#                 answer += key * X_dict[key]

#     if len(answer) == 0:
#         return "-1"

#     answer = "".join(sorted(list(answer), reverse=True))

#     if answer[0] == "0":
#         return "0"

#     return answer


# 리팩토링 - 딕셔너리와 셋을 이용
def solution(X, Y):
    X_dict = {key: X.count(key) for key in set(X)}  # X의 각 요소의 개수를 카운트한 딕셔너리 생성
    Y_dict = {key: Y.count(key) for key in set(Y)}  # Y의 각 요소의 개수를 카운트한 딕셔너리 생성

    print(X.count('5'))

    answer = ""
    for key in set(X) & set(Y):  # X와 Y에 공통으로 있는 요소만 처리
        count = min(X_dict[key], Y_dict[key])  # X와 Y에서 해당 요소의 최소 개수를 구함
        # print(count)
        answer += key * count  # 요소를 해당 개수만큼 반복하여 추가

    if not answer:
        return "-1"

    answer = "".join(sorted(answer, reverse=True))  # 결과 문자열을 정렬하여 역순으로 변환

    if answer[0] == "0":
        return "0"

    return answer


print(solution("5525", "1255"))  # "552"
# print(solution("100", "2345"))  # "-1"
# print(solution("100", "203045"))  # 	"0"

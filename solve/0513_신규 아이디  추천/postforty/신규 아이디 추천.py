import re


def solution(new_id):
    try:
        answer = new_id.lower()
        answer = re.sub(r"[^a-z0-9\-_.]", "", answer)
        answer = re.sub(r"\.+", ".", answer)
        answer = answer if answer[0] != "." else answer[1:]
        answer = answer[:15]
        answer = answer if answer[-1] != "." else answer[:-1]
    except:
        answer = "a"
    finally:
        if len(answer) <= 2:
            while len(answer) < 3:
                answer += answer[-1]
    return answer


print(solution("...!@BaT#*..y.abcdefghijklm."))
print(solution("z-+.^."))
print(solution("=.="))
print(solution("123_.def"))
print(solution("abcdefghijklmn.p"))
# print(solution("aa"))

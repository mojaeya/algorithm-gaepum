def solution(s):
    ans = 0 
    idx = 0 

    while idx < len(s):
        char_count = 0
        other_count = 0
        char = s[idx]

        while idx < len(s) and (char_count != other_count or char_count == 0):
            if s[idx] == char:
                char_count += 1
            else:
                other_count += 1
            #카운팅 계속, while벗어날때마다 +1     
            idx += 1

        ans += 1

    return ans

def solution(n, arr1, arr2):
    
    # n 기준으로 arr1 , arr2 순회 . 
    # 결과물은 n 개짜리의  ,  '#' 또는 ' ' 으로 구성된 길이5의 문자열로 구성된 배열이어야 함. 
    tmp = []    
    #  arr1 해독하기     
    for i,v in enumerate(arr1):
        str1 = ''
        for j in range(n):
            
            print(n - j - 1)
            if int(v / 2 ** (n - j - 1) ) > 0:
                str1 = str1 + '#'
                v = v - 2 ** (n - j - 1)
            else:
                str1 = str1 + ' '
        tmp.append(str1)
    # arr2 돌면서 최종 answer 구성하기 
    for i,v in enumerate(arr2):
        ansStr = ''
        str2 = ''
        for j in range(n):
            if int(v / 2 ** (n - j - 1) ) > 0:
                str2 = str2 + '#'
                v = v - 2 ** (n - j - 1)
            else:
                str2 = str2 + ' '
        
        # 지도 2개 결합 로직 
        for index in range ( len ( tmp[i] ) ):
            if str2[index] == '#' or  tmp[i][index] == '#' :
                ansStr = ansStr  + '#'
            else:
                ansStr = ansStr + ' '
        # 결합 후 index 에 할당 
        tmp[i] = ansStr
    return tmp

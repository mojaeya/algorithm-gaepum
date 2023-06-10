# feat. OpenAI
def solution(survey, choices):
    #loop survey and make mid-results for getResultChar func. 
    personalities = {'T':0, 'R':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0}
    
    for i in range(len(survey)):
        if choices[i] > 4:
            personalities[survey[i][1]] += choices[i]-4
        elif choices[i] < 4:
            personalities[survey[i][0]] += 4 - choices[i]
    #print(personalities)
    return ''.join([max((personalities[p1], p1), (personalities[p2], p2), key=lambda x: (x[0], -ord(x[1])))[1] for p1, p2 in [("T", "R"), ("C", "F"), ("M", "J"), ("A", "N")]])


'''
 
max 함수의  key 를 먹여줌으로서 ,  점수가 동일 한 경우에 ,  
 -  Unicode 상으로 더 큰    -ord(x[1])  ( 'C' , 'F' )  놈을 return 해서 join 해주도록 처리 . 

'''


'''

문제분석   

1.  성격 유형을 구분하는 4개 지표가 있다.  MBTI 짭 느낌. 
즉 전체 성격 유형은   2^4  = 16 개 

2. 검사지 각각의  N 개 질문마다  *  7 개의 선택지가 있다. 

3. 질문 각각은   -  점수 조건이 있다.  
예를 들어서 7개 항목중 무엇을 택하는 경우에,  00 지표의 점수가  
 A , 또는 B 방향으로 점수 counting  + 2 점 
( 다행히 , 점수 매기는  포인트는-  대칭적이다.  3 2 1 0 1 2 3 )


4. 판단하는 지표 담은 1차원 문자열 배열 survey 가 있다. 
5. survey의 배열 원소는 "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA" 중 하나입니다.

'''
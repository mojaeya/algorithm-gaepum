def solution(players, callings):
    #인덱싱 결과를 dict 화 시켜버리기
    positions = {player: i for i, player in enumerate(players)}
    #원본상태 복사 
    answer = players
    for c in callings:
        # 인덱스 훨씬 빠르게 꺼내온다.
        index = positions[c] 
        if index > 0:

            # 키 변경 진행  - 동시적 할당
            answer[index], answer[index-1] = answer[index-1], answer[index]
            # 딕셔너리 교체 진행 answer 만들어가기 
            positions[players[index]] = index
            positions[players[index-1]] = index - 1            


    return answer

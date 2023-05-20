def solution(keymap, targets):
    #keymap = ["BC"]
    #targets = ["AC","BC"]
    n = len(targets)
    answer = [0 for i in range(n)]
    
    res_map = dict()
    #hashmap = dict()
    #print(keymap)
    #print(targets)
    # 1. 최소한으로 특정 알파벳에 도달 가능한 N 의 수를 담는 res_map 만들어내기. 
    for key in keymap:
        #keymap 순회하면서, @문자를 입력하기위한 최소치를 넣는다. hashmap의 val 에 담는다.
        for i, val in enumerate(key):
            #print(i, val)
            
            if val not in res_map:
                res_map[val] = i+1
            else:
                if(res_map[val] > i+1):                    
                    res_map[val] = i+1
    #  targets 를 뽑아내기위해 res 를 찾아낸다. 
    
    for i ,target in enumerate(targets):
        m_flag = False
        #print('target is = ',target)
        eachnum = 0
        for val in target:
            if val in res_map.keys():
                #print('있다.',val)                
                #print(val,  res_map[val])
                eachnum = eachnum+ res_map[val]
                
            else:
                
                m_flag = True
            #print('eachnum  ',eachnum)
        answer[i] = eachnum
        # 단 한글자라도 도달 불가한 겨우가 있다면 m_flag 가 True 가되어서
        #, 무조건 -1 이 오게 됨. 
        if m_flag:
            answer[i] = -1
            
            
    #print(res_map)
    #print(answer)
    return answer

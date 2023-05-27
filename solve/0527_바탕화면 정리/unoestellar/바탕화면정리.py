def solution(wallpaper):
    
    # 첫 요소의 길이가 곧 세로 길이. 
    # 각 요소에서 최소 # 위치 / 각 요소에서 최대의 # 위치 파악 
    
    #  drag start  : ds /  drag end  : de 
    # ds_x , ds_y   /  de_x , de_y 를 도출하고 
    #  각 값을 배열하나에 담아서 완성시킬것
    ds_x, ds_y = [50]*2
    de_x, de_y = [0]*2
    ds_x_found, ds_y_found, de_x_found,de_y_found = [False] * 4 
    
    #start
    # print('start')
    # print(ds_x)
    # print(ds_y)
    # print(de_x)
    # print(de_y)
    
    
    for i, key in enumerate(wallpaper): 
        #print(i)
        print(key)
        #print(str(len(key))
        # ds_y : #이 발견되는 최초의 i   / str.find(sub[, start[, end]]) 
        print(f'find {key.find("#")}')
        print(f'rfind  {key.rfind("#")}')
        # 가장 마지막 인덱스 찾기 str.rfind(sub[, start[, end]])
        if key.find('#') != -1 and not ds_x_found:
            ds_x = i
            ds_x_found = True
            
        #ds_y  get     
        if not ds_y_found and key.find('#') != -1:
            ds_y =  min(ds_y,  key.find('#'))
        #de_y get    
        if not de_y_found and key.rfind('#') != -1:
            de_y =  max(de_y,  key.rfind('#')+1)
        #de_x  get 
        if key.find('#') != -1:
            de_x = i+1
        
    
    # print('Res')
    # print(ds_x)
    # print(ds_y)
    # print(de_x)
    # print(de_y)
    answer = [ds_x, ds_y ,de_x,de_y]
    print(answer)
    return answer

def solution(nums):
    N = int(len(nums) / 2)
    answer = len(set(nums))
    
    if answer > N:
        return N
    else:
        return answer

print(solution([3,3,3,2,2,4]))
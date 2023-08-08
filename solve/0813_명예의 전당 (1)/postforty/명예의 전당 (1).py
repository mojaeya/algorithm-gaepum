# https://school.programmers.co.kr/learn/courses/30/lessons/138477
def solution(k, score):
    answer = [score[0]]
    score_board = [score[0]]
    for i in score[1:]:
        score_board.append(i)
        score_board.sort()
        if len(score_board) > k:
            score_board = score_board[1:]
        answer.append(score_board[0])

    return answer


print(solution(3, [10, 100, 20, 150, 1, 100, 200]))  # [10, 10, 10, 20, 20, 100, 100]

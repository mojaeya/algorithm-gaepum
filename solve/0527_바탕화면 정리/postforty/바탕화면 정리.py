def solution(wallpaper):
    lux, luy = (len(wallpaper) - 1, len(wallpaper[0]) - 1)
    rdx = rdy = 0

    for x, v in enumerate(wallpaper):
        for y, w in enumerate(v):
            if w == '#':
                if x < lux:
                    lux = x
                if y < luy:
                    luy = y
                if x > rdx:
                    rdx = x
                if y > rdy:
                    rdy = y

    return [lux, luy, rdx + 1, rdy + 1]

# print(solution([".#...", "..#..", "...#."])) # [0, 1, 3, 4]
# print(solution(["..", "#."])) # [1, 0, 2, 1]
print(solution(["...#"])) # [0, 3, 1, 4]
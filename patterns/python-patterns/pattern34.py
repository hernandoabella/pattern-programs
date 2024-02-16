# Pattern 34: ...

#  1
#  3*  2
#  4*  5*  6
# 10*  9*  8*  7
# 11* 12* 13* 14* 15

n = 5

px = 1
py = 1

for i in range(1, n + 1):
    t = py
    for j in range(1, i + 1):
        if i % 2 == 1:
            print(f"{px:2}", end="")
        else:
            print(f"{t:2}", end="")
            t -= 1
        px += 1
        if j != i:
            print("* ", end="")
    py = py + i + 1
    print()

# Pattern 83: ...

#     *
#    - -
#   -   -
#  -     -
# -       -
# -       -
#  -     -
#   -   -
#    - -
#     *

n = 10
px = n // 2
py = n // 2

for i in range(1, n + 1):
    for j in range(1, n):
        if (i == 1 or i == n) and j == n // 2:
            print("*", end="")
        elif j == px or j == py:
            print("-", end="")
        else:
            print(" ", end="")
    if i == n // 2:
        t = px
        px = py
        py = t
    else:
        px -= 1
        py += 1
    print()

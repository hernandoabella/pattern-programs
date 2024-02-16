# Pattern 78: ...

# *       *
#  *     *
#   *   *
#    * *
#     *

n = 5
px = 1
py = n * 2 - 1

for i in range(1, n + 1):
    for j in range(1, n * 2 + 1):
        if j == px or j == py:
            print("*", end="")
        else:
            print(" ", end="")
    px += 1
    py -= 1
    print()


# Pattern 81: ...

#     *
#    * *
#   *   *
#  *     *
# *       *
#  *     *
#   *   *
#    * *
#     *

n = 9
px = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == px or j == n - px + 1:
            print("*", end="")
        else:
            print(" ", end="")
    if i <= n // 2:
        px -= 1
    else:
        px += 1
    print()

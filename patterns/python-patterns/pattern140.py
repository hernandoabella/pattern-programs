# Pattern 140: ...

#     *
#    * *
#   *****
#  *     *
# *       *

n = 5
x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n + 1):
        if j == x or j == n + i - 1:
            print("*", end="")
        elif j >= x and j <= n + i - 1 and i == n // 2 + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x -= 1

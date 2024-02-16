# Pattern 102: ...

# *********
#  *     *
#   *   *
#    * *
#     *

n = 5
x = 1
y = 2 * n - 1

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == x or j == y or i == 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x += 1
    y -= 1

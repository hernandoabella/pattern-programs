# Pattern 131: ...

#   * *
# *   *
#     *
#     *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == mid or i == n or (i + j == mid and j <= mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

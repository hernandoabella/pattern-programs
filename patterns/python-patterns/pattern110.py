# Pattern 110: ...

#         *
#       * * *
#     *   *   *
#   *     *     *
# * * * * * * * * *
#   *     *     *
#     *   *   *
#       * * *
#         *

n = 9
c1 = (n - 1) // 2
c2 = 3 * n // 2 - 1

for i in range(n):
    for j in range(n):
        if i + j == c1 or i - j == c1 or j - i == c1 or i + j == c2 or i == c1 or j == c1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

# Pattern 92: ...

# * * * *
#   * * *
#     * *
#       *
#     * *
#   * * *
# * * * *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n // 2 + 2):
        if j >= x:
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()

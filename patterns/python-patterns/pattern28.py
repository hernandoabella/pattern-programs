# Pattern 28: ...

# 1 2 3 4 *
# 1 2 3 * 5
# 1 2 * 4 5
# 1 * 3 4 5
# * 2 3 4 5

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == n - i + 1:
            print("* ", end="")
        else:
            print(j, end=" ")
    print()

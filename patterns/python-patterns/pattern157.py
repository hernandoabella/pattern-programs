# Pattern 157: ...

# * * *
# *   *
# * * *
# * *
# *   *

n = 5

for i in range(1, n + 1):
    x = 1
    for j in range(1, (n // 2) + 2):
        if j == 1 or i == 1 or i == (n // 2) + 1 or (i <= n // 2 and j == (n // 2) + 1) or j == x:
            print("* ", end="")
        else:
            print("  ", end="")
        x += 1 if i > n // 2 else 0
    print()

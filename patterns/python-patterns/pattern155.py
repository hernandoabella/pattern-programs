# Pattern 155: ...

# * * *
# *   *
# * * *
# *
# *

n = 5
x = (n // 2) + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == 1 and j <= x) or j == 1 or (j == x and i <= x) or (i == x and j <= x):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

# Pattern 134: ...

# *       *
# *       *
# * * * * *
#         *
#         *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == mid or (j == 1 and i <= mid) or j == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

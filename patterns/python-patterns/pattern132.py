# Pattern 132: ...

# * * * * *
#         *
# * * * * *
# *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or (j == 1 and i >= mid) or (j == n and i < mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

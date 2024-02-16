# Pattern 151: ...

# *
# *
# *
# *
# * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or (i == n and j <= (n # 2) + 1):
            print("* ", end="")
    print()

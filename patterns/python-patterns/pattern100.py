# Pattern 100: ...

# *
# **
# * *
# *  *
# * *
# **
# *

n = 7

x = 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if j == 1 or j == x:
            print("*", end="")
        else:
            print(" ", end="")
    print()

    if i <= n // 2:
        x += 1
    else:
        x -= 1

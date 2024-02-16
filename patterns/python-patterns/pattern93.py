# Pattern 93: ...

# *       *
# **     **
# ***   ***
# **** ****
# *********

n = 5

for i in range(1, n + 1):
    for j in range(1, n * 2):
        if j <= i or j >= n * 2 - i:
            print("*", end="")
        else:
            print(" ", end="")
    print()

# Pattern 119: ...

# *
# *
# **
# **
# ***
# ***

n = 3

for i in range(1, n + 1):
    for c in range(n - 1, 0, -1):
        for j in range(i):
            print("*", end="")
        print()

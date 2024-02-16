# Pattern 121: ...

# ***
# ***
# **
# **
# *
# *

for i in range(3, 0, -1):
    for x in range(2, 0, -1):
        for j in range(i):
            print("*", end="")
        print()

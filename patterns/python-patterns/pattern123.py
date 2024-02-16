# Pattern 123: ...

#   *
#   *
#  ***
#  ***
# *****
# *****

n = 3
z = 1
for i in range(n):
    for j in range(2, 0, -1):
        for x in range(n - 1, i - 1, -1):
            print(" ", end="")
        for y in range(z):
            print("*", end="")
        print()
    z += 2

# Pattern 69: ...

#   *
#   *
# *****
#   *
#   *

for i in range(1, 6):
    for j in range(1, 6):
        if j == 3 or i == 3:
            print("*", end="")
        else:
            print(" ", end="")
    print()
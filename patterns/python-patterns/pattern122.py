# Pattern 122: ...

# ***
# ***
#  **
#  **
#   *
#   *

for i in range(3, 0, -1):
    for x in range(2, 0, -1):
        for y in range(2, i - 1, -1):
            print(" ", end="")
        for j in range(i):
            print("*", end="")
        print()

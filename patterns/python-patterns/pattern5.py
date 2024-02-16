# Pattern 5: 

# *****
#  ****
#   ***
#    **
#     *

n = 5

for i in range(n, 0, -1):
    for j in range(n - 1, i - 1, -1):
        print(" ", end="")
    for k in range(1, i + 1):
        print("*", end="")
    print()

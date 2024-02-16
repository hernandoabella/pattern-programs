# Pattern 114: ...

#     *****
#    *****
#   *****
#  *****
# *****

z = 1
n = 5

for i in range(n):
    for j in range(n - 1, i, -1):
        print(" ", end="")
    for k in range(n):
        print("*", end="")
    z += 1
    print()

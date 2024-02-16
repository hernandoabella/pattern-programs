# Pattern 80: ...

#    *
#   *
#  *
# *
#  *
#   *
#    *

n = 7
x = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if j == x:
            print("* ", end="")
        else:
            print(" ", end="")
    print()

    if i <= n // 2:
        x -= 1
    else:
        x += 1


# Pattern 108: ...

#   *   *   *
# *   *   *   *
#   *   *   *
# *   *   *   *
#   *   *   *
# *   *   *   *
#   *   *   *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i + j) % 2 == 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

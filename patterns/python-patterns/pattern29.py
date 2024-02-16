# Pattern 29: ...

#  * 1 * 2 *
#  3 * 4 * 5
#  * 6 * 7 *
#  8 * 9 *10
#  *11 *12 *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i + j) % 2 == 1:
            print(f"{x:2}", end="")
            x += 1
        else:
            print(" *", end="")
    print()

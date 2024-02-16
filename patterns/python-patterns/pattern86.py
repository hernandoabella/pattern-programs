# Pattern 86: ...

# *
# * *
# 123
# * *
# *

#include <stdio.h>

n = 5
x = 1

for i in range(1, n+1):
    for j in range(1, x+1):
        if i != n//2 + 1:
            print("* ", end="")
        else:
            print(j, end=" ")
    if i <= n//2:
        x += 1
    else:
        x -= 1
    print()

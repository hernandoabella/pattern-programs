# Pattern 87: ...

# *
# * *
# ABC
# * *
# *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if i != n // 2 + 1:
            print("*", end=" ")
        else:
            print(chr(64 + j), end=" ")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()

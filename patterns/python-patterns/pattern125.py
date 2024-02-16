# Pattern 125: ...

# *****
#   ***
#     *
#   ***
# *****

n = 3
s1 = n * 2 - 1
s2 = 3

for i in range(1, n + 1):
    print("  " * (i - 1), end="")
    print("*" * s1)
    s1 -= 2

for i in range(1, n):
    print("  " * (n - i - 1), end="")
    print("*" * s2)
    s2 += 2

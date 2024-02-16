# Pattern 118: ...

# ******
# ******
#   ****
#   ****
#     **
#     **

n = 6

for i in range(n, 0, -1):
    k = i + 1 if i % 2 != 0 else i
    print(" " * (n - k) + "*" * k)

# Pattern 116: ...

#     **
#     **
#   ****
#   ****
# ******
# ******

for i in range(1, 7):
    k = i + 1 if i % 2 != 0 else i
    print(" " * (6 - k), "*" * k)

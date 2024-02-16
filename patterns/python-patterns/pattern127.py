// Pattern 127: ...

#  ***   ***
# ***** *****
# ***********
#  *********
#   *******
#    *****
#     ***
#      *

n = 6

# Top part of the heart
for i in range(n // 2, n + 1, 2):
    print(" " * (n - i), end="")
    print("*" * i, end="")
    print(" " * (n - i), end="")
    print("*" * i)

# Bottom part of the heart
for i in range(n, 0, -1):
    print(" " * (n - i), end="")
    print("*" * (2 * i - 1))

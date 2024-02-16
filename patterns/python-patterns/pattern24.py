# Pattern 24: ...

# ****A
# ***BB
# **CCC
# *DDDD
# EEEEE

n = 4

for i in range(n + 1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()

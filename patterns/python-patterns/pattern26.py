# Pattern 26: ...

# EEEEE
# *DDDD
# **CCC
# ***BB
# ****A

n = 4

for i in range(n, -1, -1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()

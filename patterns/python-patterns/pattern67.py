# Pattern 67: ...

# *****5
# ****4
# ***3
# **2
# *1
# 0

n = 5

for i in range(n, -1, -1):
    for j in range(i + 1):
        if i > j:
            print("*", end="")
        else:
            print(i, end="")
    print()

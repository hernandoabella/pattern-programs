# Pattern 66: ...

# 0
# *1
# **2
# ***3
# ****4
# *****5

n = 5

for i in range(n + 1):
    for j in range(i + 1):
        if i > j:
            print("*", end="")
        else:
            print(i, end="")
    print()

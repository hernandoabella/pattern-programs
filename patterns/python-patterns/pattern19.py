# Pattern 19: ...

# 54321
# *4321
# **321
# ***21
# ****1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()

# Pattern 17: ...

# ****1
# ***21
# **321
# *4321
# 54321

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()

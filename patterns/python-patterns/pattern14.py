# Pattern 14: ...

# 55555
# 4444*
# 333**
# 22***
# 1****

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(i, end="")
    print()

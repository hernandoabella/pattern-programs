# Pattern 64: ...

# 0
# 1*
# 2**
# 3***
# 4****
# 5*****

n = 5

for i in range(n + 1):
    for j in range(i + 1):
        if j != 0:
            print("*", end="")
        else:
            print(i, end="")
    print()

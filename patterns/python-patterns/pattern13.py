# Pattern 13: ...

# 1****
# 12***
# 123**
# 1234*
# 12345

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()
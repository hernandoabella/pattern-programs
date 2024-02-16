# Pattern 48: ...

#     1
#    **
#   333
#  ****
# 55555

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(i, end="")
        else:
            print(" ", end="")
    print()
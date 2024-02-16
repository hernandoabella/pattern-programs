# Pattern 52: ...

#     1
#    *2
#   3*3
#  *4*4
# 5*5*5

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(i, end="")
        else:
            print(" ", end="")
    print()

# Pattern 57: ...

# 5*3*1
#  *3*1
#   3*1
#    *1
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()

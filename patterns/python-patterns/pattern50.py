# Pattern 50: ...

#     5
#    **
#   345
#  ****
# 12345

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if i <= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()

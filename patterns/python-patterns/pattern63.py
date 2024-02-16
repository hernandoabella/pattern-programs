# Pattern 63: ...

# 5 5 5 5 5
#  * * * *
#   3 3 3
#    * *
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("* ", end="")
            else:
                print(f"{i} ", end="")
        else:
            print(" ", end="")
    print()

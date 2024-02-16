# Pattern 99: ...

#     *
#    * *
#   *   *
#  *     *
# *********

n = 5
px = n
py = n

for i in range(1, n + 1):
    for j in range(1, n * 2):
        if j == px or j == py or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    px -= 1
    py += 1
    print()

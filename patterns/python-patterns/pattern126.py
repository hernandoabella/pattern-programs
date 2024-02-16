# Pattern 126: ...

#     * * * * * *
#   * * * * * * * *
#  * * * * * * * * *
# * * * * * * * * * *
# * * * * * * * * * *
# * * * * * * * * * *
#  * * * * * * * * *
#   * * * * * * * *
#     * * * * * *

for i in range(1, 10):
    if i == 1 or i == 9:
        x = 6
        z = 4
    elif i == 2 or i == 8:
        x = 8
        z = 2
    elif i == 3 or i == 7:
        x = 9
        z = 1
    else:
        x = 10
        z = 0

    print(" " * z, end="")
    print("* " * x)

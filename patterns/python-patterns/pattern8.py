# Pattern 8: ...

#     *
#    ***
#   *****
#  *******
# *********

p_height = 5
min_stars = 1

for i in range(p_height):
    for j in range(p_height - 1, i, -1):
        print(" ", end="")
    for k in range(min_stars):
        print("*", end="")
    min_stars += 2
    print()

# Pattern 9: ...

# *********
#  *******
#   *****
#    ***
#     *


p_height = 5
max_stars = p_height * 2 - 1
p_space = p_height - 1

for i in range(p_height, 0, -1):
    for j in range(p_space, i - 1, -1):
        print(" ", end="")
    for k in range(max_stars):
        print("*", end="")
    max_stars -= 2
    print()

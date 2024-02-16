# Pattern 95: ...

#     *        *
#    ***      ***
#   *****    *****
#  *******  *******
# ******************

min_stars = 1

p_height = 5
p_space = p_height - 1

for i in range(p_height):
    for j in range(p_space, i, -1):
        print(" ", end="")
    for k in range(min_stars):
        print("*", end="")
    for l in range(p_space * 2, p_space - 1, -1):
        print(" ", end="")
    for m in range(min_stars):
        print("*", end="")
    
    min_stars += 2
    print()
# Pattern 6

#     *
#    * *
#   * * *
#  * * * *

p_height = 5

for i in range(1, p_height):
    for k in range(p_height - 1, i - 1, -1):
        print(" ", end="")
    for j in range(1, i + 1):
        print("* ", end="")
    print()
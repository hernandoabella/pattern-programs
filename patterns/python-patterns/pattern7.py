# Pattern 7: 

# * * * * *
#  * * * *
#   * * *
#    * *
#     *

p_height = 5

for i in range(p_height, 0, -1):
    for k in range(p_height - 1, i - 1, -1):
        print(" ", end="")
    for j in range(i, 0, -1):
        print("* ", end="")
    print()

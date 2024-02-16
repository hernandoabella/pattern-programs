# Pattern 98: ...

#          *
#         * *
#        * * *
#       * * * *
#     *         *
#    * *       * *
#   * * *     * * *
#  * * * *   * * * *
# * * * * * * * * * *

p_height = 5
p_space = p_height - 1
x = 1

# Upper part of the pattern
for i in range(1, p_height):
    print(" " * p_height, end="")
    for k in range(p_space, i - 1, -1):
        print(" ", end="")
    for j in range(1, i + 1):
        print("* ", end="")
    print()

# Lower part of the pattern
for i in range(p_height):
    for j in range(p_space, i, -1):
        print(" ", end="")
    for k in range(i + 1):
        print("* ", end="")
    for n in range(p_height + p_height - 2, x - 1, -1):
        print(" ", end="")
    for k in range(i + 1):
        print("* ", end="")
    x += 2
    print()
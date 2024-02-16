# Pattern 97: ...

#         *
#       # * #
#     * # * # *
#   # * # * # * #
# * # * # * # * # *

n = 5

x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j >= x and j < n + i and j % 2 == 1:
            print("* ", end="")
        elif j >= x and j < n + i and j % 2 == 0:
            print("# ", end="")
        else:
            print("  ", end="")  # Adjust spacing for better alignment
    x -= 1
    print()


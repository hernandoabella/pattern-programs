# Pattern 129: X-Max Tree

#         *
#        * *
#       * * *
#      * * * *
#       * * *
#      * * * *
#     * * * * *
#    * * * * * *
#      * * * *
#      * * * *
#      * * * *
#      * * * *

height = 3
width = 4

space = width * 5
r = 1
m = 1

for r in range(1, height):
    for i in range(m, width + 1):
        for j in range(space, i - 1, -1):
            print(" ", end="")
        for k in range(1, i + 1):
            print("* ", end="")
        print()
    m += 2
    width += 2

for i in range(1, 5):
    for j in range(space - 3, 0, -1):
        print(" ", end="")
    for k in range(1, 5):
        print("* ", end="")
    print()

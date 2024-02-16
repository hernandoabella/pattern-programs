# Pattern 91: ...

# * * * * *
# * * * *
# * * *
# * *
# *
# * *
# * * *
# * * * *
# * * * * *

size = 4

for i in range(size, -size - 1, -1):
    for j in range(0, abs(i) + 1):
        print("* ", end="")
    print()

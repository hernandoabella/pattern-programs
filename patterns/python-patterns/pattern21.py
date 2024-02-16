# Pattern 21: ...

# A****
# AB***
# ABC**
# ABCD*
# ABCDE

n = 5

for i in range(n):
    for j in range(n):
        if j > i:
            print("*", end="")
        else:
            print(chr(j + 65), end="")
    print()

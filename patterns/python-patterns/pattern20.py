# Pattern 20: ...

# A****
# BB***
# CCC**
# DDDD*
# EEEEE

n = 5

for i in range(n):
    for j in range(n):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()

# Pattern 30: ...

# * A* B*
# C* D* E
# * F* G*
# H* I* J
# * K* L*

n = 5
x = ord('A')

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i + j) % 2 == 1:
            print(chr(x), end="")
            x += 1
        else:
            print("* ", end="")
    print()

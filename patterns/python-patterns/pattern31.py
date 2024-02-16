# Pattern 31: ...

# * # # # # # #
# # # # # # * *
# * * * # # # #
# # # # * * * *
# * * * # # # #
# # # # # # * *
# * # # # # # #

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i % 2 == 1 and j <= x:
            print("* ", end="")
        elif i % 2 == 0 and j >= n - x + 1:
            print("* ", end="")
        else:
            print("# ", end="")
    print()
    if i <= n // 2:
        x += 1
    else:
        x -= 1

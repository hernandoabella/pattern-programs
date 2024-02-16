# Pattern 161: ...

# *       *
#  *     * 
#   *   *  
#    * *   
#     *    

n = 5
x = 1
for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == x or j == 2 * n - x:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x += 1

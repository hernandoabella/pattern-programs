# Python Pattern Programs

### Pattern 1
```
# *****
# *****
# *****
# *****
# *****

for i in range(1, 6):
    for j in range(1, 6):
        print("*", end="")  # put any character
    print()
```
### Pattern 2
```
# *
# **
# ***
# ****
# *****

for i in range(1, 6):
    for j in range(1, i + 1):
        print("*", end="")
    print()
```
Pattern 3
# *****
# ****
# ***
# **
# *

for i in range(1, 6):
    for j in range(5, i - 1, -1):
        print("*", end="")
    print()
 
Pattern 4
#     *
#    **
#   ***
#  ****
# *****

n = 5

for i in range(1, n + 1):
    for j in range(n - 1, i - 1, -1):
        print(" ", end="")
    for k in range(1, i + 1):
        print("*", end="")
    print()

 
Pattern 5
# *****
#  ****
#   ***
#    **
#     *

n = 5

for i in range(n, 0, -1):
    for j in range(n - 1, i - 1, -1):
        print(" ", end="")
    for k in range(1, i + 1):
        print("*", end="")
    print()
 
Pattern 6

#     *
#    * *
#   * * *
#  * * * *

p_height = 5

for i in range(1, p_height):
    for k in range(p_height - 1, i - 1, -1):
        print(" ", end="")
    for j in range(1, i + 1):
        print("* ", end="")
    print()
 
Pattern 7
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
 
Pattern 8

#     *
#    ***
#   *****
#  *******
# *********

p_height = 5
min_stars = 1

for i in range(p_height):
    for j in range(p_height - 1, i, -1):
        print(" ", end="")
    for k in range(min_stars):
        print("*", end="")
    min_stars += 2
    print()
 
Pattern 9

# *********
#  *******
#   *****
#    ***
#     *

p_height = 5
max_stars = p_height * 2 - 1
p_space = p_height - 1

for i in range(p_height, 0, -1):
    for j in range(p_space, i - 1, -1):
        print(" ", end="")
    for k in range(max_stars):
        print("*", end="")
    max_stars -= 2
    print()
 
Pattern 10

# *
# **
# ***
# ****
# ***
# **
# *

size = 3

for i in range(size, -size-1, -1):
    for j in range(size, abs(i)-1, -1):
        print("*", end="")
    print()
 
Pattern 11
#    *
#   **
#  ***
# ****
#  ***
#   **
#    *

size = 3

for i in range(size, -size-1, -1):
    for j in range(1, abs(i)+1):
        print(" ", end="")
    for k in range(size, abs(i)-1, -1):
        print("*", end="")
    print()

 
Pattern 12

# 1****
# 22***
# 333**
# 4444*
# 55555

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 13

# 1****
# 12***
# 123**
# 1234*
# 12345

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 14

# 55555
# 4444*
# 333**
# 22***
# 1****

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 15

# 12345
# 1234*
# 123**
# 12***
# 1****

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 16

# ****1
# ***22
# **333
# *4444
# 55555

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 17

# ****1
# ***21
# **321
# *4321
# 54321

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 18

# 55555
# *4444
# **333
# ***22
# ****1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 19

# 54321
# *4321
# **321
# ***21
# ****1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if j > i:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 20

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
 
Pattern 21

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
 
Pattern 22

# EEEEE
# DDDD*
# CCC**
# BB***
# A****

n = 4

for i in range(n, -1, -1):
    for j in range(n + 1):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()

 
Pattern 23

# ABCDE
# ABCD*
# ABC**
# AB***
# A****

n = 4

for i in range(n, -1, -1):
    for j in range(n + 1):
        if j > i:
            print("*", end="")
        else:
            print(chr(j + 65), end="")
    print()
 
Pattern 24

# ****A
# ***BB
# **CCC
# *DDDD
# EEEEE

n = 4

for i in range(n + 1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()
 
Pattern 25

# ****A
# ***BA
# **CBA
# *DCBA
# EDCBA

n = 4

for i in range(n + 1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(j + 65), end="")
    print()
 
Pattern 26

# EEEEE
# *DDDD
# **CCC
# ***BB
# ****A

n = 4

for i in range(n, -1, -1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(i + 65), end="")
    print()
 
Pattern 27

# EDCBA
# *DCBA
# **CBA
# ***BA
# ****A

n = 4

for i in range(n, -1, -1):
    for j in range(n, -1, -1):
        if j > i:
            print("*", end="")
        else:
            print(chr(j + 65), end="")
    print()
 
Pattern 28
# 1 2 3 4 *
# 1 2 3 * 5
# 1 2 * 4 5
# 1 * 3 4 5
# * 2 3 4 5

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == n - i + 1:
            print("* ", end="")
        else:
            print(j, end=" ")
    print()
 
Pattern 29

#  * 1 * 2 *
#  3 * 4 * 5
#  * 6 * 7 *
#  8 * 9 *10
#  *11 *12 *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i + j) % 2 == 1:
            print(f"{x:2}", end="")
            x += 1
        else:
            print(" *", end="")
    print()
 
Pattern 30

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

 
Pattern 31

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
 
Pattern 32

# * 0 0 0 * 0 0 0 *
# 0 * 0 0 * 0 0 * 0
# 0 0 * 0 * 0 * 0 0
# 0 0 0 * * * 0 0 0
# 0 0 0 0 * 0 0 0 0

n = 5

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == i or j == 2 * n - i or j == n:
            print("* ", end="")
        else:
            print("0 ", end="")
    print()
 
Pattern 33

# 1
# 1* 2
# 1* 2* 3
# 1* 2* 3* 4
# 1* 2* 3* 4* 5

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(j, end="")
        if j != i:
            print("* ", end="")
    print()

 
Pattern 34
#  1
#  3*  2
#  4*  5*  6
# 10*  9*  8*  7
# 11* 12* 13* 14* 15

n = 5

px = 1
py = 1

for i in range(1, n + 1):
    t = py
    for j in range(1, i + 1):
        if i % 2 == 1:
            print(f"{px:2}", end="")
        else:
            print(f"{t:2}", end="")
            t -= 1
        px += 1
        if j != i:
            print("* ", end="")
    py = py + i + 1
    print()
 
Pattern 35

# #
# **
# ###
# ****
# #####

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print("#", end="")
    print()
 
Pattern 36

# 1
# **
# 333
# ****
# 55555

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print(i, end="")
    print()

 
Pattern 37

# 1
# **
# 123
# ****
# 12345

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 38

# 1
# 1*
# 1*3
# 1*3*
# 1*3*5

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        if j % 2 == 0:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 39

# 1
# 2*
# 3*3
# 4*4*
# 5*5*5

n = 5

for i in range(1, n + 1):
    for j in range(1, i + 1):
        if j % 2 == 0:
            print("*", end="")
        else:
            print(i, end="")
    print()

 
Pattern 40

# #####
# ****
# ###
# **
# #

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print("#", end="")
    print()

 
Pattern 41

# #*#*#
# #*#*
# #*#
# #*
# #

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if j % 2 == 0:
            print("*", end="")
        else:
            print("#", end="")
    print()
 
Pattern 42

# 55555
# ****
# 333
# **
# 1

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 43

# 12345
# ****
# 123
# **
# 1

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if i % 2 == 0:
            print("*", end="")
        else:
            print(j, end="")
    print()
 
Pattern 44

# 1*3*5
# 1*3*
# 1*3
# 1*
# 1

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if j % 2 == 0:
            print("*", end="")
        else:
            print(j, end="")
    print()

 
Pattern 45

# 1*3*5
# 1*3*
# 1*3
# 1*
# 1

n = 5

for i in range(n, 0, -1):
    for j in range(1, i + 1):
        if j % 2 == 0:
            print("*", end="")
        else:
            print(i, end="")
    print()

 
Pattern 46

#     #
#    **
#   ###
#  ****
# #####

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if i <= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print("#", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 47

#     #
#    *#
#   #*#
#  *#*#
# #*#*#

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print("#", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 48

#     1
#    **
#   333
#  ****
# 55555

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(i, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 49

#     1
#    **
#   321
#  ****
# 54321

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 50

#     5
#    **
#   345
#  ****
# 12345

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if i <= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 51

#     1
#    *1
#   3*1
#  *3*1
# 5*3*1

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()

 
Pattern 52

#     1
#    *2
#   3*3
#  *4*4
# 5*5*5

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(i, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 53

# #####
#  ****
#   ###
#    **
#     #

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print("#", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 54

# #*#*#
#  *#*#
#   #*#
#    *#
#     #

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print("#", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 55

# 55555
#  ****
#   333
#    **
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(i, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 56

# 54321
#  ****
#   321
#    **
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 57

# 5*3*1
#  *3*1
#   3*1
#    *1
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("*", end="")
            else:
                print(j, end="")
        else:
            print(" ", end="")
    print()
 
Pattern 58

#     #
#    * *
#   # # #
#  * * * *
# # # # # #

n = 5

for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if i <= j:
            if i % 2 == 0:
                print("* ", end="")
            else:
                print("# ", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 59

#     #
#    * #
#   # * #
#  * # * #

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i > j:
            if j % 2 == 0:
                print("* ", end="")
            else:
                print("# ", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 60

#     1
#    * *
#   3 3 3
#  * * * *
# 5 5 5 5 5

n = 5

for i in range(1, n + 1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("* ", end="")
            else:
                print(f"{i} ", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 61

# # # # # #
#  * * * *
#   # # #
#    * *
#     #

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("* ", end="")
            else:
                print("# ", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 62

# # * # * #
#  * # * #
#   # * #
#    * #
#     #

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if j % 2 == 0:
                print("* ", end="")
            else:
                print("# ", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 63

# 5 5 5 5 5
#  * * * *
#   3 3 3
#    * *
#     1

n = 5

for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if i >= j:
            if i % 2 == 0:
                print("* ", end="")
            else:
                print(f"{i} ", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 64

# 0
# 1*
# 2**
# 3***
# 4****
# 5*****

n = 5

for i in range(n + 1):
    for j in range(i + 1):
        if j != 0:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 65

# 5*****
# 4****
# 3***
# 2**
# 1*
# 0

n = 5

for i in range(n, -1, -1):
    for j in range(i + 1):
        if j != 0:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 66

# 0
# *1
# **2
# ***3
# ****4
# *****5

n = 5

for i in range(n + 1):
    for j in range(i + 1):
        if i > j:
            print("*", end="")
        else:
            print(i, end="")
    print()

 
Pattern 67

# *****5
# ****4
# ***3
# **2
# *1
# 0

n = 5

for i in range(n, -1, -1):
    for j in range(i + 1):
        if i > j:
            print("*", end="")
        else:
            print(i, end="")
    print()
 
Pattern 68

# *   *
#  * *
#   *
#  * *
# *   *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == j or i + j == n + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 69

#   *
#   *
# *****
#   *
#   *

for i in range(1, 6):
    for j in range(1, 6):
        if j == 3 or i == 3:
            print("*", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 70

# *****
# *   *
# *   *
# *   *
# *****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == 1 or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 71

# *****
# *###*
# *###*
# *###*
# *****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == 1 or i == n:
            print("*", end="")
        else:
            print("#", end="")
    print()
 
Pattern 72

# *******
# **   **
# * * * *
# *  *  *
# * * * *
# **   **
# *******

n = 7

for i in range(n):
    for j in range(n):
        if i == 0 or j == 0 or i == j or i == n - 1 or j == n - 1 or i + j == n - 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 73

# *
# * *
# *   *
# *     *
# *       *
# *         *
# * * * * * * *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or i == j or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 74

# * * * * * * *
# *         *
# *       *
# *     *
# *   *
# * *
# *

n = 7
for i in range(n, 0, -1):
    for j in range(n, 0, -1):
        if j == n - i + 1 or j == n or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 75

#         *
#       * *
#     *   *
#   *     *
# * * * * *

n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == n - i + 1 or j == n or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 76

# * * * * *
#   *     *
#     *   *
#       * *
#         *

n = 5
for i in range(n, 0, -1):
    for j in range(1, n + 1):
        if j == n - i + 1 or j == n or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 77

#     *
#    * *
#   *   *
#  *     *
# *       *

n = 5
px = n
py = n

for i in range(1, n + 1):
    for j in range(1, n * 2 + 1):
        if j == px or j == py:
            print("*", end="")
        else:
            print(" ", end="")
    px -= 1
    py += 1
    print()
 
Pattern 78

# *       *
#  *     *
#   *   *
#    * *
#     *

n = 5
px = 1
py = n * 2 - 1

for i in range(1, n + 1):
    for j in range(1, n * 2 + 1):
        if j == px or j == py:
            print("*", end="")
        else:
            print(" ", end="")
    px += 1
    py -= 1
    print()
 
Pattern 79

# *
#  *
#   *
#    *
#   *
#  *
# *

n = 7
x = 1
for i in range(1, n + 1):
    for j in range(1, x + 1):
        if j == x:
            print("* ", end="")
        else:
            print(" ", end="")
    print()
    if i <= n / 2:
        x += 1
    else:
        x -= 1
 
Pattern 80

#    *
#   *
#  *
# *
#  *
#   *
#    *

n = 7
x = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if j == x:
            print("* ", end="")
        else:
            print(" ", end="")
    print()

    if i <= n // 2:
        x -= 1
    else:
        x += 1

 
Pattern 81

#     *
#    * *
#   *   *
#  *     *
# *       *
#  *     *
#   *   *
#    * *
#     *

n = 9
px = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == px or j == n - px + 1:
            print("*", end="")
        else:
            print(" ", end="")
    if i <= n // 2:
        px -= 1
    else:
        px += 1
    print()
 
Pattern 82
#     *
#    / \    
#   /   \   
#  /     \  
# /       \ 
# \       /
#  \     /
#   \   /
#    \ /
#     *

n = 10

px = n // 2
py = n // 2

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == 1 or i == n) and j == n // 2:
            print("*", end="")
        elif j == px:
            print("/", end="")
        elif j == py:
            print("\\", end="")
        else:
            print(" ", end="")

    if i == n // 2:
        px, py = py, px
    else:
        px -= 1
        py += 1
    print()
Pattern 83

#     *
#    - -
#   -   -
#  -     -
# -       -
# -       -
#  -     -
#   -   -
#    - -
#     *

n = 10
px = n // 2
py = n // 2

for i in range(1, n + 1):
    for j in range(1, n):
        if (i == 1 or i == n) and j == n // 2:
            print("*", end="")
        elif j == px or j == py:
            print("-", end="")
        else:
            print(" ", end="")
    if i == n // 2:
        t = px
        px = py
        py = t
    else:
        px -= 1
        py += 1
    print()

Pattern 84

#    *
#   * *
#  * * *
# * * * *
#  * * *
#   * *
#    *

size = 3

for i in range(size, -size-1, -1):
    for j in range(1, abs(i)+1):
        print(" ", end="")
    for k in range(size, abs(i)-1, -1):
        print("* ", end="")
    print()


 
Pattern 85

# *
# **
# ***
# *
# **
# ***
# *
# **
# ***

n = 3
for i in range(3):
    for j in range(1, n+1):
        print("*" * j)

 
Pattern 86

# *
# * *
# 123
# * *
# *

#include <stdio.h>

n = 5
x = 1

for i in range(1, n+1):
    for j in range(1, x+1):
        if i != n//2 + 1:
            print("* ", end="")
        else:
            print(j, end=" ")
    if i <= n//2:
        x += 1
    else:
        x -= 1
    print()
 
Pattern 87

# *
# * *
# ABC
# * *
# *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if i != n // 2 + 1:
            print("*", end=" ")
        else:
            print(chr(64 + j), end=" ")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
 
Pattern 88

# 1
# 2* 2
# 3* 3* 3
# 4* 4* 4* 4
# 3* 3* 3
# 2* 2
# 1

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, 2 * x):
        if i <= n // 2 + 1 and j % 2 == 1:
            print(i, end="")
        elif i > n // 2 + 1 and j % 2 == 1:
            print(n - i + 1, end="")
        else:
            print("*", end=" ")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()

 
Pattern 89

# * * * * * * *
#   * * * * *
#     * * *
#       *
#     * * *
#   * * * * *
# * * * * * * *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j >= x and j <= n - x + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()

 
Pattern 90

# *           *
# * *       * *
# * * *   * * *
# * * * * * * *
# * * *   * * *
# * *       * *
# *           *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j <= x or j >= n - x + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
 
Pattern 91

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
 
Pattern 92

# * * * *
#   * * *
#     * *
#       *
#     * *
#   * * *
# * * * *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n // 2 + 2):
        if j >= x:
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
 
Pattern 93

# *       *
# **     **
# ***   ***
# **** ****
# *********

n = 5

for i in range(1, n + 1):
    for j in range(1, n * 2):
        if j <= i or j >= n * 2 - i:
            print("*", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 94

# *********
# **** ****
# ***   ***
# **     **
# *       *

n = 5
px = n
py = n

for i in range(1, n + 1):
    for j in range(1, n * 2):
        if j > px and j < py:
            print(" ", end="")
        else:
            print("*", end="")
    px -= 1
    py += 1
    print()
 
Pattern 95

#     *        *
#    ***      ***
#   *****    *****
#  *******  *******
# ******************

min_stars = 1

p_height = 5
p_space = p_height - 1

for i in range(p_height):
    for j in range(p_space, i, -1):
        print(" ", end="")
    for k in range(min_stars):
        print("*", end="")
    for l in range(p_space * 2, p_space - 1, -1):
        print(" ", end="")
    for m in range(min_stars):
        print("*", end="")
    
    min_stars += 2
    print()
 
Pattern 96

# 1 2 3 4 * 4 3 2 1
# 1 2 3 * * * 3 2 1
# 1 2 * * * * * 2 1
# 1 * * * * * * * 1
# * * * * * * * * *

n = 5

x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j >= x and j <= n + i - 1:
            print("* ", end="")
        elif j <= n:
            print(j, end=" ")
        else:
            print(2 * n - j, end=" ")
    x -= 1
    print()
 
Pattern 97

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
 
Pattern 98

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
 
Pattern 99

#     *
#    * *
#   *   *
#  *     *
# *********

n = 5
px = n
py = n

for i in range(1, n + 1):
    for j in range(1, n * 2):
        if j == px or j == py or i == n:
            print("*", end="")
        else:
            print(" ", end="")
    px -= 1
    py += 1
    print()
 
Pattern 100

# *
# **
# * *
# *  *
# * *
# **
# *

n = 7

x = 1

for i in range(1, n + 1):
    for j in range(1, x + 1):
        if j == 1 or j == x:
            print("*", end="")
        else:
            print(" ", end="")
    print()

    if i <= n // 2:
        x += 1
    else:
        x -= 1
 
Pattern 101

#    *
#   **
#  * *
# *  *
#  * *
#   **
#    *

n = 7
x = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n // 2 + 2):
        if j == x or j == n // 2 + 1:
            print("*", end="")
        else:
            print(" ", end="")
    if i <= n // 2:
        x -= 1
    else:
        x += 1
    print()
 
Pattern 102

# *********
#  *     *
#   *   *
#    * *
#     *

n = 5
x = 1
y = 2 * n - 1

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == x or j == y or i == 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x += 1
    y -= 1
 
Pattern 103

# *           *
# * *       * *
# *   *   *   *
# *     *     *
# *   *   *   *
# * *       * *
# *           *

n = 7
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == x or j == n - x + 1 or (j == 1 and i != 1 and i != n) or (j == n and i != 1 and i != n):
            print("* ", end="")
        else:
            print("  ", end="")
    if i <= n // 2:
        x += 1
    else:
        x -= 1
    print()
 
Pattern 104

# *     *     *
#   *   *   *
#     * * *
# * * * * * * *
#     * * *
#   *   *   *
# *     *     *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == i or j == n - i + 1 or i == n // 2 + 1 or j == n // 2 + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 105

# *     * * * *
# *     *
# *     *
# * * * * * * *
#       *     *
#       *     *
# * * * *     *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == n // 2 + 1 or j == n // 2 + 1 or \
           (i == 1 and j >= n // 2 + 1) or \
           (i == n and j <= n // 2) or \
           (j == 1 and i <= n // 2) or \
           (j == n and i >= n // 2 + 1):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 

Pattern 106

# *   *   *   *
# *   *   *   *
# * * * * * * *
# *           *
# *           *
# *           *
# * * * * * * *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == n // 2 or i == n) or \
           ((j == 1 or j == n) and i >= n // 2) or \
           (j % 2 == 1 and i <= n // 2):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 107

# * * * * * * * * *
# *               *
# *   * * * * *   *
# *   *       *   *
# *   *   *   *   *
# *   *       *   *
# *   * * * * *   *
# *               *
# * * * * * * * * *

n = 9
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (j <= x or j >= n - x + 1) and j % 2 == 1:
            print("* ", end="")
        elif (j >= x and j <= n - x + 1) and i % 2 == 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
    if i <= n // 2:
        x += 1
    else:
        x -= 1

 
Pattern 108

#   *   *   *
# *   *   *   *
#   *   *   *
# *   *   *   *
#   *   *   *
# *   *   *   *
#   *   *   *

n = 7

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i + j) % 2 == 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 109

# *     *     *
# **   ***   **
# *** ***** ***
# *************
# *************
# *************
# *************

n = 7

x = n
for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if (j >= x and j <= 2 * n - x) or j <= n - x + 1 or j >= n + x - 1:
            print("*", end="")
        else:
            print(" ", end="")
    x -= 1
    print()

 
Pattern 110

#         *
#       * * *
#     *   *   *
#   *     *     *
# * * * * * * * * *
#   *     *     *
#     *   *   *
#       * * *
#         *

n = 9
c1 = (n - 1) // 2
c2 = 3 * n // 2 - 1

for i in range(n):
    for j in range(n):
        if i + j == c1 or i - j == c1 or j - i == c1 or i + j == c2 or i == c1 or j == c1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 111

# * * * * * * * * *
# * * * *   * * * *
# * * *       * * *
# * *           * *
# *               *
# * *           * *
# * * *       * * *
# * * * *   * * * *
# * * * * * * * * *

n = 9
c1 = (n - 1) // 2
c2 = 3 * n // 2 - 1

for i in range(n):
    for j in range(n):
        if i + j <= c1 or i - j >= c1 or j - i >= c1 or i + j >= c2:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 112


# * * * * * * * *
# * * *   * * * *
# * *       * * *
# *           * *
# * *           *
# * * *       * *
# * * * *   * * *
# * * * * * * * *

n = 8
c1 = (n - 1) // 2
c2 = 3 * n // 2 - 1

for i in range(n):
    for j in range(n):
        if i + j <= c1 or i - j >= c1 or j - i >= c1 or i + j >= c2:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 113

# *     *
# **   **
# *** ***
# *******
# *** ***
# **   **
# *     *

n = 7
px = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j <= px or j >= n - px + 1:
            print("*", end="")
        else:
            print(" ", end="")

    if i <= n // 2:
        px += 1
    else:
        px -= 1

    print()
 
Pattern 114

#     *****
#    *****
#   *****
#  *****
# *****

z = 1
n = 5

for i in range(n):
    for j in range(n - 1, i, -1):
        print(" ", end="")
    for k in range(n):
        print("*", end="")
    z += 1
    print()
 
Pattern 115

# **
# **
# ****
# ****
# ******
# ******

for i in range(1, 7):
    k = i + 1 if i % 2 != 0 else i
    print("*" * k)

 
Pattern 116

#     **
#     **
#   ****
#   ****
# ******
# ******

for i in range(1, 7):
    k = i + 1 if i % 2 != 0 else i
    print(" " * (6 - k), "*" * k)


 
Pattern 117

# ******
# ******
# ****
# ****
# **
# **

n = 6

for i in range(n, 0, -1):
    k = i + 1 if i % 2 != 0 else i
    print("*" * k)

 
Pattern 118


# ******
# ******
#   ****
#   ****
#     **
#     **

n = 6

for i in range(n, 0, -1):
    k = i + 1 if i % 2 != 0 else i
    print(" " * (n - k) + "*" * k)
 
Pattern 119

# *
# *
# **
# **
# ***
# ***

n = 3

for i in range(1, n + 1):
    for c in range(n - 1, 0, -1):
        for j in range(i):
            print("*", end="")
        print()
 
Pattern 120

#   *
#   *
#  **
#  **
# ***
# ***

for i in range(1, 4):
    for x in range(2, 0, -1):
        for y in range(2, i - 1, -1):
            print(" ", end="")
        for j in range(i):
            print("*", end="")
        print()
 
Pattern 121

# ***
# ***
# **
# **
# *
# *

for i in range(3, 0, -1):
    for x in range(2, 0, -1):
        for j in range(i):
            print("*", end="")
        print()
 
Pattern 122

# ***
# ***
#  **
#  **
#   *
#   *

for i in range(3, 0, -1):
    for x in range(2, 0, -1):
        for y in range(2, i - 1, -1):
            print(" ", end="")
        for j in range(i):
            print("*", end="")
        print()

 
Pattern 123

#   *
#   *
#  ***
#  ***
# *****
# *****

n = 3
z = 1
for i in range(n):
    for j in range(2, 0, -1):
        for x in range(n - 1, i - 1, -1):
            print(" ", end="")
        for y in range(z):
            print("*", end="")
        print()
    z += 2
 
Pattern 124

#       **
#       **
#     *    *
#     *    *
#   *        *
#   *        *
# *            *

n = 7
x = n
for i in range(1, n + 1):
    for j in range(1, 2 * n + 1):
        if j == x or j == 2 * n - x + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    if i % 2 == 0:
        x -= 2
 
Pattern 125

# *****
#   ***
#     *
#   ***
# *****

n = 3
s1 = n * 2 - 1
s2 = 3

for i in range(1, n + 1):
    print("  " * (i - 1), end="")
    print("*" * s1)
    s1 -= 2

for i in range(1, n):
    print("  " * (n - i - 1), end="")
    print("*" * s2)
    s2 += 2
 
Pattern 126

#     * * * * * *
#   * * * * * * * *
#  * * * * * * * * *
# * * * * * * * * * *
# * * * * * * * * * *
# * * * * * * * * * *
#  * * * * * * * * *
#   * * * * * * * *
#     * * * * * *

for i in range(1, 10):
    if i == 1 or i == 9:
        x = 6
        z = 4
    elif i == 2 or i == 8:
        x = 8
        z = 2
    elif i == 3 or i == 7:
        x = 9
        z = 1
    else:
        x = 10
        z = 0

    print(" " * z, end="")
    print("* " * x)
 
Pattern 127

#  ***   ***
# ***** *****
# ***********
#  *********
#   *******
#    *****
#     ***
#      *

n = 6

# Top part of the heart
for i in range(n // 2, n + 1, 2):
    print(" " * (n - i), end="")
    print("*" * i, end="")
    print(" " * (n - i), end="")
    print("*" * i)

# Bottom part of the heart
for i in range(n, 0, -1):
    print(" " * (n - i), end="")
    print("*" * (2 * i - 1))

 
Pattern 128

#  ** **
# *  *  *
# *     *
#  *   *
#   * *
#    *

for row in range(6):
    for col in range(7):
        if (row == 0 and col % 3 != 0) or (row == 1 and col % 3 == 0) or (row - col == 2) or (row + col == 8):
            print("*", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 129: X-Max Tree

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
Pattern 130

# * * * * *
# *     * *
# *   *   *
# * *     *
# * * * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or j == 1 or j == n or i + j == n + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 131

#   * *
# *   *
#     *
#     *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == mid or i == n or (i + j == mid and j <= mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 132

# * * * * *
#         *
# * * * * *
# *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or (j == 1 and i >= mid) or (j == n and i < mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 133

# * * * * *
#         *
# * * * * *
#         *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or j == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 134

# *       *
# *       *
# * * * * *
#         *
#         *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == mid or (j == 1 and i <= mid) or j == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 135

# * * * * *
# *
# * * * * *
#         *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or (j == 1 and i <= mid) or (j == n and i > mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 136

# * * * * *
# *
# * * * * *
# *       *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or j == 1 or (j == n and i > mid):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 137

# * * * *
#       *
#     *
#   *
# *

n = 5

for i in range(1, n + 1):
    for j in range(1, n):
        if i == 1 or i + j == n + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 138

# * * * * *
# *       *
# * * * * *
# *       *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or j == 1 or j == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 139

# * * * * *
# *       *
# * * * * *
#         *
# * * * * *

n = 5
mid = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == mid or (j == 1 and i <= mid) or j == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 140

#     *
#    * *
#   *****
#  *     *
# *       *

n = 5
x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n + 1):
        if j == x or j == n + i - 1:
            print("*", end="")
        elif j >= x and j <= n + i - 1 and i == n // 2 + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x -= 1
 
Pattern 141

# ****
# *   *
# *****
# *   *
# ****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or (i == 1 or i == n or i == n // 2 + 1) and j <= n - 1:
            print("*", end="")
        elif i != 1 and i != n and j == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 142

# *****
# *
# *
# *
# *****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or j == 1:
            print("*", end="")
    print()
 
Pattern 143

# ****
# *   *
# *   *
# *   *
# ****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or (i == 1 or i == n) and j <= n - 1:
            print("*", end="")
        elif i != 1 and i != n and j == n:
            print("*", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 144

# *****
# *
# *****
# *
# *****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or i == 1 or i == n or i == n // 2 + 1:
            print("*", end="")
    print()
 
Pattern 145

# *****
# *
# *****
# *
# *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or i == 1 or i == n // 2 + 1:
            print("*", end="")
        else:
            print(" ", end="")
    print()

 
Pattern 146

# *****
# *
# * ***
# *   *
# *****

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or i == 1 or i == n or (i > n // 2 and j == n) or (i == (n // 2 + 1) and j > n // 2):
            print("*", end="")
        else:
            print(" ", end="")
    print()
 
Pattern 147

# *       *
# *       *
# * * * * *
# *       *
# *       *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == n // 2 + 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

 
Pattern 148

# * * * * *
#     *
#     *
#     *
# * * * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or j == n // 2 + 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()
 
Pattern 149

# * * * * *
#     *
#     *
#     *
# * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or (i == n and j <= n // 2 + 1) or j == n // 2 + 1:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    print()

 
Pattern 150

# *   *
# * *
# *
# * *
# *   *

n = 5

x = n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n // 2 + 2):
        if j == 1 or j == x:
            print("*", end=" ")
        else:
            print(" ", end=" ")
    if i <= n // 2:
        x -= 1
    else:
        x += 1
    print()

 
Pattern 151

# *
# *
# *
# *
# * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or (i == n and j <= (n # 2) + 1):
            print("* ", end="")
    print()

 
Pattern 152

# *       *
# * *   * *
# *   *   *
# *       *
# *       *

n = 5
x = 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or (j == x or j == n - x + 1) and i <= (n // 2) + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    x += 1
    print()

 
Pattern 153

# *       *
# * *     *
# *   *   *
# *     * *
# *       *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == j:
            print("* ", end="")
        else:
            print("  ", end="")
    print()


 
Pattern 154

# * * * * *
# *       *
# *       *
# *       *
# * * * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == 1 or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 155

# * * *
# *   *
# * * *
# *
# *

n = 5
x = (n // 2) + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == 1 and j <= x) or j == 1 or (j == x and i <= x) or (i == x and j <= x):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 156

# * * * * * *
# *         *
# *         *
# *         *
# *       * *
# * * * * * *
#             *

n = 7
x = n - n // 2 + 1

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (i == 1 or i == x + 1) and j <= x + 1 or (j == 1 or j == x + 1) and i <= x + 1 or (j == i and i >= x):
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 157

# * * *
# *   *
# * * *
# * *
# *   *

n = 5

for i in range(1, n + 1):
    x = 1
    for j in range(1, (n // 2) + 2):
        if j == 1 or i == 1 or i == (n // 2) + 1 or (i <= n // 2 and j == (n // 2) + 1) or j == x:
            print("* ", end="")
        else:
            print("  ", end="")
        x += 1 if i > n // 2 else 0
    print()
 
Pattern 158

# * * * * *
# *
# * * * * *
#         *
# * * * * *

n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or i == n // 2 + 1 or (j == 1 and i <= n // 2 + 1) or (j == n and i > n // 2 + 1):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 159

# * * * * *
#     *
#     *
#     *
#     *

n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or j == n // 2 + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()

 
Pattern 160

# *       *
# *       *
# *       *
# *       *
# * * * * *

n = 5
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == 1 or j == n or i == n:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 161
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
 
Pattern 162

# *   *   *
# *  * *  *
# * *   * *
# **     **
# *       *

n = 5
x = n

for i in range(1, n + 1):
    for j in range(1, 2 * n):
        if j == 1 or j == 2 * n - 1 or j == x or j == 2 * n - x:
            print("*", end="")
        else:
            print(" ", end="")
    print()
    x -= 1

 
Pattern 163

# *       *
#   *   *
#     *
#   *   *
# *       *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if j == i or j == n - i + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 164

# *       *
#   *   *
#     *
#     *
#     *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if (j == i or j == n - i + 1) and i <= n // 2 + 1 or (j == n // 2 + 1 and i > n // 2):
            print("* ", end="")
        else:
            print("  ", end="")
    print()
 
Pattern 165

# * * * * *
#       *
#     *
#   *
# * * * * *

n = 5

for i in range(1, n + 1):
    for j in range(1, n + 1):
        if i == 1 or i == n or j == n - i + 1:
            print("* ", end="")
        else:
            print("  ", end="")
    print()




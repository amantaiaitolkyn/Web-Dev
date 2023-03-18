def power(a,n):
    b = 1
    for i in range(0,n):
        b *= a
    return b 
a , n = input().split()
a = int(a)
n = int(n)
print(power(a,n))

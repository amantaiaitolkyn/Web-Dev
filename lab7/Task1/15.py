x =int(input())
k = 0
while (x!=0):
    k += x%10
    x //= 10
print(str(k))
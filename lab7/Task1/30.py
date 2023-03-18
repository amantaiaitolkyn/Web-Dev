n = int(input())
s=input()
a=[int(s) for s in s.split()]
for i in range(0,n):
    if a[i]%2 == 0:
       print(a[i], end=' ')
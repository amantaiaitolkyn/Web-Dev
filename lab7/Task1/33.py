n = int(input())
s=input()
a=[int(s) for s in s.split()]
a.reverse()
for i in range(0,n):
   print(a[i],end=' ')

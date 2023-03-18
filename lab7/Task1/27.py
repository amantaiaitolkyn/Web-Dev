# n = int(input())
# a = []
# for i in range(0,n):
#     x = int(input())
#     a.append(x)
# for i in range(0,len(a)):
#     if int(i) % 2 == 0:
#         print(i,end=' ')
n = int(input())
s=input()
a=[int(s) for s in s.split()]
for i in range(0,n+1):
    if int(i)%2 == 0:
       print(a[i], end=' ')
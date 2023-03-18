n = int(input())
s=input()
cnt=0
a=[int(s) for s in s.split()]
# a.sort()
for i in range(1,n):
    if a[i] == a[i-1]:
        cnt = cnt+1
        break
if(cnt == 0):
    print("NO")
else:
    print("YES")
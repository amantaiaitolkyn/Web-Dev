num = int(input())
ans = 0
list=[int(x) for x in input().split()]
for i in list:
    if int(i)>0:
        ans = ans + 1
print(ans)
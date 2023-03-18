num = int(input())
ans = 0
list=[int(x) for x in input().split()]
for i in range(1,len(list)):
    if list[i] > list[i-1]:
        ans = ans + 1
print(ans)
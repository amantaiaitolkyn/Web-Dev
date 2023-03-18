a = int(input())
ans=0
for x in range(1,a+1):
    if a % x == 0:
        ans = ans + 1
print(ans)
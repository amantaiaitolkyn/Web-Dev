a = int(input())
ans=''
for x in range(1,a+1):
    if a % x == 0:
        ans = ans + str(x)+" "
print(ans)
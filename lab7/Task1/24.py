k=1
i=1
n = int(input())
ans = ''
while (i*k<=n):
    ans = ans + str(i*k)+" "
    k=k*2
print(ans)

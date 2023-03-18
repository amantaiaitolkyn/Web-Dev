a = int(input())
b = int(input())
ans = ''
for x in range(a,b+1):
    if x % 2 == 0:
        ans = ans + str(x)+" "
print(ans)
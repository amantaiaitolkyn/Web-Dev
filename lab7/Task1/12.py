a = int(input())
b = int(input())
c = int(input())
d = int(input())
ans=''
for x in range(a,b+1):
    if x % d == c:
        ans = ans + str(x)+" "
print(ans)
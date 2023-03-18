import math
a = int(input())
b = int(input())
ans = ''
for x in range(a,b+1):
   if math.sqrt(x * 1.0) == int(math.sqrt(x)):
    ans = ans + str(x)+" "
print(ans)
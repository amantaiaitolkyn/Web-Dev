def min4(a, b, c, d):
    m = min(a, b)
    m1 = min(m, c)
    m2 = min(m1, d)
    return m2
 
 
a, b, c, d = input().split()
a = int(a)
b = int(b)
c = int(c)
d = int(d)
print(min4(a, b, c, d))
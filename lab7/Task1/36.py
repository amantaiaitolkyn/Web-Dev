
def xor(x,y):
    return (x|y)
x,y = input().split()
x = bool(x)
y = bool(y)
print(int(xor(x,y)))

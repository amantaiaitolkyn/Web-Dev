# String-2
def double_char(str):
  ans = ""
  for i in str:
    ans = ans + i*2
  return ans

def count_hi(str):
  return str.count('hi')

def cat_dog(str):
   return str.count('cat') == str.count('dog')

def count_code(str):
  return sum(1 for i in range(len(str) - 3)
        if str[i:i + 2] == 'co' and str[i + 3] == 'e'
    )

def end_other(a, b):
  a = a.lower()
  b = b.lower()
  return (b.endswith(a) or a.endswith(b))

def xyz_there(str):
  return str.count('.xyz') != str.count('xyz')

def count_evens(nums):
    return sum(1 for n in nums if n % 2 == 0)

def big_diff(nums):
    return max(nums) - min(nums)

def centered_average(nums):
    small = min(nums)
    big = max(nums)
    return (sum(nums) - small - big) / (len(nums) - 2)


def sum13(nums):

    total = 0
    i = 0

    while i < len(nums):
        if nums[i] == 13:
            i += 2
            continue
        total += nums[i]
        i += 1

    return total 

def sum67(nums):
    record = True
    total = 0

    for n in nums:
        if n == 6:
            record = False

        if record:
            total += n
            continue

        if n == 7:
            record = True

    return total

def has22(nums):
    for i in range(len(nums) - 1):
        if nums[i] == 2 and nums[i + 1] == 2:
            return True

    return False
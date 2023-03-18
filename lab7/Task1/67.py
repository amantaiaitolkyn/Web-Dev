# WARMAP-2

def string_times(str, n):
  s = ""
  for i in range(n):
    s = s + str
  return s

def front_times(str, n):
  ans = ""
  for i in range(n):
    ans = ans+ str[:3]
  return ans

def string_bits(str):
  result = ""
  for i in range(len(str)):
    if i % 2 == 0:
      result = result + str[i]
  return result

def string_splosion(str):
  ans = ""
  for i in range(len(str)):
    ans = ans + str[:i+1]
  return ans


def last2(str):
  if len(str) < 2:
    return 0
  
  last2 = str[len(str)-2:]
  count = 0
  
  for i in range(len(str)-2):
    sub = str[i:i+2]
    if sub == last2:
      count = count + 1

  return count

def array_count9(nums):
  cnt = 0
  for i in nums:
    if i == 9:
      cnt = cnt + 1
  return cnt

def array_front9(nums):
  ok = False
  cnt = 0
  for i in nums:
    cnt = cnt + 1
    if i == 9:
      ok = True
    if cnt == 4:
      break
  return ok

def array123(nums):
  for i in range(len(nums)-2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

def string_match(a, b):
  shorter = min(len(a), len(b))
  count = 0
  
  for i in range(shorter-1):
    a_sub = a[i:i+2]
    b_sub = b[i:i+2]
    if a_sub == b_sub:
      count = count + 1

  return count
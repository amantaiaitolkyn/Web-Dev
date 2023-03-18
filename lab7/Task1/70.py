# Logic-2

def make_bricks(small, big, goal):
    big_needed = min(big, goal // 5)
    return goal - (big_needed * 5) <= small

def lone_sum(a, b, c):
  nums = (a, b, c)
  return sum(n for n in nums if nums.count(n) == 1)

def lucky_sum(a, b, c):
    total = 0

    for n in (a, b, c):
        if n != 13:
            total += n
        else:
            break

    return total

def no_teen_sum(a, b, c):
    nums = (a, b, c)
    return sum(fix_teen(n) for n in nums)
def fix_teen(n):
    return 0 if n not in (15, 16) and 13 <= n <= 19 else n
  
def round_sum(a, b, c):
    rounded_values = [int(round(num, -1)) for num in (a, b, c)]
    return sum(rounded_values)

def close_far(a, b, c):
    a_b_diff = abs(a - b)
    a_c_diff = abs(a - c)
    b_c_diff = abs(b - c)

    return (
        (a_b_diff <= 1 and a_c_diff >= 2 and b_c_diff >= 2) !=
        (a_c_diff <= 1 and a_b_diff >= 2 and b_c_diff >= 2)
    )
# Logic-1

def cigar_party(cigars, is_weekend):
   return cigars >= 40 if is_weekend else 40 <= cigars <= 60

def date_fashion(you, date):
    if you <= 2 or date <= 2:
        return 0

    if you >= 8 or date >= 8:
        return 2

    return 1

def squirrel_play(temp, is_summer):
   return 60 <= temp <= (100 if is_summer else 90)

def caught_speeding(speed, is_birthday):

    if is_birthday:
        speed -= 5

    if speed <= 60:
        return 0

    return 1 if 61 <= speed <= 80 else 2

def sorta_sum(a, b):
    total = a + b
    return 20 if 10 <= total <= 19 else total

def alarm_clock(day, vacation):
    week_day = day not in (0, 6)

    if vacation:
        return '10:00' if week_day else 'off'

    return '7:00' if week_day else '10:00'

def love6(a, b):
  return a == 6 or b == 6 or abs(a - b) == 6 or a + b == 6

def in1to10(n, outside_mode):
    if outside_mode:
        return n <= 1 or n >= 10
    return 1 <= n <= 10
    
def near_ten(num):
    num_mod_10 = num % 10
    return  num_mod_10 <= 2 or num_mod_10 >= 8
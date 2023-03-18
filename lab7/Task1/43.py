if __name__ == '__main__':
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    s = student_marks[query_name]
    sum = 0
    for i in s:
        sum += int(i)
    ans = sum / len(s)
    print("%.2f" % ans)
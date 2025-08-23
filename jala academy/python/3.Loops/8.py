num = 153
s = sum(int(d)**3 for d in str(num))
if num == s:
    print("Armstrong")
else:
    print("Not Armstrong")

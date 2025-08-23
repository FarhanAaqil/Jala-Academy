# 1. Different ways creating a string
str1 = "Hello World"
str2 = 'Hello World'
str3 = """Hello World"""
str4 = str("Hello World")
print("1. Different ways creating a string:")
print(str1, str2, str3, str4)  # Output: Hello World Hello World Hello World Hello World
print()

# 2. Concatenating two strings using + operator
str1 = "Hello"
str2 = "World"
result = str1 + " " + str2
print("2. Concatenating two strings using + operator:")
print(result)  # Output: Hello World
print()

# 3. Finding the length of the string
text = "Hello World"
length = len(text)
print("3. Finding the length of the string:")
print(length)  # Output: 11
print()

# 4. Extract a string using Substring
text = "Hello World"
substring = text[0:5]
substring2 = text[6:]
print("4. Extract a string using Substring:")
print(substring, substring2)  # Output: Hello World
print()

# 5. Searching in strings using index()
text = "Hello World"
index = text.index("World")
print("5. Searching in strings using index():")
print(index)  # Output: 6
print()

# 6. Matching a String Against a Regular Expression With matches()
import re
text = "Hello123"
pattern = r"Hello\d+"
match = bool(re.match(pattern, text))
print("6. Matching a String Against a Regular Expression:")
print(match)  # Output: True
print()

# 7. Comparing strings
str1 = "Hello"
str2 = "Hello"
str3 = "World"
result1 = str1 == str2
result2 = str1 == str3
print("7. Comparing strings:")
print(result1, result2)  # Output: True False
print()

# 8. startsWith(), endsWith() and compareTo()
text = "Hello World"
starts = text.startswith("Hello")
ends = text.endswith("World")
compare = text < "Zebra"
print("8. startsWith(), endsWith() and compareTo():")
print(starts, ends, compare)  # Output: True True True
print()

# 9. Trimming strings with strip()
text = "  Hello World  "
trimmed = text.strip()
print("9. Trimming strings with strip():")
print(f"'{text}' -> '{trimmed}'")  # Output: '  Hello World  ' -> 'Hello World'
print()

# 10. Replacing characters in strings with replace()
text = "Hello World"
replaced = text.replace("World", "Python")
print("10. Replacing characters in strings with replace():")
print(replaced)  # Output: Hello Python
print()

# 11. Splitting strings with split()
text = "Hello,World,Python"
split_result = text.split(",")
print("11. Splitting strings with split():")
print(split_result)  # Output: ['Hello', 'World', 'Python']
print()

# 12. Converting integer objects to Strings
number = 123
string_num = str(number)
print("12. Converting integer objects to Strings:")
print(string_num, type(string_num))  # Output: 123 <class 'str'>
print()

# 13. Converting to uppercase and lowercase
text = "Hello World"
upper = text.upper()
lower = text.lower()
print("13. Converting to uppercase and lowercase:")
print(upper, lower)  # Output: HELLO WORLD hello world

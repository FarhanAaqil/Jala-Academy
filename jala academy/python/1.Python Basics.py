# Comments and Data Types Example in Python
print("Farhan Aaqil Durrani")
#output: Farhan Aaqil Durrani

# This is a single-line comment
"""
multi-line
comment
"""
print("Comments Example Done")
#output: Comments Example Done

# Data Types Example
my_int = 25
my_bool = True
my_char = 'A'
my_float = 3.14
my_double = 3.141592653589793

print("Integer:", my_int)
print("Boolean:", my_bool)
print("Character:", my_char)
print("Float:", my_float)
print("Double:", my_double)
#output: Integer: 25

# Variable Scope Example
x = "I am Global"

def my_function():
    x = "I am Local"
    print("Inside function:", x)

my_function()
print("Outside function:", x)
#output: Inside function: I am Local
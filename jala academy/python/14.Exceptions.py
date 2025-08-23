# 1. Arithmetic Exception without handling
# print(10 / 0)  # Uncomment to see ZeroDivisionError


# 2. Handle Arithmetic Exception
try:
    print(10 / 0)
except ZeroDivisionError:
    print("Arithmetic Exception handled")
# Output: Arithmetic Exception handled


# 3. Method which throws exception
def throw_exception():
    raise ZeroDivisionError("Division by zero error")

# throw_exception()  # Uncomment -> raises ZeroDivisionError


# 4. Multiple catch blocks
try:
    x = int("abc")
except ValueError:
    print("ValueError caught")
except ZeroDivisionError:
    print("ZeroDivisionError caught")
# Output: ValueError caught


# 5. Throw exception with custom message
try:
    raise Exception("This is my custom message")
except Exception as e:
    print(e)
# Output: This is my custom message


# 6. Create your own exception
class MyException(Exception):
    pass

try:
    raise MyException("This is a user-defined exception")
except MyException as e:
    print(e)
# Output: This is a user-defined exception


# 7. Finally block
try:
    x = 10 / 0
except ZeroDivisionError:
    print("Exception caught")
finally:
    print("Finally block executed")
# Output:
# Exception caught
# Finally block executed


# 8. Generate Arithmetic Exception
try:
    print(5 / 0)
except ZeroDivisionError:
    print("Arithmetic Exception (ZeroDivisionError)")
# Output: Arithmetic Exception (ZeroDivisionError)


# 9. Generate FileNotFoundException
try:
    open("nofile.txt", "r")
except FileNotFoundError:
    print("FileNotFoundException (FileNotFoundError)")
# Output: FileNotFoundException (FileNotFoundError)


# 10. Generate ClassNotFoundException (simulated in Python)
try:
    __import__("non_existent_class")
except ModuleNotFoundError:
    print("ClassNotFoundException simulated (ModuleNotFoundError)")
# Output: ClassNotFoundException simulated (ModuleNotFoundError)


# 11. Generate IOException
import io
try:
    raise io.UnsupportedOperation("Simulated IOException")
except io.UnsupportedOperation as e:
    print("IOException simulated:", e)
# Output: IOException simulated: Simulated IOException


# 12. Generate NoSuchFieldException (simulated with getattr)
class Dummy:
    def __init__(self):
        self.x = 10

obj = Dummy()
try:
    print(obj.y)
except AttributeError:
    print("NoSuchFieldException simulated (AttributeError)")
# Output: NoSuchFieldException simulated (AttributeError)

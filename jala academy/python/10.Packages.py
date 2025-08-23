# Simulating package with two classes in one file

class Class1:
    def __init__(self):
        print("Class1 Constructor")
    def method1(self):
        print("Class1 Method")

class Class2:
    def __init__(self):
        print("Class2 Constructor")
    def method2(self):
        print("Class2 Method")

# Main section
obj1 = Class1()
obj1.method1()
# Output:
# Class1 Constructor
# Class1 Method

obj2 = Class2()
obj2.method2()
# Output:
# Class2 Constructor
# Class2 Method

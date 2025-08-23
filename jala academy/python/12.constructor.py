# 1. Default, one-argument, and two-argument constructors
class Example1:
    def __init__(self, a=None, b=None):
        if a is None and b is None:
            print("Default Constructor")
        elif b is None:
            print("One-Argument Constructor:", a)
        else:
            print("Two-Argument Constructor:", a, b)

obj1 = Example1()
# Output: Default Constructor
obj2 = Example1(10)
# Output: One-Argument Constructor: 10
obj3 = Example1(10, 20)
# Output: Two-Argument Constructor: 10 20


# 2. Call superclass constructors from child class
class Super:
    def __init__(self, x=None):
        if x is None:
            print("Super Default Constructor")
        else:
            print("Super Argument Constructor:", x)

class Child(Super):
    def __init__(self, y=None):
        if y is None:
            super().__init__()  
            print("Child Default Constructor")
        else:
            super().__init__(y)  
            print("Child Argument Constructor:", y)

c1 = Child()
# Output:
# Super Default Constructor
# Child Default Constructor

c2 = Child(50)
# Output:
# Super Argument Constructor: 50
# Child Argument Constructor: 50


# 3. Access modifiers with constructors (simulated in Python)
class Modifiers:
    def __init__(self):
        print("Public Constructor")
    def _protected_init(self):
        print("Protected Constructor")
    def __private_init(self):
        print("Private Constructor")
    def default_init(self):
        print("Default Constructor (no modifier in Python)")

m = Modifiers()
m._protected_init()
# Output:
# Public Constructor
# Protected Constructor

# m.__private_init()  # would raise AttributeError if uncommented
m.default_init()
# Output:
# Default Constructor (no modifier in Python)


# 4. Attributes of a constructor
class Attributes:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        print("Constructor with attributes:", self.name, self.age)

a = Attributes("John", 25)
print("Accessing attributes -> Name:", a.name, ", Age:", a.age)
# Output:
# Constructor with attributes: John 25
# Accessing attributes -> Name: John , Age: 25

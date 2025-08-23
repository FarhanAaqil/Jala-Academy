#Static variable accessed through class name
class MyClass:
    static_var = 10

print(MyClass.static_var)
#output: 10

#Static method accessed through class name
class MyClass:
    static_var = 10

obj = MyClass()
print(obj.static_var)
#output: 10

#change static variable within an instance
class MyClass:
    static_var = 10

obj1 = MyClass()
obj1.static_var = 20
print(obj1.static_var)
print(MyClass.static_var)
#output: 20

#change static variable within the class
class MyClass:
    static_var = 10

MyClass.static_var = 30
print(MyClass.static_var)
#output: 30
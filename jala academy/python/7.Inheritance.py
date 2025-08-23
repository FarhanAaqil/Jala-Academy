
class A:
    def method1(self):
        print("Class A - Method1")
    def method2(self):
        print("Class A - Method2")
    def show(self):
        print("Class A - Overridden Method")

class B(A):
    def method3(self):
        print("Class B - Method3")
    def method4(self):
        print("Class B - Method4")
    def show(self):
        print("Class B - Overridden Method")

class C(B):
    def method5(self):
        print("Class C - Method5")
    def method6(self):
        print("Class C - Method6")
    def show(self):
        print("Class C - Overridden Method")

a = A()
b = B()
c = C()

a.method1()
a.method2()
a.show()

b.method1()
b.method2()
b.method3()
b.method4()
b.show()

c.method1()
c.method2()
c.method3()
c.method4()
c.method5()
c.method6()
c.show()

ref: A = B()
ref.show()

ref: A = C()
ref.show()


class A1:
    x = "Class A1 Variable"

class B1(A1):
    x = "Class B1 Variable"

class C1(B1):
    x = "Class C1 Variable"

a1 = A1()
b1 = B1()
c1 = C1()

print(a1.x)
print(b1.x)
print(c1.x)

ref1: A1 = B1()
print(ref1.x)

ref1: A1 = C1()
print(ref1.x)

# Output:
# Class A - Method1
# Class A - Method2
# Class A - Overridden Method
# Class A - Method1
# Class A - Method2
# Class B - Method3
# Class B - Method4
# Class B - Overridden Method
# Class A - Method1
# Class A - Method2
# Class B - Method3
# Class B - Method4
# Class C - Method5
# Class C - Method6
# Class C - Overridden Method
# Class B - Overridden Method
# Class C - Overridden Method
# Class A1 Variable
# Class B1 Variable
# Class C1 Variable
# Class B1 Variable
# Class C1 Variable

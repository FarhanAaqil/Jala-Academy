# 1. Same name, different number of parameters (same type)
class Overload1:
    def add(self, *args):
        if len(args) == 1:
            print("One parameter:", args[0])
        elif len(args) == 2:
            print("Two parameters:", args[0] + args[1])

o1 = Overload1()
o1.add(10)
# Output: One parameter: 10
o1.add(10, 20)
# Output: Two parameters: 30


# 2. Same name, different data types
class Overload2:
    def display(self, *args):
        if all(isinstance(a, int) for a in args):
            print("Integer sum:", sum(args))
        elif all(isinstance(a, str) for a in args):
            print("String concat:", " ".join(args))

o2 = Overload2()
o2.display(5, 10)
# Output: Integer sum: 15
o2.display("Hello", "World")
# Output: String concat: Hello World


# 3. Same name, same number of parameters, same type
class Overload3:
    def show(self, x, y):
        print("Show method called with:", x, y)

o3 = Overload3()
o3.show(100, 200)
# Output: Show method called with: 100 200

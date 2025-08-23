# 1. Private fields and methods
class PrivateExample:
    def __init__(self):
        self.__field = "Private Field"
    def __private_method(self):
        print("Private Method")
    def main(self):
        print(self.__field)
        self.__private_method()

class SubPrivate(PrivateExample):
    def try_access(self):
        try:
            print(self.__field)
        except AttributeError:
            print("Cannot access private field")
        try:
            self.__private_method()
        except AttributeError:
            print("Cannot access private method")

obj1 = PrivateExample()
obj1.main()
# Output:
# Private Field
# Private Method

sub = SubPrivate()
sub.try_access()
# Output:
# Cannot access private field
# Cannot access private method


# 2. Protected fields and methods
class ProtectedExample:
    def __init__(self):
        self._field = "Protected Field"
    def _method(self):
        print("Protected Method")

class SamePackage:
    def access(self):
        obj = ProtectedExample()
        print(obj._field)
        obj._method()

class ChildProtected(ProtectedExample):
    def access(self):
        print(self._field)
        self._method()

class DifferentPackage:
    def access(self):
        obj = ProtectedExample()
        print(obj._field)
        obj._method()

same = SamePackage()
same.access()
# Output:
# Protected Field
# Protected Method

child = ChildProtected()
child.access()
# Output:
# Protected Field
# Protected Method

diff = DifferentPackage()
diff.access()
# Output:
# Protected Field
# Protected Method


# 3. Public fields and methods
class PublicExample:
    def __init__(self):
        self.field = "Public Field"
    def method(self):
        print("Public Method")

class AccessPublic:
    def access(self):
        obj = PublicExample()
        print(obj.field)
        obj.method()

pub = PublicExample()
print(pub.field)
pub.method()
# Output:
# Public Field
# Public Method

acc = AccessPublic()
acc.access()
# Output:
# Public Field
# Public Method

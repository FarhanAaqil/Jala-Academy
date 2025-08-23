from abc import ABC, abstractmethod

# 1. Abstract class with abstract and non-abstract methods
class AbstractExample(ABC):
    @abstractmethod
    def abstract_method(self):
        pass
    def non_abstract_method(self):
        print("Non-Abstract Method in AbstractExample")

# 2. Subclass for abstract class, access non-abstract method
class ChildExample(AbstractExample):
    def abstract_method(self):
        print("Implemented Abstract Method in ChildExample")
    def call_non_abstract(self):
        obj = ChildExample()
        obj.non_abstract_method()
    def call_abstract(self):
        obj = ChildExample()
        obj.abstract_method()

# Create object for child and access non-abstract methods
child = ChildExample()
child.non_abstract_method()
# Output:
# Non-Abstract Method in AbstractExample

# 3. Instance for child class in child class, call abstract method
child.call_abstract()
# Output:
# Implemented Abstract Method in ChildExample

# 4. Instance for child class in child class, call non-abstract method
child.call_non_abstract()
# Output:
# Non-Abstract Method in AbstractExample

# Complete OOP
https://codewithmosh.com/courses/417695/lectures/6880920
https://www.youtube.com/watch?v=Ej_02ICOIgs

https://www.youtube.com/watch?v=-a1PFtooGo4
https://www.youtube.com/watch?v=vBH6GRJ1REM

"""
All classes inherits from base class called OBJECT in python.
o = Object() <-- Try this

Class is like small scripts blocks, organised in chunks
class acts like a template to create an actual object
abstract class are template for classes themselves. Called Interfaces in languages like java solidity etc


@classmethod
@property
@func.setter
@abstractmethod
@staticmethod
"""

# Basic Syntax

class Point:
    default_color = "red"       # Class attribute. Snake Notation.
    
    def __init__(self,x,y):
        self.x = x
        self.y = y
    
    def __str__(self):          # when we print(instance) we get this function output or if we use str(instance)
        return f"X Y are {self.x}, {self.y}"
   
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y
   
    def draw(self):
        print("draw")
    
    @classmethod
    def zero(cls):              # Class Method
        return cls(0,0)         # cls calls Point class


p1 = Point(x,y)
Point.default_color = "green"

type(p1)
isinstance(p1, Point)       # Check if its an instance
issubclass(childClass, parentClass) # If two classes, check if one is parent and other child

p1.x        # Instance Attribute
p1.y
p1.z = 5    # Also allowed
p1.draw()
p1.default_color

# Magic Methods - https://rszalski.github.io/magicmethods/
Initialise `__init__`
Representational `__str__ __repr__ __format__`
Comparison `__eq__ __ne__ __lt__ __gt__` etc
Arithmetic `__add__ __sub__` etc
many more, see the link.

# Custom Containers - https://codewithmosh.com/courses/417695/lectures/6880938

class TagCloud:
    def __init__(self):
        self.tags = {}
        # self.__tags = {}      # Add double _ to make var private. Do in all remaining code.
                                # Note, these are not properly private can be accessed by __dict__
    
    def add(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1     # Notice "get" keyword here

    def __getitem__(self,tag):
        return self.tags.get(tag.lower(), 0)
    
    def __setitem__(self, tag, count):
        return self.tags[tag.lower()] = count
       
    def __len__(self):
        return len(self.tags)
        
    def __iter__(self):
        return iter(self.tags)
        
c = TagCloud()
c.add["Python"]     # add func allows this
c.add["python"]
c["python"]         # __getitem__ allows it
c["python"] = 10         # __setitem__ allows it
len(c)              # __len__ allows it
for each in c...    # __iter__ allows it

# Private variable - https://codewithmosh.com/courses/417695/lectures/6880935
print(c.tags["PYTHON"])     # Throws error, we need to hide it from user
we use double underscore in class to prevent this.

These are just hard to access, and not properly private.
print(c.__dict__)       # Gives out _TagCloud__tags

so we can now do
print(c._TagCloud__tags)

# Properties - https://codewithmosh.com/courses/417695/lectures/6880936
# We want to set properties with validations

class Product:
    
    def __init__(self, price):
        self.__price = price
        
    @property
    def price(self):
        return self.__price
    
    @price.setter               # Not providing this means price becomes read only
    def price(self, value):
        if value < 0:
            raise ValueError("Price can not be -ve")
        self.__price - value

p = Product(10)
p.price = 20        # Will not work if we remove price.setter from class

# Inheritance - https://codewithmosh.com/courses/417695/lectures/6880925
# Too much inheritance can create issues - https://codewithmosh.com/courses/417695/lectures/6880934
# Only 1-2 inheritance is ok, more than that is an abuse.

class Animal:
    # __init__ is not always needed, can leave it too.
    
    def __init__(self):
        print("Animal Constructor")     # https://codewithmosh.com/courses/417695/lectures/6880924
        self.age = 1
        
    def canEat(self):
        pass

class Human(Animal):
    def __init__(self):
        super().__init__()              # Inherit init from parent using super()
        print("Human Constructor")
        self.weight = 2
        #super().__init__()             # Can place after too.
        
    def canWalk(self):
        pass

class Bird(Animal):
    def canFly(self):
        pass

b = Bird()
b.canEat
b.canFly

# Example of multiple inheritance - https://codewithmosh.com/courses/417695/lectures/6880923
# Composition can be used by this, and prevent inheritance issue. Refer javascript OOP
class MixBread(Human, Bird):    # Here, if both classes have methods with same name, method from 1st class would be considered, ie Human.
    pass

# A good example - https://codewithmosh.com/courses/417695/lectures/6880921

########## Abstract Base Class ##########
# https://codewithmosh.com/courses/417695/lectures/6880929
#########

# This is also root of polymorphism in python

from abc import ABC, abstractmethod

class ParentClass(ABC):
    def __init__(self):
        pass
    
    def method1(self):          # Inherited as it is. Can be changed in the child. optional
        pass
      
    def method2(self):
        pass
    
    @abstractmethod             # Now this has to be defined in child class implementation
    def method3(self):          # Compulsory to define in the child class, else error
        pass
    
class ChildClass1(ParentClass):  # Create child class with method3. If method3 not given, it fails.
    def method3(self):
        print("Child 1")
    
class ChildClass2(ParentClass):  # Create child class with method3. If method3 not given, it fails.
    def method3(self):
        print("Child 2")

def someFunc1(control):
    control.method3()
 
def someFunc2(controls):    # Note, abstract class is not needed for this - https://codewithmosh.com/courses/417695/lectures/6880922
    for each in controls:   # Note. It will work for any classes having method3. This is called Duck Typing. If it walks like a duck and quacks like a duck, it is a duck.
        control.method3()

# Polymorphism in action - https://codewithmosh.com/courses/417695/lectures/6880919

ins1 = ChildClass1()
ins2 = ChildClass2()

someFunc1(ins1)       # Gives Child 1
someFunc1(ins2)       # Gives Child 2
someFunc2([ins1,ins2])  # Both run at once, gives Child 1 Child 2

# Inheritance with built in types - https://codewithmosh.com/courses/417695/lectures/6880933

class LogginListActivity(list):     # Notice we inherit from list class
    def append(self, object):       # Changing the append function
        print("Append called")      # Doing our logging
        super().append(object)      # Inheriting append from parent using super()
        
list = LoggingListActivity()        # Creating out list child class
list.append("1")                    # WOW it works!!!!

class TextNew(str):                 # Inheriting from str class
    def printDuplicate(self):       # our function
        return self + " " + self    

# Data Classes - Best thing ever, to auto create arithmetic comparison etc
# https://codewithmosh.com/courses/417695/lectures/6880918
from collections import namedtuple






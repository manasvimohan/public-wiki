import party.activities         # Long and verbose
import party.activities as hii  # Making usage simple by using hii as alias to import
from party.activities import servedrinks  # Import specific only

# Running them
party.activities.servefood()
hii.servedrinks()
servedrinks()

# Using __name__ to get the file name
print(f"I am speaking from module: {__name__}")

class Person:
    """This class is to create persons without gender. LOL"""

    def __init__(self, name: str, age: int):
        self.name = name
        if not type(age) is int:
            raise TypeError("For age, only integers are allowed")
        else:
            self.age = age

    def talk(self):
        """This function makes the person introduce them self.
        :param self: This takes itself in
        Returns Prints a message
        """
        print(f"Hi, I am {self.name}. I am {self.age} years old.")

    def scream(self):
        print(f"HI, I AM {self.name}!!! MY NAME IS {self.age} AND I LOVE TO SCREAM!!!")

# Inheritance from parent class person
class Female(Person):
 
    def __init__(self, name: str, age: int, hobby: str):
        super().__init__(name, age)
        self.hobby = hobby
        self.gender = "Female"

    def sing(self):
        print("La la lalal la la laa lala")

    def tell(self):
        print(f"My hobby is {self.hobby}. I am {self.gender}.")

class Male(Person):
    
    def __init__(self, name: str, age: int, hobby: str):
        super().__init__(name, age)
        self.hobby = hobby
        self.gender = "Male"

    def flex(self):
        print("Hunngg Hmmmm yeaaah hmm")
 
    def tell(self):
        print(f"My hobby is {self.hobby}. I am {self.gender}.")

# Creating an instance
rahul = Person("Rahul", 35)
print(rahul) # See the person object

rahul.talk()
rahul.scream()

def main():
    # Inheritance
    surbhi = Female("Surbhi", 55, "Dancing")

    surbhi.talk()
    surbhi.scream()
    surbhi.tell()
    surbhi.sing()

if __name__ == '__main__':
    main()

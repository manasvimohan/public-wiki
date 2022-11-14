https://codewithmosh.com/courses/759570/lectures/13732407

# Purpose
When multiple if..else or switch statements are present.
We know that in future more of such if..else or switch will be copied. 
Meaning we will have more features added.
Meaning program will be extensible, then we use the pattern.

# Steps
1. Here we make an interface called State.
2. We create multiple classes from interface and override required methods, as needed with different logics.
3. Then we have a main control class, called Context. Here we call required child, and then the methods. Based on child, method implementation changes.

# Important Considerations
Do not abuse this method. Meaning:
If we do not have case where program needs to be extensible, or new features will be added, simply use if else or Switch, no need for this pattern.

NOTE: Difference between Interface and Abstract Class.
Interface is a template to a class, which does not have any method implementation. Only method names are given.
Abstract class is also a template to a class, but it can have methods implementations, which needs to be shared among its child.

In Python we also have Protocol. 
Which differs in the sense that it can be used to make child nodes, and it will throw error only if method is not defined.
While abstract class in python, when a child is instantiated, it will throw error at that time only, if we do not implement method given in the parent class.

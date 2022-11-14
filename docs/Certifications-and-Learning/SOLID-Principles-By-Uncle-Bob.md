# The Principles
https://www.youtube.com/watch?v=69sfWNzxTMc
Uncle Bob - https://www.youtube.com/watch?v=zHiWqnTWsn4&t=4s

S   - Single Responsibility     - A class should have only one reason to change. Do only one thing?
O   - Open/ Close               - Open for extension, but closed for modification
L   - Liskov Subsitution        - The parent class can be replaced by the child class anywhere in code, and everything still works fine.
I   - Interface Segregation     - If we make a class from interface, it should use all methods in interface. So make more smaller interfaces, and make class from combination of interfaces.
D   - Dependency Inversion      - Depend on abstractions and not concrete instances. Do not modify something directly, always make a middle layer between object and actual implementation class.

All in all, objective is:
1. Write code in such a way that the future modification/ extension of code is simple.
2. Change in one place, should not affect other places.
3. It should be easy to read by your future self, and others in present.
4. Once written, nothing to be changed and any future addition of code has no affect.

How? some general, one rule mantra?
For everything, we have two things, an objective and a result.
Place a kind of bridge between them, always.
1. Like, make a class of the objective.
2. List the things it can interact with.
3. Add that list in the bridge class.
4. Connect that bridge class to the final other objective.

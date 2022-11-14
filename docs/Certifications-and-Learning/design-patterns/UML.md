# UML
https://codewithmosh.com/courses/759570/lectures/13732320

Box                 -- Class. Top section in box is class name.
-positionX:int      -- Variable. minus in start means private. Middle Section in box.
+render()           -- Method. plus in start means public. No colon means return type is void. End section in box.
+render():          -- Method which returns value. The colon in the end tells this.

Inheritance --> Black arrow from A to B class    -- public class A extends B. A is created from B. B is parent.
Composition --> Black arrow from A to B class with a solid square at A   -- B inside A. public class A { private B }.
Dependency  --> Dotted arrow from A to B class -- In A we have reference to B using a method. In above, B is instantiated in A. Here B is called by a method in A.


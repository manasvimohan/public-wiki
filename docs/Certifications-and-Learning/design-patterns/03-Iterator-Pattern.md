https://codewithmosh.com/courses/759570/lectures/13732429

It is almost exactly like State Pattern. The only difference I can see is that,
each method defined in the class created from interface, has implementation
of some kind of iterator. Like list iteration or array iteration.

Concept of generic in java is also explained in the video.

# Purpose
If something changes in a certain class, it should affect only that class. Remaining program should run without issues.
No other class should be affected.

Example, in browser we have history, with back button, forward button.
We can save the links as list or dictionary or other DS.
Now, back method for list or hash is different, so is forward.
If we change the history DS, all other methods will break.

# Steps
1. Make interface class with various iterators/ process defined. Iterators are methods in general terms.
2. Create class from interface, and define iterator methods as needed.
3. The main class, calls the interface processes, which calls specific iteration method from child.

# Important Considerations

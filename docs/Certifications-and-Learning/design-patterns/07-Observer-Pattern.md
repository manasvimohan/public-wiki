https://codewithmosh.com/courses/759570/lectures/13732538

Its pub sub pattern. 

We have a Abstract Class Called subject. This has attach(observer), detach(observer) and notify() methods.
Then we have an interface called Observer. This has update() method.

Then we have concrete subject and concrete observers.

It has two styles of communication. - https://codewithmosh.com/courses/759570/lectures/13732535
PUSH Style - Observer has update(value) method.
PULL Style - Observer has update() AND and concrete subject has getValue() method.

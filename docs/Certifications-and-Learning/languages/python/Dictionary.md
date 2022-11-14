# Dictionary

Key value pair

point = {"x": 1, "y": 2}
point = dict(x=1,y=2)       <-- same as above

point["x"]  <-- point[0] like index does not work

point.get("a")      <-- return None, since its not there
point.get("a",0)    <-- return 0, since if a not there, then assign 0

del point["x"]

Looping:
for key in point:
    print(key)
    print(point[key])
    
OR

for key, value in point.items():
    print(key, value)                <-- gives tuple like ("x",1) and ("y",2)
    
# Dictionary Comprehension
https://codewithmosh.com/courses/417695/lectures/6781693

refer - [DSA functions](DSA-functions.md)



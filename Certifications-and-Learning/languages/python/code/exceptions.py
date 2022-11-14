# Video - https://codewithmosh.com/courses/417695/lectures/6880894

# Python Page - https://docs.python.org/3/library/exceptions.html


NOTE: Raising exceptions is COSTLY! - https://codewithmosh.com/courses/417695/lectures/6880893
Generally a code without exceptions is 4 times faster.

###### Try Except #######
# With try blocks with errors, execution does not stop

try:
    age = int(input("Age: "))
except ValueError as e:         # "as e" is optional
    print("Not valid age")      # Custom error
    print(e)                    # Print actual error
    print(type(e))              # See error type
else:                           # If no exceptions, then else also runs
    print("No exceptions were thrown")
finally:                        # This always runs no matter what
    file.close()                # Just an example
    

# Multiple except
except ValueError:
    any code
except ZeroDivisionError:
    any code

# Except in one line
except (ValueError, ZeroDivisionError):

# View all here https://docs.python.org/3/library/exceptions.html

###### Raising exception in code ########
# https://codewithmosh.com/courses/417695/lectures/6880891

def someFunc(in):
    if in<=0:
        raise valueError("can not be -ve")  # raising error here
    return in/5
    
try:
    someFunc(-1)
except ValueError as e:
    print(e)            # we get our custom error
    

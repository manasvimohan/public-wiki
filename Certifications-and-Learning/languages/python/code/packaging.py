# https://codewithmosh.com/courses/417695/lectures/8417619


# Docstrings - https://codewithmosh.com/courses/417695/lectures/8417620

""" One line description
    
    A more detailed description.
"""

def func(a,b):
    """ 
    This func does this.
    
    Parameters:
    a (str): This is for this.
    b (int): This is for that.
    
    Returns:
    str: This gives out this.
    """
    return a+str(b)
    

# Pydoc - https://codewithmosh.com/courses/417695/lectures/8417618
In the CLI terminal, we can run pydoc, which is builtin with python

pydoc3 math

pydoc3 yourPackage
pydoc3 -w yourPackage   # Given an HTML file of documentation!! WOW

pydoc3 -p 1234          # Go to localhost:1234 and see complete documentation of your VENV!!! WOW!!

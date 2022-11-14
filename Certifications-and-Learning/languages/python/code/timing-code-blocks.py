from timeit import timeit

code1 = """
any code here
"""

code2 = """
any code here
"""

code3 = """
any code here
"""

print(timeit(code1, number=10000))
print(timeit(code2, number=10000))
print(timeit(code3, number=10000))

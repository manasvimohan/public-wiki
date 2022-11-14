# Contents

- [Joins](#Joins)
- [Inner Joins](#Inner Joins)
    - [Joining across databases](#Inner Joins#Joining across databases)
    - [Self Join](#Inner Joins#Self Join)
    - [Multiple table join](#Inner Joins#Multiple table join)
    - [Compound Join](#Inner Joins#Compound Join)
    - [Implicit Join](#Inner Joins#Implicit Join)
- [Outer Join](#Outer Join)
- [USING clause](#USING clause)
- [Natural Join](#Natural Join)
- [Cross Join](#Cross Join)
- [Union](#Union)

# Joins
Inner Joins - Only returns matching items to condition
Outer Joins - LEFT or RIGHT - returns all from left or right, and matching from other table

# Inner Joins
SELECT * 
FROM table1 t1      -- using an alias, was not needed, but we can. Note, we did not use 'AS'
JOIN table2 t2
    ON t1.idKey = t2.idKey -- now here we use alias, else we would have needed table1 table2 etc

## Joining across databases
USE myDataBase;

SELECT *
FROM table t    -- or use myDataBase.table, not sure NEED TO CHECK
JOIN otherDatabaseName.tableName ot
    ON t.idKey = ot.idKey
    
## Self Join
Imagine a table with people and their employee ID. Then it has a column "REPORTS TO" which also contains the eomployee ID. Here self join can be useful.

We imagine a single table as two tables here, giving it two aliases, then perform the operation.
In theory we can have many aliases hence a single tables imagined as many times as needed.

SELECT
    e.employeeID                -- NOTE: Even though we defined alias below, it can be used above
    e.firstName
    m.firstName AS manger       -- The table output will have the column header name changed to manager
FROM table e
JOIN table m
    ON e.employeeID = m.reportsTo

## Multiple table join
Here add multiple JOIN conditions like

SELECT *
FROM t1
JOIN t2
    ON t1.a = t2.a
JOIN t3
    ON t1.b = t3.b
    
... as many times as needed

## Compound Join
https://codewithmosh.com/courses/525068/lectures/9590161

There are cases when there are uniquely identifying columns. BUT combination or two columns can have a resulting unique value.
Here we use compound join

SELECT *
FROM table1 t1
JOIN table2 t2
    ON t1.col1 = t2.col1
    AND t1.col2 = t2.col2
    -- USING (col1, col2)       <-- Use this instead of ON AND

So in above, col1 and col2 combo is used

## Implicit Join
https://codewithmosh.com/courses/525068/lectures/9590158

Similar to Joining using ON, but here we use WHERE instead of ON.
Not recommended because if we forget to write WHERE, join becomes a CROSS JOIN, which leads to a very big table.

SELECT *
FROM table1 t1, table2 t2
WHERE t1.col1 = t2.col1

# Outer Join
USE aDataBaseOfInterest;

SELECT t1.col1, t2.col2, t3.col3 as AliasName       <-- What to be shown in result table
FROM table1 t1                                      <-- Base table
LEFT JOIN table2 t2                                 <-- 1st table to join
    ON t1.col1 = t2.col1                            <-- Condition of t1 t2
LEFT JOIN table3 t3                                 <-- 2nd table to join
    ON t2.col2 - t3.col2                            <-- Condition of t2 t3
ORDER BY t1.col1                                    <-- Order final result

Add as many tables as needed from as many databases as needed.
Even self join can be done.

Above gives all values from t1 and only the matching from t2.
If we use RIGHT JOIN, we get all from t2 and matching from t1
It is suggested to always use LEFT JOIN, mixing right left can make it difficult to visualise.

# USING clause
https://codewithmosh.com/courses/525068/lectures/9590162

Note that using ON and then conditions gets very verbose.
Hence we use USING

SELECT * 
FROM table1 t1
JOIN table2 t2
    -- ON t1.idKey = t2.idKey
    USING (idKey)               <-- NOTE - idKey is column common in both tables.

For compound/ composite join, refer the above section.
Basically USING(col1, col2) instead of using ON AND

# Natural Join
NOT RECOMMENDED. This automatically looks out for common column names and join them.
As you can see, we might have unexpected results in case column names are not defined properly.

SELECT * 
FROM table1 t1
NATURAL JOIN table2 t2

# Cross Join
https://codewithmosh.com/courses/525068/lectures/9590160

Image a clothing table (can images two or more tables too)
A column with 3 colors 
Another column with 3 sizes

Now we want all combinations of color wrt sizes. Here we use cross join. I think it as Multi Key join in a way.

-- Method 1 - Explicit Syntax
SELECT t1.color, t2.size    -- If in one table, t1.color t2.size. At cross join command we set table1 as t2
FROM table1 t1
CROSS JOIN table2 t2        -- If one table, table1 t2

-- Method 2 - Implicit Syntax
SELECT t1.color, t2.size
FROM table1 t1, table2 t2

# Union
https://codewithmosh.com/courses/525068/lectures/9590156

SELECT .. FROM ..
UNION
SELECT .. FROM ..





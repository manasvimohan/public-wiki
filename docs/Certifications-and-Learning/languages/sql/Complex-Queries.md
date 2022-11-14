# Contents

- [Complex Queries](#Complex Queries)
- [ALL ANY and SOME](#ALL ANY and SOME)
- [Correlated Sub Queries](#Correlated Sub Queries)
- [EXISTS](#EXISTS)
- [Sub Query in SELECT](#Sub Query in SELECT)
- [Sub Query in FROM](#Sub Query in FROM)

# Complex Queries

All sections in --> https://codewithmosh.com/courses/525068/lectures/9590240

This part of the tutorial is just to see how very complex queries are written.

So not making notes of everything here, only bits that I did not know.

Use Joins or Sub Queries. Depend case by case, for better readability.
Sub queries in SELECT clause
Sub queries in FROM clause
Using DISTINCT keyword to select uniques
Combo of above and --> IN, ALL, ANY, EXISTS

# ALL ANY and SOME
https://codewithmosh.com/courses/525068/lectures/9590248

SELECT *
FROM table
WHERE col >= ALL (100,120,90,300)    -- return cols with values above all values given in ()

Hence instead of (100,120...) we can have a subquery as well.

https://codewithmosh.com/courses/525068/lectures/9590246
"= ANY () "     <-- Equivalent to "IN ()"
SOME

# Correlated Sub Queries
https://codewithmosh.com/courses/525068/lectures/9590242

When same table is used in outer and sub query.

Example:
SELECT *
FROM table1 t1                  -- Using table1 as t1
WHERE col > (
    SELECT SVG(col)
    FROM table1
    WHERE col2 = t1.col2        -- Note here we using outer table t1's col2 to compare with inner table1's col2
)

# EXISTS
https://codewithmosh.com/courses/525068/lectures/9590236

Used in a correlated sub query, where outer and inner query share same table.

SELECT *
FROM table1 t1
WHERE EXISTS (some sub query ...)       -- better than below case
WHERE col IN (some sub query ...)       -- not performant in large table

# Sub Query in SELECT
https://codewithmosh.com/courses/525068/lectures/9590238

SELECT 
    col1, 
    col2,
    (SELECT AVG(col3)
        FROM table) AS col_average,
    col3 - (SELECT col_average) AS difference    -- NOTE: we can not use ALIAS defined above here, hence another sub query is used
FROM table

# Sub Query in FROM
https://codewithmosh.com/courses/525068/lectures/9590239

We use the above example as subquery and then apply WHERE clause

SELECT *
FROM (
    SELECT 
        col1, 
        col2,
        (SELECT AVG(col3)
            FROM table) AS col_average,
        col3 - (SELECT col_average) AS difference
    FROM table) AS summaryTable
WHERE col3 IS NOT NULL

What we did above can be achieved using VIEWS, see that section in the index.

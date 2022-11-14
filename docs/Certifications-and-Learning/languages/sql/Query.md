# Contents

- [Query](#Query)
- [Basic Statement](#Basic Statement)
- [Nitty Gritty](#Nitty Gritty)
    - [SELECT](#Nitty Gritty#SELECT)
    - [WHERE with AND OR NOT](#Nitty Gritty#WHERE with AND OR NOT)
    - [IN](#Nitty Gritty#IN)
    - [BETWEEN](#Nitty Gritty#BETWEEN)
    - [LIKE](#Nitty Gritty#LIKE)
    - [REGEXP](#Nitty Gritty#REGEXP)
    - [IS NULL](#Nitty Gritty#IS NULL)
    - [ORDER BY](#Nitty Gritty#ORDER BY)
    - [LIMIT](#Nitty Gritty#LIMIT)

# Query

# Basic Statement

The order in which these are written matters!

USE database;

SELECT col1, col2 AS anything, 'comment' as colName, 'onlyComment', col3*45, col4+6 as AddedSix
-- SELECT *
FROM someTable
-- FROM otherDatabase.someTable     -- If importing from another database
WHERE col1 = 1                      -- rows where col1 = 1
ORDER BY col2
LIMIT 4, 2                          -- Skip 4 records and give 2 remaining
-- This is a comment in SQL

Usage of below in sub queries -- meaning everything in between ()
DISTINCT
IN

# Nitty Gritty

## SELECT
SELECT col1, col2, col2*55 AS col3
FROM table
    
## WHERE with AND OR NOT
SELECT * FROM table WHERE col > 2 OR col < 5

## IN
Use IN instead of = whenever we tackle with multiple data points.

Instead of using many OR, we can give a set of values to look in a col
SELECT * FROM table 
WHERE col IN ('a','b','c') -- NOT IN can also be used for exclusion

## BETWEEN
Instead of using col>5 AND col<10 we can use BETWEEN
SELECT * FROM table
WHERE col BETWEEN 5 AND 10

Can be applied for dates as well.

## LIKE
WHERE strCol LIKE 'brush%' OR '%brush' -- like * in bash

'_y' <-- Exact match
example we have Hello
'H____o' will return Hello
'H%o' will also return Hello

NOT LIKE can also be used

## REGEXP
Advance version of LIKE. Instead of a lot of OR statements, we can use regex. Also in bash or python

WHERE strCol REGEXP 'something' -- Like %something%
WHERE strCol REGEXP '^some'     -- Starts with
WHERE strCol REGEXP 'thing$'    -- Ends With
WHERE strCol REGEXP 'oneThing|otherThing'   -- Or statement
WHERE strCol REGEXP '^something|oneThing|otherThing'    -- Combination
WHERE strCol REGEXP '[some]thing'   -- Specific thing before thing
WHERE strCol REGEXP '[a-z]thing'    -- from a-z anything before thing

## IS NULL
To find null.
WHERE col IS NULL
WHERE col IS NOT NULL

## ORDER BY
https://codewithmosh.com/courses/525068/lectures/9590109

SELECT * FROM table
ORDER BY anyCol DESC, otherCol -- default is Accending

SELECT * FROM table
ORDER BY 1, 2 DESC, 3 -- Sorting using column numbers

SELECT col1, col2, 23 AS points -- Note we made an alias to 23, naming it points
FROM table
ORDER BY points, colName -- Notice we can use alias here

## LIMIT
Limit returned number

SELECT * FROM table
LIMIT 20 -- gives 20 rows only

LIMIT 6, 3 -- This means skip first 6 records and then give 3 after them


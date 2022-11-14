# Contents

- [Summarizing Data](#Summarizing Data)
- [Aggregate Functions](#Aggregate Functions)
- [Group By](#Group By)
- [Having](#Having)
- [ROLLUP - Not part of standard SQL languages](#ROLLUP - Not part of standard SQL languages)

# Summarizing Data

# Aggregate Functions
https://codewithmosh.com/courses/525068/lectures/9590223

Following gives out single value.

MAX()
MIN()
AVG()
SUM()
COUNT()

SELECT
    MAX(col1) as alias1,
    MIN(col2) as alias3,
    AVG(col3) as alias3,
    COUNT(col4) as alias4,  -- Nulls ignored here
    COUNT(*) as alias5,      -- * used. Null included.
    COUNT(DISTINCT col4) as alias6     -- Only unique are counted
FROM table

# Group By
https://codewithmosh.com/courses/525068/lectures/9590220

To group the aggregates by a col values, we use group by

GROUP BY comes after WHERE and before ORDER BY. ORDER BY is always last.

SELECT
    col,
    SUM(col2) AS total_col2
FROM table
WHERE col3 >= 'something'
GROUP BY col4
ORDER BY total_col2 DESC

# Having
https://codewithmosh.com/courses/525068/lectures/9590222

Now once we have result from group by, we can not use WHERE to filter out entries.
So we use HAVING, which is used after GROUP BY.
To filter out GROUP BY output, we use HAVING.

NOTE: Unlike WHERE, which can select any column, HAVING can select only those columns, which are provided in the SELECT statement.

# ROLLUP - Not part of standard SQL languages
https://codewithmosh.com/courses/525068/lectures/9590221

This gives total of each element of group by as well.

Only works on aggregate functions.
Part of MySql and not standard SQL.

Format -->
GROUP BY anything, another WITH ROLLUP



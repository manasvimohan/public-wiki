# Contents

- [Insert Update and Delete](#Insert Update and Delete)
- [Inserting Row/ Rows](#Inserting Row/ Rows)
- [Inserting into Multiple Tables](#Inserting into Multiple Tables)
- [Creating a Copy of a Table](#Creating a Copy of a Table)
- [Updating Table](#Updating Table)
- [Deleting Rows](#Deleting Rows)
- [Restoring Database to original state](#Restoring Database to original state)

# Insert Update and Delete
https://codewithmosh.com/courses/525068/lectures/9590180

# Inserting Row/ Rows
-- Method 1
INSERT INTO table                           -- No col define, so follow table col sequence below
VALUES (DEFAULT, 'A','B', NULL, .....)      -- A row of all values. Default in case of AI (Auto Increment) is on.

-- Method 2
INSERT INTO table (col2, col1,col5,col6)    -- Define cols in any order
VALUES ('a','b',  1, .....),                 -- Supply in above order.
       ('aa','bb, 3, .....),
       ('ca','bb, 3, .....),
       ('ia','bt, 6, .....)
       
Insert any number of values as needed, shown above.

# Inserting into Multiple Tables
https://codewithmosh.com/courses/525068/lectures/9590188

SELECT LAST_INSERT_ID()         -- SQL generates this whenever a row is added.

INSERT INTO table (col1,col2 ...)
VALUES (1,'something'...);

INSERT INTO table2
VALUES
    (LAST_INSERT_ID(), 1, 1, ....)
    (LAST_INSERT_ID(), 2, 5, ....)
    (LAST_INSERT_ID(), 3, 4, ....)

# Creating a Copy of a Table
https://codewithmosh.com/courses/525068/lectures/9590187

Concept of Sub Query - Everything in () is executed 1st by SQL

-- Create a copy of table
CREATE TABLE table_archived AS
SELECT * FROM table                 -- A sub Query

-- Insert only specific item based on condition from one table to another
INSERT INTO table_archived          -- Assume we truncate (delete) data in the table_archive before running this
SELECT *
FROM table
WHERE col1 > 'someValue'

# Updating Table
https://codewithmosh.com/courses/525068/lectures/9590185

UPDATE table
SET col1 = 10, col2 = 'something'
WHERE someCol = 3                   -- Could be any column. 3 is value in someCol.
--WHERE someCol in (3,4,5)          -- Multiple record update, where 3,4,5 are values in someCol

https://codewithmosh.com/courses/525068/lectures/9590186

There could be cases where you do not have an ID in one table, and need to get it from another table.
So we take sub queries.
WHERE someCol IN                    -- Say we dont have some col in this table.
            (SELECT someCol
             FROM table2
             WHERE col3 IN ('a','b'))
             
Above - 
SQL will first run the code in ()
Give the result to someCol in WHERE
Then UPDATE using SET
   
# Deleting Rows
https://codewithmosh.com/courses/525068/lectures/9590181

DELETE FROM table
WHERE col = 'something'

# Restoring Database to original state
https://codewithmosh.com/courses/525068/lectures/9590184

# Stored Procedures
https://codewithmosh.com/courses/525068/lectures/9590329

When we save sql queries somewhere, then run them, its called stored procedures.
Like we can write code in cli, but we save code in files as scripts, similar.

Result:
Store and Organise SQL
Faster Execution
Data Security

These gets saved in the Stored Procedures section in MySQL
Again, best practice is to save Stored Procedures in SQL files and put under GIT for source control.

# Format
https://codewithmosh.com/courses/525068/lectures/9590330
https://codewithmosh.com/courses/525068/lectures/9590337

DROP PROCEDURE IF EXISTS proc_name  -- Not compulsory. Ensure we delete proc if already exist. 
DELIMITER $$                        -- ";" is default. But our procedure will have ; in each line, so for MySQL to know that the whole thing ended, we choose custom delimiter, we can use anything.
CREATE PROCEDURE proc_name          -- Inputs are not mandetory
(
    input_a CHAR(2),
    input_b INT
)
BEGIN
    ... all query here ... ;        -- ";" is needed here, even if one file.
END$$
DELIMITER ;

# Calling a Procedure
CALL proc_name(input1, input2 ...)

........INCOMPLETE............
Start from https://codewithmosh.com/courses/525068/lectures/9590334





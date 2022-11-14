# Contents

- [Triggers and Events](#Triggers and Events)
- [Triggers](#Triggers)
    - [Format](#Triggers#Format)
    - [Viewing triggers in mysql](#Triggers#Viewing triggers in mysql)
    - [Dropping Trigger](#Triggers#Dropping Trigger)
- [Events](#Events)

# Triggers and Events

# Triggers
If a change is made in a table, we can trigger some change in other table.
Useful for automation.
Useful for auditing. - https://codewithmosh.com/courses/525068/lectures/9707199

## Format
https://codewithmosh.com/courses/525068/lectures/9707196

DELIMITER $$

CREATE TRIGGER tableName_after_typeOfAction  -- typeOfAction is INSERT, UPDATE or DELETE
    AFTER INSERT ON table_name               -- UPDATE or DELETE can be used too
    FOR EACH ROW
BEGIN
.....any query or stored procedure for ANOTHER TABLE!!! ....
END

DELIMITER ;

NOTE: The BEGIN END block contains query which DOES NOT include the table based on which trigger was made since it will lead to infinte loop.

## Viewing triggers in mysql
https://codewithmosh.com/courses/525068/lectures/9707200

SHOW TRIGGER
SHOW TRIGGER LIKE 'any-search-term%'

## Dropping Trigger
DROP TRIGGER IF EXISTS tableName_after_typeOfAction

# Events

Like cron jobs, running certain things in scheduled manner.

We can perform
Database maintenance tasks
Database backups
Report Generation etc

SHOW VARIABLES LIKE 'event%';       -- Check if event scheduler is on or off
SET GLOBAL event_scheduler = OFF    -- turn it on or off

DELIMITER $$

CREATE EVENT yearly_delete_tableName_something_rows     -- Use ALTER EVENT to change the event
ON SCHEDULE
    -- AT '2019-05-01'
    EVERY 1 YEAR STARTS '2019-01-01' ENDS '2029-01-01'
    -- EVERY 2 MONTH
DO BEGIN
    DELETE FROM table
    WHERE col < NOW() - INTERVAL 1 YEAR;
END $$
DELIMITER ;

SHOW EVENTS;
SHOW EVENTS LIKE 'yearly%';
DROP EVENT IF EXIST eventName;
ALTER EVENT eventName DISABLE;  -- Later ENABLE... cool

# Contents

- [Views](#Views)
- [Updatable views](#Updatable views)
- [WITH CHECK OPTION](#WITH CHECK OPTION)
- [Other benefits of views](#Other benefits of views)

# Views

A specific query can be saved for later reference, which is called a view.
Any standard opration can be performed on a view as if it was a table.
Yes, you can add tables into views too to form a new view.
This gets saved in the Views part in the MySql.

Good Practice is to save table views in SQL files and put it under git.
This way people can see data and track changes.

CREATE VIEW viewName AS
.....your query here....


DROP VIEW viewName

CREATE OR REPLACE VIEW viewName AS      -- Good way, no need to drop view every time you update it
.....your query here....

# Updatable views
https://codewithmosh.com/courses/525068/lectures/9590281

If we do not have following in the query, view is updatable
-- DISTINCT
-- Aggregate Function
-- GROUP BY / HAVING
-- UNION

# WITH CHECK OPTION
https://codewithmosh.com/courses/525068/lectures/9590283

When we update or delete in Views, rows get removed. 
But we do not want that behaviour in some cases.
Hence we use WITH CHECK OPTION, at very end of query

CREATE OR REPLACE VIEW ...... AS
.....query....
WITH CHECK OPTION

# Other benefits of views 
https://codewithmosh.com/courses/525068/lectures/9590282

Works like an abstraction layer over the original table or db.

Simplify Queries
Reduce the impact of Change
Restrict access to the data

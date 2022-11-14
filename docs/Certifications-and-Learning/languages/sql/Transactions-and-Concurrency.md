# Contents

- [Transactions](#Transactions)
    - [ACID properties of transaction](#Transactions#ACID properties of transaction)
    - [Format](#Transactions#Format)
- [Concurrency and Locking](#Concurrency and Locking)

# Transactions
https://codewithmosh.com/courses/525068/lectures/9710684

Group of statements in SQL that represent single unit of work.

Eg. Order table needs to be updated and inventory number reduced once someone makes a purchase.
Updating order and removing from inventory.
These two updates form a transaction.
We can not have order table undated but inventory table failed update.

## ACID properties of transaction
Atomicity       - Every part gets executed in transaction or None.
Consistency     - Database will always be in consistent state. We will not have links and things missing.
Isolation       - Two transaction do not interfere. Working on same table, one transaction wait for other to complete.
Durability      - Once transaction completed and committed, the changed in db are permanent.

## Format

USE databaseName

START TRANSACTION;

query 1;
query 2;
....

COMMIT;     -- Can use ROLLBACK instead for debugging

# Concurrency and Locking

When two users tr

.........incomplete ......

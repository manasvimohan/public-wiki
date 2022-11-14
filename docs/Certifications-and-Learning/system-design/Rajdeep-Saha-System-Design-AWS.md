# Contents

- [Rocking System Design](#Rocking System Design)
- [AWS Terms](#AWS Terms)
    - [Load Balancing](#AWS Terms#Load Balancing)
    - [VM and storage](#AWS Terms#VM and storage)
    - [Scaling](#AWS Terms#Scaling)
    - [Alternate to EC2](#AWS Terms#Alternate to EC2)
    - [Other](#AWS Terms#Other)
    - [Queue PubSub Messaging and Streaming](#AWS Terms#Queue PubSub Messaging and Streaming)
    - [Database](#AWS Terms#Database)
    - [Caching](#AWS Terms#Caching)
- [Monolith vs Micro Services](#Monolith vs Micro Services)
    - [Monolith](#Monolith vs Micro Services#Monolith)
    - [Micro Service](#Monolith vs Micro Services#Micro Service)
- [AWS Micro Service](#AWS Micro Service)
- [ALB vs NLB](#ALB vs NLB)
- [API and API Gateway](#API and API Gateway)
- [Load balancer VS API GAteway](#Load balancer VS API GAteway)
- [Scaling - Horizontal vs Vertical](#Scaling - Horizontal vs Vertical)
    - [Scaling Types](#Scaling - Horizontal vs Vertical#Scaling Types)
- [Interview Question](#Interview Question)
    - [EC2](#Interview Question#EC2)
    - [Lambda - Server less scaling](#Interview Question#Lambda - Server less scaling)
    - [Kubernetes - Container Scaling](#Interview Question#Kubernetes - Container Scaling)
- [Synchronous vs Event Driven Architecture](#Synchronous vs Event Driven Architecture)
- [Queues VS PubSub](#Queues VS PubSub)
- [Streaming VS Messaging](#Streaming VS Messaging)
- [SQL vs NoSQL vs Aurora vs DynamoDB](#SQL vs NoSQL vs Aurora vs DynamoDB)
- [Websockets for Server to Client Communication - Chatbot](#Websockets for Server to Client Communication - Chatbot)
- [Caching](#Caching)
- [Redis memcached and caching strategy](#Redis memcached and caching strategy)
    - [Lazy Loading](#Redis memcached and caching strategy#Lazy Loading)
    - [Write-Through](#Redis memcached and caching strategy#Write-Through)
- [High Availability VS Fault Tolerance](#High Availability VS Fault Tolerance)
    - [High Availability](#High Availability VS Fault Tolerance#High Availability)
    - [Fault Tolerance](#High Availability VS Fault Tolerance#Fault Tolerance)
- [Distributed Computing](#Distributed Computing)
- [Hashing](#Hashing)
    - [Challenges](#Hashing#Challenges)
    - [Consistent hashing](#Hashing#Consistent hashing)
- [Database Sharding also called Horizontal Partitioning](#Database Sharding also called Horizontal Partitioning)
- [Disaster recovery (DR) - RPO vs RTO](#Disaster recovery (DR) - RPO vs RTO)
    - [RPO](#Disaster recovery (DR) - RPO vs RTO#RPO)
    - [RTO](#Disaster recovery (DR) - RPO vs RTO#RTO)
    - [Strategy](#Disaster recovery (DR) - RPO vs RTO#Strategy)
- [CAP Theorem - NoSQL follows this](#CAP Theorem - NoSQL follows this)

# Rocking System Design

# AWS Terms

## API Gateway
## Load Balancing
ELB - Elastic Load Balancer
    ALB - Application LB    - HTTP - OSI Layer 7 - Application Layer - https://www.forcepoint.com/cyber-edu/osi-model
    NLB - Network LB        - Any protocol - OSI Layer 4

ALB Ingress for Kubernetes

## VM and storage
EC2 - VM
S3  - Storage - CloudFront for caching

## Scaling
ASG - Auto Scaling Group - for EC2

HPA - Horizontal Pod AutoScaler - Here, the PODS in the EC2 gets scaled up
CA - Cluster Auto Scaling - for Kubernetes PODS in EC2 - The EC2 in which POD running gets scaled up

AWS Fargate - Kubernetes Auto Scaling - For kubernetes but in lambda fasion

RS - Replica Set for Pods

AMI - Amazon Machine Image - For high traffic days, AMI size should be small
IEM - Infrastructure Event Management   - To manage high traffic day
RDS Proxy for scaling database, managing connections properly

## Alternate to EC2
Lambda - Serverless
EKS - Elastic Kubernetes - Its inside EC2
ECS - Elastic Container  - Its inside EC2

## Security
AWS WAF - Web Application Firewall

## Queue PubSub Messaging and Streaming
-Queue - Pull Based in pipe
SQS - Simple Queue Service - Messaging
Amazon MQ - Message Queue

-PubSub - Push Based to topics
SNS - Simple Notification Service - Push Based
EventBridge - Push Based - Messaging

KINESIS Stream - Streaming - Live Data Analysis
MSK - Managed Service for Kafka - Streaming

## Database
AZ - Availability Zone
HA - High Availability

-SQL
Amazon RDS - Relation Database Service
Aurura

-NoSQL
DynamoDB - Has DAX Dynamo Accelerator for cache
DocumentDB - Like Mongodb
MCS - Managed Cassandra

## Caching
TTL - Time To Leave
ElastiCache
ElastiCache for redis and memcache

DAX for DynamoDB
CloudFront for S3

# Monolith vs Micro Services

## Monolith
Resource efficient in small scale.
Scaling is challenge
API can be used
get/post/delete --> API gateway/ load balancer --> Amazon EC2 (M5.12xlarge) --> Database
Entire Monolith to be scaled.

## Micro Service
get     --> API gateway/ load balancer --> Amazon EC2 (t3.large)  --> Database1
post    --> API gateway/ load balancer --> Amazon EC2 (t3.medium) --> Database2
delete  --> API gateway/ load balancer --> Amazon EC2 (t3.micro)  --> Database3

Polyglot - write in service in different langauge

Independent
    Scaling
    Governance
    Deployment
    Testing
    Functionality

# AWS Micro Service
Amazon EC2 in Auto Scaling Group with Different scaling criteria

EC2 scaling
Elastic Load Balancing + Amazon API Gateway --> get     --> EC2 m5.large - ASG - Auto Scaling Group
                                            --> post    --> EC2 t3.micro - ASG - Auto Scaling Group
                                            --> delete  --> EC2 m4.2xlarge - ASG - Auto Scaling Group
                                            
AWS lambda scaling
Elastic Load Balancing + Amazon API Gateway --> get     --> AWS Lambda
                                            --> post    --> AWS lambda
                                            --> delete  --> AWS lambda - scaled automatically

Container/ Kubernetes Scaling
Elastic Load Balancing + Amazon API Gateway --> get     --> Amason Elastic Kubernetes Service
                                            --> post    --> Amazon Eleastic Container Service
                                            --> delete  --> same above

Kubernetes
Ingress ALB (Application load Balancer) --> Service a,b,c --> pod1, pod2, pod3

Any above combo can be used to, service 1 in ec2, service 2 in aws lambda etc

# ALB vs NLB
Amazon Elastic Load Balancing - Integrates with SSL - exposes a DNS/ address

ALB - Application Load Balancer
    Operates on OSI Layer 7 - Routes traffic based on Path, like get post delete - Validate and Terminate SSL
NLB - Network Load Balancer
    Operates on OSI Layer 4 - Routes traffic based on protocol and port, udp, tcp etc - SSL pass

# API and API Gateway
Amazon API gateway

# Load balancer VS API Gateway

Both integrate with AWS WAF for protection

API Gateway - 
Implement rate limit, static endpoint not possible, 
accepts only HTTPS, request validation possible, can handle spiky traffic, integrate different region and even aws accounts
Able to export import API using swagger, OPEN API
Able to cache response
Timeout is 30 seconds
Integrates with almost all AWS service
No Health Check
pay per use

Application Load Balancer - 
Static endpoint possible, HTTP too, 
ALB is regional service, delay in spiky traffic, pre-allocate LCU availbale but at extra cost
No direct method to export import rules for cross platforms
Cant cache
Timeour is 4000 Seconds
EC2, Lambda and IP address as backend
Health check available
pay for idle too

# Scaling - Horizontal vs Vertical

Vertical Scaling - Bigger server
Horizontal Scaling - Many server with copy

## Scaling Types

Lambda Scales only horizontally

Kubernetes
Container in POD and POD in EC2 which is Virtual Machine
Multiple PODs made in EC2 --> Cluster Auto-Scaler -- NOTE: Container in POD does not increase

Amazon Fargate -- has no underlying EC2
Lambda type -- PODs keep on increasing in Fargate

# Interview Question
https://www.udemy.com/course/rocking-system-design/learn/lecture/28472274#overview

Handle festival traffic which is very high

## EC2
Using Elastic Load Balancing ELB traffic to  EC2, which put in ASG

ELB --> Pre Warm Load Balancer
ASG --> Add Scheduled Scaling
EC2 --> Lightweight AMI in EC2
AMI --> Ensure Amazon Machine Image is light
Database Connection --> Use database proxy eg RDS proxy
    High traffic means many open unused connections with db, which can be controlled by RDS proxy
On top off all --> Run IEM (Infrastructre Event Management) to handle high traffic
Increase Account Limits 
    There is limit to EC2 instance per account, that needs to be increased by request
Utilise different Account + Region Combo

## Lambda - Server less scaling

client --> API Gateway --> AWS Lambda

API gateway - Enable API caching, use HTTP API instead of Rest API faster and cheaper
AWS Lambda -
    Provisioned Concurrency - Scheduled
    Optemize Lambda code using X-ray
    Optemize Lambda Configuration using CloudWatch Insights
    
Use RDS proxy for database
Increase Account Limits
Utilize different Account + region combo

## Kubernetes - Container Scaling

USE ALB (application load balancer) ingress

HPA - Horizontal Pod AutoScaler
RS - Replica Set
CA - Cluster Auto Scaler

Use replica set to run multiple copies of pod
Use cluster over provisioner to provision nodes

Pre Warm ALB
RDS proxy in between PODS and DataBase

Account limit and Account/region combo

# Synchronous vs Event Driven Architecture

In Sync Each component scales up with
    Same factor
    Same time

In Async, components can be scaled up independently

Scale UP API gateway ---> Amazon Simple Queue Service SQS (messages saved)

Async is more cost effective

Combinations can be used. In ordering system, order insert is async, status retrieve is sync

# Queues VS PubSub

Queue - Pull Model:     A --> Pipe --> B (SQS (Simple Queue Service) and Amazon MQ)
PubSub - Push Model:    A --> Topic --> Many Bs (SNS Simple Notification Service and Amazon EventBridge)
    No Message ordering in PubSub
    
# Streaming VS Messaging

Message - SQS and EventBridge - 
    data gets deleted after its processed
Stream  - KINESIS STREAM and MSK (Message Service for Kafka)- 
    Enables SQL on stream, perform analytics etc.
    Data does not get deleted in stream

# SQL vs NoSQL vs Aurora vs DynamoDB
https://www.udemy.com/course/rocking-system-design/learn/lecture/26100196#overview

SQL or RDBMS - csv type
    Predefined Schema
    Holds Structured Data
    Good for joins and complex queries
    ACID - Atomicity, Consistency, Isolation and Durability
    Generally Scales vertically
    Example - Oracle, DB2, MS SQL, 
    AWS RDS and AWS Aurora

NoSQL - Json type
    Schemeless
    Hold structured and unstructured data
    Not good for complex queries
    Brewers CAP theorem - Consistency, Availability, Partition Tolerance
    Scales Horizontally and DynamoDB scales automatically
    Exmaple - MongoDB, Cassandra
    AWS DynamoDB, DocumentDB (MongoDB compatible), MCS - Amazon Managed Apache Cassandra Service
    
Aurora
    MySQL (5x) and PostgresSQL (3x) compatible - 1/10 cost (5x means 5 times faster than MySQL)
    Multi-Master support for MySql - during failure, it allows read/write with zero downtime
    Cross region Active-Passive replication - Global database - during fail, 1 minute it replicates
    Multi-AZ and Read Replicas for high availability (AZ is Availability Zone)
    Serverless Aurora scales automatically, but not very scalable
    Has integrated caches, cant be adjusted
    Enable backups, snapshot for DR

DynamoDb
    Key-value dcument database, single digit millisecond performance at any scale
    Multi- Master
    Cross region Active-Active replication - Global Tables
    Inherently replicates aross three AZs-HA and Durable (HA is High Availability)
    Inherently scalable. 10 Trillion request/day OR peak 20 million request/second
    Provides adjustable in-memory caching via DAX - Dynamo Accelarator
    inherently durable, Point In Time backups can be enabled
    
# Websockets for Server to Client Communication - Chatbot

Connection stays open in websocket
Load Balancer and API Gateway both can use it

# Caching

Purpose is to get data faster.
Its like another database. A subset of data made from db

First cache is checked then db

Time to Live (TTL) - Cache gets deleted after specific time
Cache entries can be updated with backend code

CACHE IS NOT RESTRICTED TO BACKEND ONLY

Use managed service cache, like if API gateways provides it, use it. Dont create your own
If cache service not given, then cache using
    Amazon ElastiCache
    Amazon Elasticache for Redis
    Amazon Elasticache for Memcached

Amazon API Gateway - Enable API Cache
DynamoDB - Enable Dynamo Cache (DAX accelarator) - extra cost to be considered
Amazon Simple Storage Service S3 - for Static Website - Use Amazon CloudFront (CDN service)

Amazon ElastiCache --> Amazon Elastic Kubernetes Service EKS <--> Amazon RDS
EKS sits between ELB and RDS and ElastiCache is connected to EKS

# Redis memcached and caching strategy

## Lazy Loading
User calls EC2
EC2 calls Elasticache.
Elasticache returns - Cache Hit OR Cache Miss
If Hit, the view to given to viewer
If Miss, EC2 calls Aurora (any db) gets the data, writes to ElastiCache and present view to user
    Posibility of stale data
    Miss case, we get slower
    
## Write-Through
User calls EC2
EC2 write/ update db like aurora and ALSO write/update cache like elasticache at the same time
    Data never stale
    Writing penalty in terms of time
    
# High Availability VS Fault Tolerance
https://www.udemy.com/course/rocking-system-design/learn/lecture/26100210#notes

Ask in interview what to use, high avai.. or fault tol..
AZ - Availability Zone
HA - High Availability

## High Availability
Even if some parts fail, even then system keeps working
Identify Single Point of Failure

ELB --> EC2 (even with ASG it is not high available)
We put EC2 in ASG and then each EC2 in different Availability Zones, like zone 1 zone 2

Use AWS lambda - High Availability
Kubernetes?    - No, Pod works in EC2 hence not high available
    We can put in kubernetes pod in different availability zones.
    Also use ASG Cluster AutoScaler
    
In interview, do not emphasise on COST bcoz, high availability is more important

## Fault Tolerance

Assume ELB has 100 TPS (transaction per second)
EC2 can handle 50.

So you create 2 EC2 instance, in 2 AZ

When 1 EC2 fails, then what? Problem, till the time next EC2 is spin up in ASG, we miss transactions

Hence we create 3 EC2 in 3 AZ
OR we can also create 2 EC2 in one AZ and 2 EC2 in another AZ

Fault Tolerance is expensive.
Like a backup EC2 in advance, adding tolerance to TPS

# Distributed Computing
https://www.udemy.com/course/rocking-system-design/learn/lecture/26341612#notes


# Hashing
Say we create an entry in DB with primary key as "Manasvi"
Hash is applied to "Manasvi" ---> We get a digest.
Based on the digest, the entry is saved in one of the partition of DB.

We can have 20 partitions, and digest based formulation can be done to save in one of the partition.

When user searches for "Manasvi", again hashing is done, then we get digest
The digest points to partition and help locate the entry very fast.

## Challenges

4 partitions db
entry = 1
digest = 10

Calculation is 10%4 (gives number between 0 and 3)
Based on calulcation output, we save entry to partition.

BUT if, one partition db goes down, then calculation becomes 10%3 (0 to 2). PROBLEM
Now we can not access our data the way we want....

## Consistent hashing
https://www.udemy.com/course/rocking-system-design/learn/lecture/29166364#notes

concept of HASH RING

We hash input
We also hash server names

Then we map input hash to server hash

Now if a server goes down, all input hash goes to next server

# Database Sharding also called Horizontal Partitioning

Can be done on both SQL and NoSQL dbs

A big table has 100 rows
We can create 10 shards, meaning 10 smaller db
hence now we have 10 db, 1st db has first 10 entry, 2nd db has next 10 entry etc....

HOWEVER - We use hashing to assign the specific shard

Scales Horizontaly and support distributed computing
Faster query response times
More reliable, only certain part of db fail in outage, rest is ok.

Unbalanced shards can happen
Resharding is painful
Implementing sharding logic is an overhead

# Disaster recovery (DR) - RPO vs RTO

## RPO
Recovery Point Objective - Amount of DATA allowed to be lost during disaster measurement in time
Eg we backup every 1 hr, so 1hr is RPO

Real Time RPO?

Yes, Replication at another storage at DR region

## RTO
Recovery Time Objective - Amount of TIME application can be down during disaster

## Strategy
https://www.udemy.com/course/rocking-system-design/learn/lecture/29200292#notes

Backup and Restore          - Only Storage copy
Pilot Light                 - Amazon Route 53 is used in all below
Warm Standby                - Complete Copy, but less instances on
Multi-site active/active    - Complete Copy, duplicated into two

# CAP Theorem - NoSQL follows this
https://www.udemy.com/course/rocking-system-design/learn/lecture/31586070#notes

Consistency - Get data or error
    Get the right data always, or no data
Availability - Always get data, no error BUT data recent write not guarenteed
    Get some data always, could be old data
Partition Tolerance - System continues despite messages being dropped. 
    DB always work
    
You can have only 2 at a time. CA, CP, AP


















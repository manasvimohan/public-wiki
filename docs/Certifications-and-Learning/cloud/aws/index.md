# AWS

https://www.youtube.com/watch?v=JIbIYCM48to

# Started with
Storage
Compute
Messaging

# Products brief

Robomaker - Simulate and test
IOT COre - Make robiots exchange data
Ground Station - Sattalite data
Bracket - Quantom computer

Commpute
EC2 - Elastic Compute Cloud - Virtual computer making
Load Balancing - Distribute traffic to multiople EC2
Cloud Watch - Collect data from EC2 instances 
Auto Scale - Based on cloud watch inputs, create auto EC2 for scaling
Elastic Beanstalk - PaaS, platform as a service. Abstraction over EC2, choose nodejs, python etc... scaling etc happens auto
LightSail - Static Server. Abstraction over ELastic Beanstalk. Choose django mean wordpress etc and done.
Lambda - FaaS, function as a service or serverless computing. Upload code, and event, then code runs on the event happens
Serverless REPO - Like lambda, but ready made functions, you dont write them.
Outposts - Rent aws apis to run on own servers
Snow - Little devices which run on hostile environment like antartica, so for scientist its there
Elastic Container Registry - ECR - upload and Save docker images, for use by other services
Elastic Container Service - ECS - Run docker images from ECR and create EC2 instances
Elestic Kubernetes Service - EKS - Running docker in kubernetes for more control over scaling etc 
Fargate - Runs ECS like servless functions, no need for EC2 instance. More automation.
APP Runner - If container is simple, easiest to run on App runner. Abstraction over other; handles orchestration and scaling automatically

File Storage
Simple Storage Service S3 -  Save image, video, docs etc
Glacier - If files not accessed a lot, this is cheap, but latency is high, meaning slow.
Elastic Block Storage - Very fast, data processing type data. Lot of manual configurations.
Elastic File System - Fast and managed, abstaction of all above, higher cost

Database
Simple DB - simple no sql database. One of the first products
Dynamo DB - cheap, horizontal scaling, fast reads, bad at modeling like joins and limited queries
Document DB - Exactly like mongo db, controvercial, uses mongodb backend, without telling
Elastic Search - Full text search engine type
RDS - Relational Database Service - Man options, many db etc; backups, patching scaling is managed by amazon
Aurora - Like mySQL, but 5x faster at lower cost.
    Amazon Aurora Serverless - Exactly aurora but with serverless way of tackling db
Neptune - Graph database
Elastic Cache - Managed version of Redis; ultra fast
Timestream - For time series data, like stock market with analytics too
Quantum Ledger - Create immutable cryptographically signed transations like blockchain, but not distributed like blockchain
 
Analytics
Redshift - Data warehouse. Put in data from various sources into here, to enable SQL like queries and analytics over them
Lake Formation - If unstructured data from various soruces, dump raw data here, then extract to redshift or other data warehouse.
Kinesis - For real time streaming data and visualise into any data visualisation OR use stream processing tech like Apache Spark
Map Reduce - Operate on Large mAssive data sets

::Side note --> kafka, flume, hdfs/s3, kinesis, twitter

MSK - Managed Service for Kafka. This can be used instead of Kinesis.
Glue - Serverless ETL tool, extract transform load. Can connect to other amazon services
    Glue Studio - Write jobs here, and everything happens, connect ec2, redshift, cloudwatch, lambda etc
Data Exchange - Subscribe to 3rd party data providers and services to purchase or subscribe for high quality data.

Machine Learning
Sagemaker - tensorflow and pytorch based ML model making. Has managed jupyter notebook too.
Rekognition - Pre made image recognition classification. Image analysis
Lex - Conversational ML model, for chat etc, used by alexa too
Deep Racer - A physical racecar, which can drive as per our machine learning model and do stuff

Essentials
IAM - Security Admin to control right on your aws account
Cognito - Simpe User login and session management tool. Many authentication methods
Simple Notification Service - SNS - Push notifications to users, maybe with cognito sessions above
Simple Email Service - SES - Send emails to users

Provisioning
Cloud Formation - Yaml/ Json based cloud formation of all amazon services with a BLOODY FILE!! Like dockerfile and compose combo; or pods or maybe like vagrant... for all aws services!
Amplify - SDKs for connecting and interacting with cloud formation or awas services using frontends, javascript, apple, android, web 

Budgets - Cost explorer for AWS


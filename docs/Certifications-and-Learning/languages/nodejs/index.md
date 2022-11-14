# NodeJs

# General Concepts
https://www.youtube.com/watch?v=Y8tlFLIjyMU

NodeJs asyncronous
Event Loop

NodeJs multi-threading - Fork to spawn mulitple process
v8 engine by google 
    open source
    no interprester, convert to machine code
    use just in time compiler hence run faster
Event Loop
    perform non blocking IO operations
    canals and they are multithreaded??
    has different phases

Callback and queue

Callbacks
    Functions register in event group, to be called later
    
Callback Hell - https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/
    Implement async processes one after another. Difficult to read
    Modularise into async await independent functions and use promises
    Use javascript generators with promises
    
Express
Kua
NestJS - https://www.youtube.com/watch?v=0M8AYU_hPas
    Use TypeScript. 
    Uses Fastify or Express.
    Rest and GraphQL support
    Model View Controller Pattern - Like laravel or Ruby on Rails
    Caching, Logging, Rate-limiting,cors, websockets
    CLI uses JEST for testing
    
Express is low level, less opiniated, more control, quick small code
NestJS is higher level, more opiniated like dependency injection, large scalable code

Dependency Injection - https://en.wikipedia.org/wiki/Dependency_injection
    Makes code declarative, rather than imperative
    Declarative programming is a paradigm describing WHAT the program does, without explicitly specifying its control flow. Imperative programming is a paradigm describing HOW the program should do something by explicitly specifying each instruction (or statement) step by step, which mutate the program's state
   
Streaming
    Managing Data in chunks for less load on memory

Event Emitters - Help write decoupled code
Event Emiiter VS Pubsub
    Pub Sub has topic.
    Use case difference - PubSub to communicarte across services over HTTPs
    Event Emitter limited to local service

Database - Postgress (ORM) and MongoDB (O Data M) (ODM)
    Postgress - relational - SQL
    MongoB - Non relational - NoSQL - Key value pairs
        More flexible than postgress

WebSockets - For local projects
    Live communications - Dual, push type
    VS restful - request respose cycle

GraphQL
    Endpoints need not be set in advance, unlike SQL
    Request only what needed
    
How stay updated
    Medium
    Documentation official website
    Youtube trends
    Courses too

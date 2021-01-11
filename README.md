# Example Productive API Rest

-   Local enviroment: npm run local or npm run local-win (for windows)
-   Development enviroment: npm run dev
-   Production enviroment: npm start

Depending on the command is how the configuration parameters will be taken in config.js

Postman: https://www.getpostman.com/collections/1f3446cb2a28ca628061

Features:

-   Docker+Docker-compose
-   CircleCI
-   MongoDB+Mongoose
-   Redis
-   S3
-   Loggly
-   utilities + dynamic configuration
-   Fully working example of API Rest

Query params:

-   ?firstname=example&lastname=example&etc...

Select params:

-   select=firstname,lastname name (returns only firstname and lastname)
-   select=-firstname (returns all except firstname)

Pagination params:

-   limit=10 (limits 10 results)
-   skip=10 (skips 10 results)

All others parameters are used by the mongodb query.

# Dal-Recipe

---

To Do List Order - Backend

1. Init Structure
   - Create local dir
   - Create github & clone
   - npm init -y & dependencies
   - Add scripts in package json
     "test": "echo \"Error: no test specified\" && exit 1",
     "seed": "nodemon ./db/seed/js",
     "start": "node index.js",
     "start:dev": "nodemon index.js",
     "start-seed": "node db/seed.js && node index.js"
   - Create db on Postico
   - Create dirs & root index.js
     - api
       -index.js
       - utilities.js
     - db
       - index.js
       - seed.js
     - index.js
2. Root index.js

- import requires
- import project dirs
- Middleware
- Route Handelers
- Port
- Export

3. Begin in DB dir
   - set up Index.js
   - begin in Seed.js
     - Begin template for seed.js
     - drop tables
     - create tables
     - begin createInitial functions
     - RebuildDB
     - TestDB
   - Create files as needed
   - export them
   - import them into the seed
4. Begin API dir
   - begin index.js
   - create mini routers & export
   - import all into index.js
   - test routes

# ** API Covid - Nuvem Mestra **

##### **Service Requirements**

- Node.JS >= 10
OR
- Docker >= 19

##### **Command to execute the service**

- command to start the server: `docker-compose up --build`
- command responsible for running the tests: `docker-compose exec app npm run test`

OR 

- command to download service dependencies: `npm i`
- command to create the .env file: `cp .env.example .env`
- command to start the server: `npm run start:dev`
- command responsible for running the tests: `npm run test`

##### **Example request**

- `url -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000?start=2020-04-18&end=2020-04-20&state=RN` 
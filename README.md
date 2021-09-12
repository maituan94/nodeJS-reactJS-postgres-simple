# nodeJS-reactJS-postgres-simple
Simple NodeJS + ReactJS &amp;&amp; react-hook-form + Postgresql application

## Initial API Server

### `cd server`
### `yarn or npm install`
### `create postgres db`
- create postgres db and connect from `server/config/config.json`
- create table name `store-dev`
### `npx sequelize-cli db:migrate`
### `yarn start:dev or npm run start:dev`
Api server is started at `localhost:8081`

## Initial store-app application

### `cd client`
### `yarn or npm install`
### `yarn start or npm start`
Api server is started at `localhost:3000`

## To test store-app application
### `yarn test or npm run test`
# Server Side For Twitter-Clone-App

1. install all project dependencies with `npm install`

2. Set up Database

   1. Create user
      - `CREATE USER galal WITH ENCRYPTED PASSWORD 'password';`
   2. Create Database we need two databases for dev and test
      - `CREATE DATABASE twitter;`
      - `CREATE DATABASE twitter_app_test;`
   3. To give database to me
      - `ALTER DATABASE twitter OWNER TO galal;`
      - `ALTER DATABASE twitter_app_test OWNER TO galal;`
   4. Create Tables
      - `npm run migrations`

3. My Enviroment Variables

```
    PORT=5000
    ENV=dev
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    POSTGRES_DB=twitter
    POSTGRES_DB_TEST= twitter_app_test
    POSTGRES_USER=galal
    POSTGRES_PASSWORD=password
    BCRYPT_PASSWORD=this-is-strongest-password
    SALT_ROUNDS=10
```

4. server work on port: `5000` , database work on port `5432`

5. to start server

   - `node www/server`
   - `npm run watch`

6. Build With

- TypeScript
- Node.js
- express

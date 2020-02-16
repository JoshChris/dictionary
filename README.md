# Dictionary
To run this project:
1. Clone this project to your local machine. 
    - Requirements: NPM and NodeJS must be installed.
2. Add your JWT to the `.env` file.
3. Open a terminal and `cd` to the project directory 
4. Run `yarn install` at the project root
5. After `yarn install` has finished, run `yarn start`

That's it - the project is now running at `http://localhost:3000`

You can run a status check with a `GET` request to `http://localhost:3000/api//health-check`. Should return a 200 response.

# Endpoints

### Create a new dictionary:
Send a `POST` request to `http://localhost:3000/api/v1/dictionary/new`

---
   
### Delete a dictionary:
Send a `DELETE` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/delete`

---
   
### Get all keys in a dictionary:
Send a `GET` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/keys`

---
   
### Get a key/value pair:
Send a `GET` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/key/:key`

---
   
### Create a key/value pair:
Send a `POST` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/key/:key` with the following body:
```
{"value": "Josh"}
```

---
   
### Update a key/value pair:
Send a `PATCH` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/key/:key` with the following body:
```
{"value": "John"}
```

---
   
### Delete a key/value pair: (currently not supported by the service)

Send a `DELETE` request to `http://localhost:3000/api/v1/dictionary/:dictionaryId/key/:key`

# Tests
In the root directory, run the command `yarn test`
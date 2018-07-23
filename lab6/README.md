# Your first API

We will use ExpressJS the most commonly utilized API framework to build REST based APIs.

Donwload POSTMAN: https://www.getpostman.com/apps

## 1. ```npm install```
## 2. Open index.js
## 3. Add GET endpoint http://localhost:3000/me which returns ```Your Name``` with STATUS 200
## 4. Add GET endpoint http://localhost:3000/users which returns all users as JSON with STATUS 200.
Use ```userService.getUsers(cb)``` to get array of users. (require user service module into your index.js)
## 5. Open userService.js and add yourself to the users array
```
{
    "name": "Your Name",
    "age": 18,
    "email": "Your Email",
    "favoriteSport": "Your favorite sport"
}
```

## 6. Add GET endpoint ```http://localhost:3000/users/:id```.
STATUS CODE: 200
content type should be JSON
You can use ```userService.getUserByID(id, cb)```

## 7. Add POST endpoint to add user ```http://localhost:3000/users```
Accepts JSON Body in request
```
{
    "name": "User Name",
    "age": 18,
    "email": "User Email",
    "favoriteSport": "User favorite sport"
}
```

Should return STATUS 200 with user as JSON with the new ```id``` paramater
```
{
    "name": "User Name",
    "age": 18,
    "email": "User Email",
    "favoriteSport": "User favorite sport",
    "id": 2
}
```
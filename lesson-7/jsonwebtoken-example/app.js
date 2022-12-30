const jwt = require("jsonwebtoken")
require("dotenv").config()

const {SECRET_KEY} = process.env;

const payload = {
    id: "63addadc7e9945ddf7b642d2"
}

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

try {
    const invalidToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWRkYWRjN2U5OTQ1ZGRmN2I2NDJkMiIsImlhdCI6MTY3MjMzODgyMiwiZXhwIjoxNjcyNDIxNjIyfQ.fQgEK53YHI4UqxCunDxbPiieE1gSNWhFsNmdiNQnROa"
    const result = jwt.verify(token, SECRET_KEY);
    // console.log(result)
    const result2 = jwt.verify(invalidToken, SECRET_KEY)
}
catch(error) {
    console.log(error.message);
}
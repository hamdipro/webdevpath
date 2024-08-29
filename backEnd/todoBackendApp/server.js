const express = require('express')
var cors = require('cors');
var bodyParser = require('body-parser')
const server = express()

// parse application/json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(cors());

class Todo {

    constructor(title, user) {
        this.title = title;
        this.user = user;
        this.done = false;
        this.date = new Date();
    }
}

const todos = [
    new Todo('Go To Gym', 'Hamdi'),
    new Todo('Read book', 'Hamdi'),
    new Todo('Prepare Meal', 'Hamdi'),
]

// récuperer la liste des todos
server.get('/todos', function (req, res) {
  return res.status(200).json(todos);
});

// save todo object
server.post('/todos', function (req, res) {
    todos.push(new Todo(req.body.title, req.body.user));
    return res.status(201).json(todos);
});

// save todo object
server.put('/todos/:id', function (req, res) {
    // update element and return list
    return res.status(201).json(todos);
});

// save todo object
server.delete('/todos/:id', function (req, res) {
    // delete element and return list
    return res.status(201).json(todos);
});



server.listen(3000)

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
app.use(express.json);
var pgp = require("pg-promise")(/* options */);
const db = pgp("postgres://postgres:123833@localhost:5432/postgres");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  db.any('SELECT * from users')
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
  
});

app.post("/users", (request, response) => {
  const { mail, password } = request.body;
  db.one(
    "SELECT * FROM users where mail = $1 AND password = $2",
    [mail, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});
app.post("/users", (request, response) => {
  const { name, mail, password } = request.body;

  db.any(
    "INSERT INTO users (name, mail, password) VALUES ($1, $2, $3)",
    [name, mail, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

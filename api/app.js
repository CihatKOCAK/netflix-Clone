const app = require("express")();
const db = require("./db.json");
var express = require("express");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  console.log("Request...");
  res.status(200).send(db);
});
app.get("/users/:email", (req, res) => {
  const user = db.find((u) => u.email == req.params.email);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({
      message: "User is not found..",
    });
  }
});

app.post("/users/:email", (req, res) => {
  const user = db.find((u) => u.email == req.params.email);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({
      message: "User is not found..",
    });
  }
});

app.post("/register", (req, res) => {
  const willSaveData = {
    id: new Date().getTime(),
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };
  console.log(req);
  db.push(willSaveData);
  console.log(willSaveData, "from DB");
   res.send(willSaveData);
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is listenning");
});

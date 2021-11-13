const app = require("express")();
const db = require("./db.json");
var express = require("express");
var cors = require('cors')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next)=>{
  app.options('*', cors())
  next();
 }
);

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
  res.header("Access-Control-Allow-Origin", "*");
  const user = db.find((u) => u.email == req.params.email);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({
      message: "User is not found..",
    });
  }
});

app.post("/register",cors(), (req, res) => {
  const willSaveData = {
    id: new Date().getTime(),
    email: req.body.email,
    name: req.body.name,
    password: req.body.password, 
  };
  db.push(willSaveData);
  console.log(willSaveData, "from DB");
  res.status(200).send(willSaveData);
});

app.listen(process.env.PORT || 3002, () => {
  console.log("Server is listenning");
});

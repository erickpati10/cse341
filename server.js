const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");

const port = process.env.PORT || 8080;
const server = express();

server
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    );
    res.setHeader("COntent-Type", "application/json");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, DELETE, OPTIONS");
    next();
  })
  .use("/", require("./routes"));

mongodb.initDb((err, db) => {
  if (err) {
    console.error(err);
  } else {
    server.listen(port, () => {
      console.log(`Connected to DB and listening on ${port}`);
    });
  }
});

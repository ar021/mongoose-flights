const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movies", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MpngoDB at ${db.host}:${db.port}`);
});

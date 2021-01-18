const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect DB
(async function (dbUrl) {
  try {
    const opts = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };
    await mongoose.connect(dbUrl, opts);
    console.log('connected database');
  } catch (err) {
    console.error(err.message);
  }
})('mongodb+srv://kimochi:mlemmlem@caro.8sbir.mongodb.net/mini-bus');

const app = express();

app.use(require("cors")());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/admins", require("./routes/admins"));
app.use("/users", require("./routes/users"));
app.use("/vehicles", require("./routes/vehicles"));
app.use("/trips", require("./routes/trips"));
app.use("/tickets", require("./routes/tickets"));
app.use("/bills", require("./routes/bills"));

app.listen(8000, () => console.log('server running on port 8000'));
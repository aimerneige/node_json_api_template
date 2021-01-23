// require
const express = require("express");

// user require
const indexRouter = require("./routes/index");

// express app
var app = express();

// set port
app.set("port", process.env.PORT || 4000);

// json parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.type("application/json");
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

// check if run app.js directly
if (require.main === module) {
  app.listen(app.get("port"), function () {
    console.log(
      "Server start in " +
        app.get("env") +
        " mode on http://localhost:" +
        app.get("port") +
        "; press Ctrl + C to terminated."
    );
  });
} else {
  module.exports = app;
}

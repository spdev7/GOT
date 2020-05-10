var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var count_list_Router = require("./routes/count.list.route");
var searchRouter = require("./routes/search");

var app = express();
var mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://dbuser:dbpassword@cluster0-wkzp5.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Database connection established");
});


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/search", (req, res) => {
  res.sendFile(path.join(__dirname + "/../build/index.html"));
  });

// app.use("/",indexRouter);
app.use("/",searchRouter);
app.use("/",count_list_Router);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

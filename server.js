const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
const port = 8080;

const admitRouter = require("./views/admitRouter");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(admitRouter);

app.use("*", (req, res) => {
  res.status(400).json({ message: "no router is present" });
});

mongoose
  .connect(
    "mongodb+srv://shiek421:16pA5A0421@cluster0.vqezsdq.mongodb.net/Data_base1?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch(() => {
    console.log("error in data");
  });

app.listen(port, () => {
  console.log(`server  stars ${port}`);
});

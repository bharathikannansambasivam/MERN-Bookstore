const express = require("express");
const { default: mongoose } = require("mongoose");
const router = require("./routes/route");
const cors = require("cors");
require("dotenv").config();
const mongo_Url = process.env.MONGO_URL;
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.get("/", (req, res) => {
  res.send("Hellow");
});

mongoose
  .connect(mongo_Url)

  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is running port ${port}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });

const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { UserRouter } = require("./routes");
require("dotenv").config();



const app = express();
app.use(express.json());

app.use(cors());

app.use("/users", UserRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running on Port ${process.env.PORT}`);
});

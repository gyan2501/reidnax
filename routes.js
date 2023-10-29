const express = require("express");
const axios = require("axios");
const userRouter = express.Router();



userRouter.get("/", async (req, res) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/?limit=10`);
    // Extract the user data from the response
    const users = response.data.users;
    // Send the users data to the client
    res.status(200).send({ message: "data", users });
  } catch (error) {
    // Handle any errors that occur during the request
    console.error("Error fetching random users:", error);
    res
      .status(500)
      .send({ error: "An error occurred while fetching random users" });
  }
});

module.exports = {
  userRouter,
};

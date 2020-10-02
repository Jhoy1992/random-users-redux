const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Home Page");
});

app.get("/users", async (req, res) => {
  const randomUserURL = "https://randomuser.me/api";

  const { data } = await axios.default.get(randomUserURL, {
    params: {
      page: 1,
      results: 10,
    },
  });

  res.json(data.results);
});

app.listen(3000, () => {
  console.log("Server listen on port 3000.");
});

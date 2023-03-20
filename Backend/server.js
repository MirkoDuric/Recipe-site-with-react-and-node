require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./pool");
const PORT = 8000;

app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/:dishType", (req, res) => {
  let dishType = req.params.dishType;
  if (dishType === "AllRecipes") {
    pool
      .query("SELECT id, name, description, image_url FROM dishes;")
      .then(({ rows }) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  if (dishType === "PeruvianDishes") {
    pool
      .query(
        "SELECT id,name,description,image_url FROM dishes WHERE id IN ($1, $2, $3);",
        [1, 2, 3]
      )
      .then(({ rows }) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  if (dishType === "ZAFDishes") {
    pool
      .query(
        "SELECT id,name,description,image_url FROM dishes WHERE id IN ($1, $2, $3);",
        [4, 5, 6]
      )
      .then(({ rows }) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
  if (dishType === "SerbianDishes") {
    pool
      .query(
        "SELECT id,name,description,image_url FROM dishes WHERE id IN ($1, $2, $3);",
        [7, 8, 9]
      )
      .then(({ rows }) => res.json(rows))
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
});
app.get("/:dishId/data", (req, res) => {
  let dishId = req.params.dishId;
  pool
    .query("SELECT * FROM dishes WHERE id=$1;", [dishId])
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.log(err));
});
app.get("/:dishId/ingredients", (req, res) => {
  let dishId = req.params.dishId;
  pool
    .query("SELECT * FROM ingredients WHERE dish_id=$1;", [dishId])
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.log(err));
});
app.get("/:dishId/preparation", (req, res) => {
  let dishId = req.params.dishId;
  pool
    .query("SELECT * FROM preparation_steps WHERE dish_id=$1;", [dishId])
    .then(({ rows }) => res.json(rows))
    .catch((err) => console.log(err));
});

app.listen(PORT, () => {
  console.log(`Port listens on port ${PORT}`);
});

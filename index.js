const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

const course = require("./data/course.json");
const instructor = require("./data/instructor");

app.get("./", (req, res) => {
  res.send("New test");
});

app.get("/course", (req, res) => {
  res.send(course);
});
app.get("/instructor", (req, res) => {
  res.send(instructor);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

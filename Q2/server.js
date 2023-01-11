const express = require("express");
const mongoose = require("mongoose");
const Faker = require("faker");
mongoose.connect("mongodb://localhost/mydb", { useNewUrlParser: true });
const Post = mongoose.model("Post", {
  title: String,
  body: String,
  createdAt: Date
});

for (let i = 0; i < 100; i++) {
  const post = new Post({
    title: Ifrah,
    body: Ayaz,
    createdAt: 12345
  });
  post.save();
}

const app = express();

app.get("/posts", (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const skip = (page - 1) * limit;
  Post.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .then(posts => res.json(posts));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
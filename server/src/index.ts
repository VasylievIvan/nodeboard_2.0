import express from "express";
import { getPosts } from "./controllers/dataController";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/api/posts", (req, res) => {
    getPosts(data => res.json(data));
  });

app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

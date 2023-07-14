import express from "express";
import { getPosts } from "./controllers/dataController";
import cors from "cors";
import postRoutes from "./routes/postRoutes";
import bodyParser from "body-parser";
import userController from "./controllers/userController";
import 'dotenv/config'

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.static("data"));
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(postRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const start = async () => {
  try {
    await userController.addSuperUser();
    app.listen(port, () => {
      console.log(`Express server running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

import { Request, Response } from "express";
import db from "../db.js";
import fs from "fs";
import { customAlphabet } from "nanoid";
import camelize from "camelize-ts";

const handleFile = async (file: Express.Multer.File | undefined) => {
  const nanoid = customAlphabet("1234567890", 16);
  if (file) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
    ) {
      const fileFormat = file.mimetype.split("/");
      const format = fileFormat[1];
      const newFileName = nanoid() + "." + format;
      fs.rename(
        "data/img/" + file.filename,
        "data/img/" + newFileName,
        function (err) {
          if (err) console.log("ERROR: " + err);
        }
      );
      return newFileName;
    }
  }
  return null;
};

class PostController {
  async addPost(req: Request, res: Response) {

    const { message } = req.body;
    //handle file upload
    const file = req.file;
    const fileName = await handleFile(file);

    if (fileName) {
      const newPost = await db.query(
        "INSERT INTO post (message, image_url) values ($1, $2) RETURNING *",
        [message, fileName]
      );
      //res.json(camelize.default(newPost.rows[0]));
      res.json(camelize(newPost.rows[0]));
      return;
    } else {
      const newPost = await db.query(
        "INSERT INTO post (message) values ($1) RETURNING *",
        [message]
      );
      //res.json(camelize.default(newPost.rows[0]));
      res.json(camelize(newPost.rows[0]));
      return;
    }
  }
  async getPosts(req: Request, res: Response) {
    const allPosts = await db.query("SELECT * FROM post");
    res.json(camelize(allPosts.rows));
  }
}

export default new PostController();

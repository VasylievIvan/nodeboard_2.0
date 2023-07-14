import { Router } from "express";
import postController from "../controllers/postController.js";
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'data/img' });

router.get("/api/posts", postController.getPosts);
router.post("/api/posts", upload.single('fileInput'), postController.addPost);

export default router;

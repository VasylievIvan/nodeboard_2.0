import { Router } from "express";
import userController from "../controllers/userController.js";
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'data/img' });

router.get("/api/login", userController.login);

export default router;

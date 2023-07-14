import { Request, Response } from "express";
import db from "../db.js";
import { hashSync } from "bcrypt-ts";

class UserController {
  async addSuperUser() {
    const userName = process.env.SUPERUSER_NAME || "admin";
    const password = process.env.SUPERUSER_PASSWORD || "admin";
    const hashedPassword = hashSync(password, 10);
    //check if user exists
    const user = await db.query("SELECT * FROM user_account WHERE login = $1", [
      userName,
    ]);
    if (user.rows.length > 0) {
      return;
    }
    //insert into user_account table and set role 'superuser' from role table
    const newUser = await db.query(
      "INSERT INTO user_account (login, password, role_id) values ($1, $2, $3) RETURNING *",
      [userName, hashedPassword, 1]
    );
    return newUser.rows[0];
  }
  async login(req: Request, res: Response) {
    const { userName, password } = req.body;
    const hashedPassword = hashSync(password, 10);
    //check if user exists
    const user = await db.query("SELECT * FROM user_account WHERE login = $1", [
      userName,
    ]);
    if (user.rows.length === 0) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    //check if password is correct
    const passwordMatch = await db.query(
      "SELECT * FROM user_account WHERE login = $1 AND password = $2",
      [userName, hashedPassword]
    );
    if (passwordMatch.rows.length === 0) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    //return user
    res.json(user.rows[0]);
  }
}

export default new UserController();

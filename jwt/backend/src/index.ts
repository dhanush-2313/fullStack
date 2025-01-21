import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { user } from "./models/sampleSchema";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import session from "express-session"
import { verifySession, createSession } from "./middleware/verifySession";

declare module "express-session" {
  interface SessionData {
    user: { [key: string]: any };
  }
}

const app = express();

app.use(cors())
app.use(express.json());

app.use(session({
    secret: 'bruhbruhbruhbruh',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
  }));

mongoose.connect("mongodb://localhost:27017/jwt")
    .then(() => { console.log("DB connected") })
    .catch((err: any) => { console.log("Some error"), err })

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const checkUser = await user.findOne({ username });
        if (checkUser) {
            res.status(400).json({ message: "User already exists" })
            return;
        }
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await user.create({
            username,
            password:hashedPassword
        });
        if (!result) {
            res.status(400).json({ message: "Couldnt create user" })
            return;
        }
        res.status(200).json({ message: "User created successfully"});
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
})

app.post("/login", async (req: Request, res: Response) => {
    try {
        const {username,password}=req.body;
        const existingUser = await user.findOne({username});
        if(!existingUser){
            res.status(400).json({message:"User does not exist"});
            return;
        }
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if(!isPasswordCorrect){
            res.status(400).json({message:"Invalid credentials"});
            return;
        }
        createSession(req, existingUser);
        res.status(200).json({ message: "Logged in successfully" });
        return;
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
        return;
    }
})

app.post("/verify", (req: Request, res: Response) => {
    if (req.session.user) {
      res.status(200).json({ message: "Session verified" });
    } else {
      res.status(400).json({ message: "No active session" });
    }
  });

app.get("/protected-route", verifySession, (req: Request, res: Response) => {
    res.status(200).json({ message: "You have accessed a protected route" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

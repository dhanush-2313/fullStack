import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { user } from "./models/sampleSchema";

const app = express();

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/clgtest1")
    .then(() => { console.log("DB connected") })
    .catch((err: any) => { console.log("Some error"), err })

app.get("/fetch", async (req, res) => {
    const username = req.query.name;
    try {
        const userr = await user.findOne({ username });
        if (!userr) {
            res.status(401).json({ message: "No user found" })
            return;
        }
        res.status(200).json({ userr });
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        return;
    }
})

app.get("/fetchAll", async (req, res) => {
    try {
        const result = await user.find({});
        if (!result) {
            res.status(401).json({ message: "No users found" })
            return;
        }
        res.status(200).json({ result });
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        return;
    }
})


app.post("/signup", async (req: Request, res: Response) => {
    try {
        const { username, age, email } = req.body;
        const checkUser = await user.findOne({ username });
        if (checkUser) {
            res.status(400).json({ message: "User already exists" })
            return;
        }
        const result = await user.create({
            username,
            age,
            email
        });
        if (!result) {
            res.status(400).json({ message: "Couldnt create user" })
        }
        res.status(200).json({ message: "User created successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
})


app.delete("/user", async (req: Request, res: Response) => {
    const { username } = req.body;
    try {
        const result = await user.findOneAndDelete({ username });
        if (!result) {
            res.status(400).json({ message: "Couldnt delete user" })
            return;
        }
        res.status(200).json({ message: "User deleted successfully" })
        return;
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
        return;
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})

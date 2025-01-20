import express from "express";
import mongoose from "mongoose";
import { user } from "./models/sampleSchema";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/clgtest1")
    .then(() => { console.log("DB connected") })
    .catch((err: any) => { console.log("Some error"), err })

app.post("/user", async (req, res) => {
    try {
        const { username, age, email } = req.body;
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


app.listen(3000, () => {
    console.log("Server running on port 3000");
})
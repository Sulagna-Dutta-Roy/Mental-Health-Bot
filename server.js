import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const PORT = 5000;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
    console.log("Incoming request:", req.body);

    if (!req.body.message) {
        console.error("❌ No message received!");
        return res.status(400).json({ error: "Message is required" });
    }

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Correct model name
        const result = await model.generateContent({ contents: [{ parts: [{ text: req.body.message }] }] });
        const reply = result.response.candidates[0].content.parts[0].text;

        res.json({ reply });
    } catch (error) {
        console.error("❌ Error processing request:", error);
        res.status(500).json({ error: "Error processing request" });
    }
});

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
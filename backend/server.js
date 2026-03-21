import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import { clerkWebhook } from "./controllers/webhook.js";

const PORT = process.env.PORT || 4000;

// INITIALIZE EXPRESS
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send("Hello from backend...");
});

// ROUTES
app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running fine" });
});

app.post("/clerk", express.raw({ type: "application/json" }), clerkWebhook);

// CONNECT DB
try {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
} catch (err) {
  console.error("Failed to start the server:", err.message);
}

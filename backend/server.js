import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import { clerkWebhook } from "./controllers/webhook.js";
import educatorRouter from "./routes/educatorRoutes.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";

const PORT = process.env.PORT || 4000;

// INITIALIZE EXPRESS
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(clerkMiddleware({
  secretKey: process.env.CLERK_SECRET_KEY
}));

// ROUTES
app.post("/clerk", express.raw({ type: "*/*" }), clerkWebhook);
app.use(express.json());

app.use("/api/educator", educatorRouter);

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send("Hello from backend...");
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Server is running fine" });
});

// CONNECT DB
try {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
} catch (err) {
  console.error("Failed to start the server:", err.message);
}

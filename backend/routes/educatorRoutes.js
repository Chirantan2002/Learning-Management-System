import express from "express";
import { requireAuth } from "@clerk/express";
import { updateRoleOfEducator } from "../controllers/educatorController.js";

const educatorRouter = express.Router();

// ADD EDUCATOR ROLE
educatorRouter.get("/update-role", requireAuth(), updateRoleOfEducator);

export default educatorRouter;

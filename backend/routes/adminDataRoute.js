import express from "express";
import { getAdminData } from "../controllers/adminDataController.js";

const router = express.Router();

router.get("/", getAdminData);

export default router;

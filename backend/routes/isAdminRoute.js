import express from "express";
import { checkIsAdmin } from "../controllers/isAdminController.js";

const router = express.Router();

router.get("/:username", checkIsAdmin);

export default router;

import express from "express";
const router = express.Router();
import { verify, auth } from "../services/auth";
import * as adminController from "../controllers/admin"
router.get("/dashboard", verify, auth(["admin"]), adminController.getDashboard);
module.exports = router;
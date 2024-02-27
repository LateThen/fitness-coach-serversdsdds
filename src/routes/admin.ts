import express from "express";
const router = express.Router();
import { verify } from "../services/auth";
import * as adminController from "../controllers/admin"
router.get("/dashboard", verify, adminController.getDashboard);




module.exports = router;
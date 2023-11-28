import express from "express";
import {
  createTenan,
  getTenan,
  getAllTenan,
  updateTenan,
  deleteTenan,
} from "../controllers/TenanController.js";

const router = express.Router();

// Routes for Tenan
router.post("/tenan", createTenan);
router.get("/tenan", getAllTenan);
router.get("/tenan/:KodeTenan", getTenan);
router.patch("/tenan/:KodeTenan", updateTenan);
router.delete("/tenan/:KodeTenan", deleteTenan);

export default router;

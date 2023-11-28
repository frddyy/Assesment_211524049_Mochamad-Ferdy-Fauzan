import express from "express";
import {
  createKasir,
  getAllKasir,
  getKasir,
  updateKasir,
  deleteKasir,
} from "../controllers/KasirController.js";

const router = express.Router();

// Routes for Kasir
router.post("/kasir", createKasir);
router.get("/kasir", getAllKasir);
router.get("/kasir/:KodeKasir", getKasir);
router.patch("/kasir/:KodeKasir", updateKasir);
router.delete("/kasir/:KodeKasir", deleteKasir);

export default router;

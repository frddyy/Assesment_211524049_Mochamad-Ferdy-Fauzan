import express from "express";
import {
  createBarang,
  getBarang,
  getAllBarang,
  updateBarang,
  deleteBarang,
} from "../controllers/BarangController.js";

const router = express.Router();

// Routes for Barang
router.post("/barang", createBarang);
router.get("/barang", getAllBarang);
router.get("/barang/:KodeBarang", getBarang);
router.patch("/barang/:KodeBarang", updateBarang);
router.delete("/barang/:KodeBarang", deleteBarang);

export default router;

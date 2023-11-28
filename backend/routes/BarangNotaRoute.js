  import express from "express";
  import {
    createBarangNota,
    getAllBarangNota,
    getBarangNota,
    updateBarangNota,
    deleteBarangNota,
  } from "../controllers/BarangNotaController.js";

  const router = express.Router();

  // Routes for BarangNota
  router.post("/barangNota", createBarangNota);
  router.get("/barangNota", getAllBarangNota);
  router.get("/barangNota/:KodeNota/:KodeBarang", getBarangNota);
  router.put("/barangNota/:KodeNota/:KodeBarang", updateBarangNota);
  router.delete("/barangNota/:KodeNota/:KodeBarang", deleteBarangNota);

  export default router;

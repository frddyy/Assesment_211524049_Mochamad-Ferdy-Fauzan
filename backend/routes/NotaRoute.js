import express from "express";
import {
  createNota,
  getAllNota,
  getNota,
  updateNota,
  deleteNota,
} from "../controllers/NotaController.js";

const router = express.Router();

// Routes for Nota
router.post("/nota", createNota);
router.get("/nota", getAllNota);
router.get("/nota/:KodeNota", getNota);
router.patch("/nota/:KodeNota", updateNota);
router.delete("/nota/:KodeNota", deleteNota);

export default router;

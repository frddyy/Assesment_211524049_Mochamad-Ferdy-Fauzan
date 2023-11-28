// Controller untuk Model Nota
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Nota
export const createNota = async (req, res) => {
  try {
    const response = await prisma.nota.create({
      data: {
        KodeNota: req.body.KodeNota,
        KodeTenan: req.body.KodeTenan,
        KodeKasir: req.body.KodeKasir,
        TglNota: req.body.TglNota,
        JamNota: req.body.JamNota,
        JumlahBelanja: req.body.JumlahBelanja,
        Diskon: req.body.Diskon,
        Total: req.body.Total,
      },
    });
    res.status(201).json({ msg: "Nota created successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All Nota
export const getAllNota = async (req, res) => {
    try {
      const nota = await prisma.nota.findMany(); // Mengambil semua tenan
      res.status(200).json(nota); // Mengirim semua tenan sebagai respons
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

// Get Nota
export const getNota = async (req, res) => {
  try {
    const nota = await prisma.nota.findUnique({
      where: { KodeNota: req.params.KodeNota },
    });
    if (!nota) {
      res.status(404).json({ msg: "Nota not found" });
    } else {
      res.status(200).json(nota);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Nota
export const updateNota = async (req, res) => {
  try {
    const { KodeNota } = req.params;
    const {
      KodeTenan,
      KodeKasir,
      TglNota,
      JamNota,
      JumlahBelanja,
      Diskon,
      Total,
    } = req.body;
    const nota = await prisma.nota.update({
      where: { KodeNota },
      data: {
        KodeTenan,
        KodeKasir,
        TglNota,
        JamNota,
        JumlahBelanja,
        Diskon,
        Total,
      },
    });
    res.status(200).json({ msg: "Nota updated successfully", data: nota });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Nota
export const deleteNota = async (req, res) => {
  try {
    const { KodeNota } = req.params;
    await prisma.nota.delete({ where: { KodeNota } });
    res.status(200).json({ msg: "Nota deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

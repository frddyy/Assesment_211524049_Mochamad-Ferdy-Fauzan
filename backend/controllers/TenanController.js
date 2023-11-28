// Controller untuk Model Tenan
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Tenan
export const createTenan = async (req, res) => {
  try {
    const response = await prisma.tenan.create({
      data: {
        KodeTenan: req.body.KodeTenan,
        NamaTenan: req.body.NamaTenan,
        HP: req.body.HP,
      },
    });
    res.status(201).json({ msg: "Tenan created successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All Tenan
export const getAllTenan = async (req, res) => {
    try {
      const tenan = await prisma.tenan.findMany(); // Mengambil semua tenan
      res.status(200).json(tenan); // Mengirim semua tenan sebagai respons
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

// Get Tenan
export const getTenan = async (req, res) => {
  try {
    const tenan = await prisma.tenan.findUnique({
      where: { KodeTenan: req.params.KodeTenan },
    });
    if (!tenan) {
      res.status(404).json({ msg: "Tenan not found" });
    } else {
      res.status(200).json(tenan);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Tenan
export const updateTenan = async (req, res) => {
  try {
    const { KodeTenan } = req.params;
    const { NamaTenan, HP } = req.body;
    const tenan = await prisma.tenan.update({
      where: { KodeTenan },
      data: { NamaTenan, HP },
    });
    res.status(200).json({ msg: "Tenan updated successfully", data: tenan });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Tenan
export const deleteTenan = async (req, res) => {
  try {
    const { KodeTenan } = req.params;
    await prisma.tenan.delete({ where: { KodeTenan } });
    res.status(200).json({ msg: "Tenan deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

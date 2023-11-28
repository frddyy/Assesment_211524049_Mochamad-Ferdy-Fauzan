import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Kasir
export const createKasir = async (req, res) => {
  try {
    const response = await prisma.kasir.create({
      data: {
        KodeKasir: req.body.KodeKasir,
        Nama: req.body.Nama,
        HP: req.body.HP,
      },
    });
    res.status(201).json({ msg: "Kasir created successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All Kasir
export const getAllKasir = async (req, res) => {
    try {
      const kasir = await prisma.kasir.findMany(); // Mengambil semua kasir
      res.status(200).json(kasir); // Mengirim semua kasir sebagai respons
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };

// Get Kasir
export const getKasir = async (req, res) => {
  try {
    const kasir = await prisma.kasir.findUnique({
      where: { KodeKasir: req.params.KodeKasir },
    });
    if (!kasir) {
      res.status(404).json({ msg: "Kasir not found" });
    } else {
      res.status(200).json(kasir);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Kasir
export const updateKasir = async (req, res) => {
  try {
    const { KodeKasir } = req.params;
    const { Nama, HP } = req.body;
    const kasir = await prisma.kasir.update({
      where: { KodeKasir },
      data: { Nama, HP },
    });
    res.status(200).json({ msg: "Kasir updated successfully", data: kasir });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Kasir
export const deleteKasir = async (req, res) => {
  try {
    const { KodeKasir } = req.params;
    await prisma.kasir.delete({ where: { KodeKasir } });
    res.status(200).json({ msg: "Kasir deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

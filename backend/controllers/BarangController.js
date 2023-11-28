import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Barang
export const createBarang = async (req, res) => {
  try {
    const response = await prisma.barang.create({
      data: {
        KodeBarang: req.body.KodeBarang,
        NamaBarang: req.body.NamaBarang,
        Satuan: req.body.Satuan,
        HargaSatuan: req.body.HargaSatuan,
        Stok: req.body.Stok,
      },
    });
    res.status(201).json({ msg: "Barang created successfully", data: response });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All Barang
export const getAllBarang = async (req, res) => {
    try {
      const barang = await prisma.barang.findMany(); // Mengambil semua barang
      res.status(200).json(barang); // Mengirim semua barang sebagai respons
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  

// Get Barang
export const getBarang = async (req, res) => {
  try {
    const barang = await prisma.barang.findUnique({
      where: { KodeBarang: req.params.KodeBarang },
    });
    if (!barang) {
      res.status(404).json({ msg: "Barang not found" });
    } else {
      res.status(200).json(barang);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Barang
export const updateBarang = async (req, res) => {
  try {
    const { KodeBarang } = req.params;
    const { NamaBarang, Satuan, HargaSatuan, Stok } = req.body;
    const barang = await prisma.barang.update({
      where: { KodeBarang },
      data: { NamaBarang, Satuan, HargaSatuan, Stok },
    });
    res.status(200).json({ msg: "Barang updated successfully", data: barang });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Barang
export const deleteBarang = async (req, res) => {
  try {
    const { KodeBarang } = req.params;
    await prisma.barang.delete({ where: { KodeBarang } });
    res.status(200).json({ msg: "Barang deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

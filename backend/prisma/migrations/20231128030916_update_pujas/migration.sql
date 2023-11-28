-- CreateTable
CREATE TABLE "Barang" (
    "KodeBarang" TEXT NOT NULL,
    "NamaBarang" TEXT NOT NULL,
    "Satuan" TEXT NOT NULL,
    "HargaSatuan" INTEGER NOT NULL,
    "Stok" INTEGER NOT NULL,

    CONSTRAINT "Barang_pkey" PRIMARY KEY ("KodeBarang")
);

-- CreateTable
CREATE TABLE "Kasir" (
    "KodeKasir" TEXT NOT NULL,
    "Nama" TEXT NOT NULL,
    "HP" TEXT NOT NULL,

    CONSTRAINT "Kasir_pkey" PRIMARY KEY ("KodeKasir")
);

-- CreateTable
CREATE TABLE "Tenan" (
    "KodeTenan" TEXT NOT NULL,
    "NamaTenan" TEXT NOT NULL,
    "HP" TEXT NOT NULL,

    CONSTRAINT "Tenan_pkey" PRIMARY KEY ("KodeTenan")
);

-- CreateTable
CREATE TABLE "Nota" (
    "KodeNota" TEXT NOT NULL,
    "KodeTenan" TEXT NOT NULL,
    "KodeKasir" TEXT NOT NULL,
    "TglNota" DATE NOT NULL,
    "JamNota" TIME NOT NULL,
    "JumlahBelanja" INTEGER NOT NULL,
    "Diskon" INTEGER NOT NULL,
    "Total" INTEGER NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("KodeNota")
);

-- CreateTable
CREATE TABLE "BarangNota" (
    "KodeNota" TEXT NOT NULL,
    "KodeBarang" TEXT NOT NULL,
    "JumlahBarang" INTEGER NOT NULL,
    "HargaSatuan" INTEGER NOT NULL,
    "Jumlah" INTEGER NOT NULL,

    CONSTRAINT "BarangNota_pkey" PRIMARY KEY ("KodeNota")
);

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_KodeTenan_fkey" FOREIGN KEY ("KodeTenan") REFERENCES "Tenan"("KodeTenan") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_KodeKasir_fkey" FOREIGN KEY ("KodeKasir") REFERENCES "Kasir"("KodeKasir") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangNota" ADD CONSTRAINT "BarangNota_KodeNota_fkey" FOREIGN KEY ("KodeNota") REFERENCES "Nota"("KodeNota") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BarangNota" ADD CONSTRAINT "BarangNota_KodeBarang_fkey" FOREIGN KEY ("KodeBarang") REFERENCES "Barang"("KodeBarang") ON DELETE RESTRICT ON UPDATE CASCADE;

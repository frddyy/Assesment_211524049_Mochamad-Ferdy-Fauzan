import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function Barang() {
  const [barang, setBarang] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editedBarang, setEditedBarang] = useState({});

  const openModal = (data) => {
    setEditedBarang(data || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditedBarang({});
  };

  const saveBarang = async () => {
    try {
      // Lakukan permintaan POST atau PUT ke endpoint yang sesuai untuk menyimpan data barang
      // Setelah berhasil disimpan, refresh daftar barang dengan memanggil API atau mengupdate state
      // Kemudian, tutup modal
      closeModal();
    } catch (error) {
      console.error('Error saving barang:', error);
    }
  };

  const deleteBarang = async (id) => {
    try {
      // Lakukan permintaan DELETE ke endpoint yang sesuai untuk menghapus data barang
      // Setelah berhasil dihapus, refresh daftar barang dengan memanggil API atau mengupdate state
    } catch (error) {
      console.error('Error deleting barang:', error);
    }
  };

  useEffect(() => {
    // Ambil daftar barang saat komponen dimount
    async function fetchData() {
      try {
        // Lakukan permintaan GET ke endpoint yang sesuai untuk mendapatkan daftar barang
        // Setelah mendapatkan data, update state barang
        const response = await fetch('/api/barangNota');
        const data = await response.json();
        setBarang(data);
      } catch (error) {
        console.error('Error fetching barang:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Daftar Barang</h1>
      <Button variant="primary" onClick={() => openModal()}>
        Tambah Barang
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barang.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.harga}</td>
              <td>
                <Button variant="info" onClick={() => openModal(item)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deleteBarang(item.id)}>
                  Hapus
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editedBarang.id ? 'Edit Barang' : 'Tambah Barang'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="nama">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Barang"
                value={editedBarang.nama || ''}
                onChange={(e) =>
                  setEditedBarang({
                    ...editedBarang,
                    nama: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Form.Group controlId="harga">
              <Form.Label>Harga Barang</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan Harga Barang"
                value={editedBarang.harga || ''}
                onChange={(e) =>
                  setEditedBarang({
                    ...editedBarang,
                    harga: e.target.value,
                  })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={saveBarang}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Barang;

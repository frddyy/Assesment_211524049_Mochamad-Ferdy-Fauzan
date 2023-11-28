import { BrowserRouter, Routes, Route } from "react-router-dom";
import BarangPage from "./views/Barang";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BarangPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

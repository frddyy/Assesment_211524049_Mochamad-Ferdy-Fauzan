import express from "express";
import cors from "cors";

import BarangRoute from "./routes/BarangRoute.js";
import KasirRoute from "./routes/KasirRoute.js";
import TenanRoute from "./routes/TenanRoute.js";
import NotaRoute from "./routes/NotaRoute.js";
import BarangNota from "./routes/BarangNotaRoute.js";

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(BarangRoute);
app.use(KasirRoute);
app.use(TenanRoute);
app.use(NotaRoute);
app.use(BarangNota);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

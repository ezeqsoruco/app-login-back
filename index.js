const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", function (req, res) {
  const usuario = req.body.usuario;
  const password = req.body.password;
  console.log(usuario, password);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Se está escuchando en el puerto:", PORT);
});

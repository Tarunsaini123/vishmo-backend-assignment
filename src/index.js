const express = require("express");
const cors = require("cors");
const { getAll, add } = require("./services");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get("/services", (req, res) => {
  res.json(getAll());
});

app.get("/", (req, res) => {
  res.send("Welcome to Vishmo Jr. Dev API – use /services or /health");
});


app.post("/services", (req, res) => {
  const { name, provider, price } = req.body;
  if (!name || !provider || typeof price !== "number") {
    return res.status(400).json({ error: "name, provider, price(number) required" });
  }
  const created = add({ name, provider, price });
  res.status(201).json(created);
});


app.get("/health", (req, res) => res.send("OK"));

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));

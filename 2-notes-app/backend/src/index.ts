import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

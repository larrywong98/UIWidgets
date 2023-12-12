import express from "express";
const app = express();
const PORT = 4000;

app.listen(PORT, (err) => {
  console.log("Server running on", PORT);
});

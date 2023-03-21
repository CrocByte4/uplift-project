require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Data = require("./models/data");
const bp = require("body-parser");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json());

mongoose.connect(process.env.DATABASE_URL);

app.get("/data", async (request, response) => {
  try {
    const data = await Data.find(request.query);
    response.status(200).json(data);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

app.post("/data", async (request, response) => {
  try {
    const newData = await Data.create(request.body);
    response.status(200).json(newData);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

app.delete("/data/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedData = await Data.findByIdAndDelete(id);
    response.status(200).send(deletedData);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

app.put("/data/:id", async (request, response) => {
  try {
    const updatedData = await Data.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).json(updatedData);
  } catch (error) {
    console.log(error);
    response.status(500).json(error)
  }
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}, ready for input.`))
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dataSchema = new Schema({
  date: String,
  mood: Number,
  sleep: Number,
  activity: Number,
});

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;

const mongoose = require("mongoose");
require("dotenv").config();

const Data = require("./models/data");

mongoose.connect(process.env.DATABAS_URL);

async function seed() {
  await Data.create({ date: "20/03/2023", mood: 4, sleep: 7, activity: 0 });
  console.log("Created a new data set");

  await Data.create({ date: "21/03/2023", mood: 6, sleep: 8, activity: 0 });
  console.log("Created a new data set");

  mongoose.disconnect();
}

seed();

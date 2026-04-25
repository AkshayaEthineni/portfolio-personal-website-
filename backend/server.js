require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => console.log("DB connected"))
.catch(err => console.log(err));

// ✅ Schema
const Project = mongoose.model("Project", {
  title: String,
  desc: String
});

// ✅ Get Projects
app.get("/projects", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// ✅ Add Projects (NO DUPLICATES)
app.get("/add", async (req, res) => {
    const count = await
  // Clear old data
  await Project.deleteMany({});
  if(count===0){
  // Add fresh data
  await Project.create({ title: "Portfolio", desc: "My website" });
  await Project.create({ title: "Task App", desc: "CRUD project" });

  res.send("Fresh data added");
  }
  else{
    res.send("Data already exits");
  }
});

// ✅ Server
app.listen(5000, () => console.log("Server running on 5000"));
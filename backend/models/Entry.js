const mongoose = require("mongoose");



const entrySchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  mood: { type: String, default: "Neutral" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Entry", entrySchema);
 



const express = require("express");
const Entry = require("../models/Entry");

const { protect } = require("../middleware/authMiddleware");
const router = express.Router();



// Create entry
router.post("/", protect, async (req, res) => {
  try {
    const entry = new Entry({ ...req.body, user: req.userId });
    await entry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all entries
router.get("/", protect, async (req, res) => {
  try {
    const entries = await Entry.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get dashboard stats
router.get("/stats", protect, async (req, res) => {
  try {
    const totalEntries = await Entry.countDocuments({ user: req.userId });

    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
    startOfWeek.setHours(0, 0, 0, 0);

    const thisWeek = await Entry.countDocuments({
      createdAt: { $gte: startOfWeek },
      user: req.userId    
    });

   const latestEntry = await Entry.findOne({
    user: req.userId
}).sort({ createdAt: -1 });
    const mood = latestEntry ? latestEntry.mood : "—";

    res.json({ totalEntries, thisWeek, mood });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;


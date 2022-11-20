const express = require("express");
const {
  createNote,
  getallNotes,
  getNote,
  deleteNote,
} = require("../controllers/noteController");

const router = express.Router();

//GET all Notes
router.get("/", getallNotes);

//GET a single Note
router.get("/:id", getNote);

//POST a new Note
router.post("/", createNote);

// DELETE a Note
router.delete("/:id", deleteNote);

module.exports = router;
